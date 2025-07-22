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

// app/layout.tsx
export const metadata = {
  title: 'Home Buyer Guidebooks | Co-Branded Mortgage Guides',
  description:
    'Free downloadable home buyer guides co-branded by your trusted mortgage lender and real estate agent. Start your journey to homeownership with clarity.',
  icons: {
    icon: '/favicon.png', // Or '/favicon.ico' if you used .ico
  },
  openGraph: {
    title: 'Home Buyer Guidebooks',
    description:
      'Free downloadable home buyer guides co-branded by your trusted mortgage lender and real estate agent.',
    url: 'https://www.homebuyerguidebooks.com',
    siteName: 'Home Buyer Guidebooks',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Home Buyer Guidebooks',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Home Buyer Guidebooks',
    description: 'Free downloadable guides for home buyers!',
    images: ['/og-image.png'],
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
