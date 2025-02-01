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
  metadataBase: new URL('https://sp-tarkov.com'),
  title: {
    default: "Single Player Tarkov - Offline EFT Experience",
    template: "%s | Single Player Tarkov"
  },
  description: "Experience Escape from Tarkov offline with Single Player Tarkov (SPT). Enjoy full progression, modding support, and a stress-free environment without cheaters or forced PvP.",
  keywords: [
    "Single Player Tarkov",
    "SPT",
    "Offline Tarkov",
    "EFT Single Player",
    "Tarkov Mods",
    "Escape from Tarkov Offline",
    "SPT-AKI",
    "Tarkov PvE",
    "EFT Mods",
    "Tarkov Practice"
  ],
  authors: [
    { name: "SPT Team" }
  ],
  creator: "SPT Team",
  publisher: "SPT Team",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sp-tarkov.com",
    siteName: "Single Player Tarkov",
    title: "Single Player Tarkov - The Ultimate Offline EFT Experience",
    description: "Transform your Escape from Tarkov into a complete offline experience. Enjoy full progression, extensive mod support, and a stress-free environment.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Single Player Tarkov Preview"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Single Player Tarkov - Offline EFT Experience",
    description: "Experience Escape from Tarkov offline with full progression and mod support. No cheaters, no forced PvP, just pure Tarkov gameplay.",
    creator: "@sptarkov"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: "https://sp-tarkov.com",
  },
  category: "Gaming",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#fff350" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
