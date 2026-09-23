import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import PrototypeNav from "./_components/PrototypeNav";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  weight: ["400", "500", "700", "900"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "BRUMBY AI｜物件販売支援システム",
  description:
    "データ×AI×人の力で、不動産の「売れる」を実現する物件販売支援システムのモックアップ",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ja" className={`${notoSansJP.variable} h-full antialiased`}>
      <body className="min-h-screen flex flex-col bg-canvas text-ink font-sans">
        <PrototypeNav />
        {children}
      </body>
    </html>
  );
}
