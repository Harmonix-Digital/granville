import type { Metadata } from "next";
import { Sora, Manrope } from "next/font/google";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["500", "700","800"],
});

export const metadata: Metadata = {
  title: "Granville | DJ Festival",
  description: "Granville | DJ Festival",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${sora.variable} ${manrope.variable} font-sora h-full antialiased`}
    >
      <body className=" min-h-full flex flex-col">{children}</body>
    </html>
  );
}
