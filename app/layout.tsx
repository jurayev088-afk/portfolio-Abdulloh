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
  metadataBase: new URL("https://portfolio-abdulloh-ivory.vercel.app/"),

  title: "Abdulloh.dev",

  description: "portfolio abdulloh jorayev",

  openGraph: {
    type: "website",
    siteName: "Abdulloh.dev",
    title: "Portfolio - Abdulloh Jo'rayev",
    description: "portfolio, frontend, react, next",
    url: "https://portfolio-abdulloh-ivory.vercel.app/",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Abdulloh Jo'rayev Portfolio",
      },
    ],
    locale: "uz_UZ",
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
