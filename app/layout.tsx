import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nwitter",
  description: "nomadclone-contes nwitter",
};

export default function RootLayout({
  children,
  dashboard,
  login,
}: {
  dashboard: React.ReactNode;
  children: React.ReactNode;
  login: React.ReactNode;
}) {
  return (
    <html lang="kr">
      <body className={`${inter.className} bg-black text-white`}>{login}</body>
    </html>
  );
}
