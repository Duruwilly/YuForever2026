import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteConfig = {
  name: "Yinka & Uzochukwu | #YuForever2026 💍",
  description:
    "Celebrating love, family, and forever. Join Yinka & Uzochukwu as we say 'I do' on January 10, 2026 in Lagos, Nigeria.",
  url: "https://yuforever2026.online/",
  image:
    "https://res.cloudinary.com/dwfemmam4/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1766486607/Screenshot_2025-12-23_at_11.40.43_mywqyq.png",
  keyWords:
    "Yinka,Uzochukwu,wedding,wedding invitation,Lagos wedding,Nigeria wedding,YuForever2026,love story,wedding details,wedding registry,wedding gallery",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    template: `%s | ${siteConfig.name}`,
    default: `${siteConfig.name}`,
  },
  description: `${siteConfig.description}`,
  keywords: `${siteConfig.keyWords}`,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.image,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.image],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
