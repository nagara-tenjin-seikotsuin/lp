# 長良天神整骨院 - ランディングページ

整骨院のランディングページです。Astro + Tailwind CSSで構築されています。

## 🏥 プロジェクト概要

長良天神整骨院のランディングページで、以下の機能を提供しています：

- **レスポンシブデザイン**: モバイル・タブレット・デスクトップ対応
- **Googleレビュー表示**: 実際のGoogleレビューを美しいカード形式で表示
- **アコーディオン機能**: 長いレビューテキストの展開・折りたたみ
- **SEO最適化**: メタタグとOGP画像の設定
- **高速表示**: Astroの静的サイト生成による高速パフォーマンス

## 🚀 技術スタック

- **フレームワーク**: Astro
- **スタイリング**: Tailwind CSS
- **言語**: TypeScript
- **パッケージマネージャー**: pnpm

## 📁 プロジェクト構造

```
/
├── public/
│   ├── favicon.png
│   ├── ogp.png
│   └── CNAME
├── src/
│   ├── components/
│   │   ├── Cv.astro          # CTAボタンコンポーネント
│   │   ├── ElfsightReviews.astro
│   │   ├── Footer.astro      # フッター
│   │   ├── Header.astro      # ヘッダー
│   │   ├── Map.astro         # 地図コンポーネント
│   │   ├── Reviews.astro     # レビュー表示
│   │   └── Reviews.astro
│   ├── constants/
│   │   └── reviews.ts        # レビューデータ
│   ├── layouts/
│   │   └── Layout.astro      # メインレイアウト
│   ├── pages/
│   │   └── index.astro       # メインページ
│   ├── styles/
│   │   └── global.css        # グローバルスタイル
│   └── libs/
│       └── textConverter.ts  # テキスト変換ユーティリティ
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

## 🧞 コマンド

プロジェクトルートで以下のコマンドを実行してください：

| コマンド | 説明 |
| :------- | :--- |
| `pnpm install` | 依存関係をインストール |
| `pnpm dev` | 開発サーバーを起動（`localhost:4321`） |
| `pnpm build` | 本番用サイトを`./dist/`にビルド |
| `pnpm preview` | ビルドしたサイトをローカルでプレビュー |
| `pnpm astro ...` | Astro CLIコマンドを実行 |

## 🎨 主な機能

### レビュー表示システム
- Googleレビューの美しいカード表示
- アバター画像と認証バッジ
- 星評価の視覚化
- アコーディオン形式のテキスト展開

### レスポンシブデザイン
- モバイルファーストアプローチ
- タブレット・デスクトップ対応
- 最適化された画像表示

### パフォーマンス最適化
- 画像の遅延読み込み
- エラーハンドリング
- 静的サイト生成

## 🚀 デプロイ

このプロジェクトはGitHub Pagesでデプロイされています。

## 📝 ライセンス

このプロジェクトは長良天神整骨院のLPサイトです。
