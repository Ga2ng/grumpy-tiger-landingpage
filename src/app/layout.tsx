import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import "./globals.css";

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter-tight",
});

export const metadata: Metadata = {
  title: "GRUMPY - The Tiger of Solana",
  description: "The most ruthlessly honest memecoin on Solana. Built by grumps, for grumps. No fluff, no fake promises - just pure, unfiltered grumpiness.",
  icons: {
    icon: [
      { url: '/assets/grumpy6.JPG', sizes: '32x32', type: 'image/png' },
      { url: '/assets/grumpy6.JPG', sizes: '16x16', type: 'image/png' },
    ],
    apple: [
      { url: '/assets/grumpy6.JPG', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/assets/grumpy6.JPG',
  },
  openGraph: {
    title: "GRUMPY - The Tiger of Solana",
    description: "The most ruthlessly honest memecoin on Solana. Built by grumps, for grumps.",
    images: ['/assets/grumpy6.JPG'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "GRUMPY - The Tiger of Solana",
    description: "The most ruthlessly honest memecoin on Solana. Built by grumps, for grumps.",
    images: ['/assets/grumpy6.JPG'],
  },
  manifest: '/manifest.json',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/assets/grumpy6.JPG" />
        <link rel="apple-touch-icon" href="/assets/grumpy6.JPG" />
        <link rel="shortcut icon" href="/assets/grumpy6.JPG" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body
        className={`${interTight.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
