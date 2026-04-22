import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/styles/globals.css";
import SmoothScroll from "@/util/SmoothScroll";

export const metadata: Metadata = {
  title: "Habibi Independent Community",
  description: "Habibi Independent Community",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`h-full`}
    >
      <body className="min-h-full flex flex-col">
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
