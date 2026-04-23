import type { Metadata } from "next";
import "@/styles/globals.css";
import SmoothScroll from "@/util/SmoothScroll";

const baseUrl = 'https://habibi-independent-community.vercel.app';

export const metadata = {
  title: 'Habibi Independent Community',
  description: 'Cộng đồng dành cho những người yêu thích đô vật và Trung Đông',
  openGraph: {
    title: 'Habibi Independent Community - Gia nhập ngay',
    description: 'Nơi kết nối đam mê và tinh thần võ sĩ Trung Đông.',
    url: baseUrl,
    siteName: 'Habibi Community',
    images: [
      {
        url: `${baseUrl}/metadata-logo.png`, // Trỏ trực tiếp vào file trong thư mục public
        width: 1200,
        height: 630,
        alt: 'Habibi Community Logo',
      },
    ],
    locale: 'vi_VN',
    type: 'website',
  },
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
