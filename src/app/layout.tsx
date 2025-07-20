import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "GRUMPY - The Tiger of Solana",
  description: "The most ruthlessly honest memecoin on Solana. Built by grumps, for grumps. No fluff, no fake promises - just pure, unfiltered grumpiness.",
  icons: {
    icon: '/assets/grumpy_tiger.png',
    apple: '/assets/grumpy_tiger.png',
  },
  openGraph: {
    title: "GRUMPY - The Tiger of Solana",
    description: "The most ruthlessly honest memecoin on Solana. Built by grumps, for grumps.",
    images: ['/assets/grumpy_tiger.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: "GRUMPY - The Tiger of Solana",
    description: "The most ruthlessly honest memecoin on Solana. Built by grumps, for grumps.",
    images: ['/assets/grumpy_tiger.png'],
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
