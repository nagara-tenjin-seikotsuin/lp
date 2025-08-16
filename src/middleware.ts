// src/middleware.ts
import type { MiddlewareHandler } from "astro";
import { weights } from "./config/ab-config.json";

const EXPERIMENT_COOKIE = "ab_variant";
const EXPERIMENT_QA_PARAM = "ab"; // 例: ?ab=A / ?ab=B
const EXPERIMENT_RESET_PARAM = "abreset"; // 例: ?abreset=1
const COOKIE_DAYS = 30;

// 重み（合計は任意、% ではなく比でOK）
const VARIANTS: Record<string, number> = {
  A: weights.A,
  B: weights.B,
};

export const onRequest: MiddlewareHandler = async (context, next) => {
  const url = new URL(context.request.url);

  // ① QA: リセット要求
  if (url.searchParams.get(EXPERIMENT_RESET_PARAM)) {
    context.cookies.delete(EXPERIMENT_COOKIE, { path: "/" });
  }

  // ② QA: URL パラメータで強制指定
  let qaVariant = url.searchParams.get(EXPERIMENT_QA_PARAM)?.toUpperCase();
  if (qaVariant && !(qaVariant in VARIANTS)) {
    qaVariant = undefined; // 不正値は無視
  }

  // ③ 既存 cookie の確認
  const cookieVariant = context.cookies.get(EXPERIMENT_COOKIE)?.value;
  const baseVariant =
    qaVariant ??
    (cookieVariant && cookieVariant in VARIANTS ? cookieVariant : undefined);

  // ④ 未割当なら Weighted で決定
  const variant: "A" | "B" = (baseVariant ?? chooseWeighted(VARIANTS)) as
    | "A"
    | "B";

  // ⑤ locals に格納（ページ側で参照）
  context.locals.ab = variant;

  // ⑥ cookie を保存（QA で指定した場合も保存して固定）
  const maxAge = COOKIE_DAYS * 24 * 60 * 60;
  context.cookies.set(EXPERIMENT_COOKIE, variant, {
    path: "/",
    httpOnly: false, // クライアントでも参照したいなら false
    sameSite: "lax",
    secure: true,
    maxAge,
  });

  return next();
};

/** 重みに応じて 1 つ選ぶシンプル版（ランダム）。 */
function chooseWeighted(weights: Record<string, number>): string {
  const entries = Object.entries(weights);
  const total = entries.reduce((acc, [, w]) => acc + w, 0);
  let r = Math.random() * total;
  for (const [name, w] of entries) {
    if ((r -= w) <= 0) return name;
  }
  return entries[0][0];
}
