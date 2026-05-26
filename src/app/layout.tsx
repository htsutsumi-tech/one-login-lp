import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "One Login, All Contents | 株式会社ワンエイティ",
  description:
    "AIネイティブ開発体制で、顧客ごとに最適化された統合プロダクトを高速実装。共同開発パートナーを募集しています。",
  openGraph: {
    title: "One Login, All Contents | 株式会社ワンエイティ",
    description:
      "その事業構想、「既製SaaS」で妥協しない。AIネイティブ開発による共創パートナーシップ。",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
