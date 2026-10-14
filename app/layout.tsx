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

  icons: {
    icon: "/icon.svg",
  },

  openGraph: {
    type: "website",
    siteName: "Abdulloh.dev",
    title: "Portfolio - Abdulloh Jo'rayev",
    description: "portfolio, frontend, react, next",
    url: "https://portfolio-abdulloh-ivory.vercel.app/",
    images: [
      {
        url: "/og-image.png",
        width: 1012,
        height: 1024,
        alt: "Abdulloh Jo'rayev Portfolio",
      },
    ],
    locale: "uz_UZ",
  },

  twitter: {
    card: "summary_large_image",
    title: "Portfolio - Abdulloh Jo'rayev",
    description: "portfolio, frontend, react, next",
    images: ["/og-image.png"],
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
