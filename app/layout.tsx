import type { Metadata } from "next";
import {
  Cormorant_Garamond,
  Geist_Mono,
  Manrope,
} from "next/font/google";
import { HeroWrapper } from "@/components/HeroWrapper";
import "./globals.css";
const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Gordon Wong — Software Engineer",
  description: "Portfolio of Gordon Wong, a software engineer working across applied AI, computational science, and product engineering.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${manrope.variable} ${geistMono.variable} ${cormorant.variable} antialiased`}
      >
        <HeroWrapper>{children}</HeroWrapper>
      </body>
    </html>
  );
}
