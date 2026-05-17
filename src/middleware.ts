import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware(({ locals, cookies }, next) => {
  const existing = cookies.get("ab")?.value;

  if (existing === "A" || existing === "B") {
    locals.ab = existing;
  } else {
    const assigned = Math.random() < 0.5 ? "A" : "B";
    locals.ab = assigned;
    cookies.set("ab", assigned, {
      path: "/",
      maxAge: 60 * 60 * 24 * 30, // 30日
      sameSite: "lax",
    });
  }

  return next();
});
