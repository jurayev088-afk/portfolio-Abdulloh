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


export const metadata: Metadata = {
  metadataBase: new URL(
    "https://portfolio-abdulloh-ivory.vercel.app"
  ),

  title: "Abdulloh.dev",
  description: "Portfolio Abdulloh Jo'rayev",

  icons: {
    icon: "/icon.svg",
  },

  openGraph: {
    type: "website",
    siteName: "Abdulloh.dev",
    title: "Portfolio - Abdulloh Jo'rayev",
    description: "Frontend Developer | React | Next.js",
    url: "https://portfolio-abdulloh-ivory.vercel.app/",
    images: [
      {
        url: "https://portfolio-abdulloh-ivory.vercel.app/og-image.png?v=3",
        width: 1200,
        height: 630,
        alt: "Abdulloh Jo'rayev Portfolio",
      },
    ],
    locale: "uz_UZ",
  },

  twitter: {
    card: "summary_large_image",
    title: "Portfolio - Abdulloh Jo'rayev",
    description: "Frontend Developer | React | Next.js",
    images: [
      "https://portfolio-abdulloh-ivory.vercel.app/og-image.png?v=3",
    ],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
