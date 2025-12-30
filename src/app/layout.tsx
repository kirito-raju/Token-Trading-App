import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Token Discovery - Axiom Trade",
  description: "Real-time token metrics and trading data",
  keywords: ["crypto", "tokens", "trading", "defi"],
  authors: [{ name: "Your Name" }],
  openGraph: {
    title: "Token Discovery - Axiom Trade",
    description: "Real-time token metrics and trading data",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
