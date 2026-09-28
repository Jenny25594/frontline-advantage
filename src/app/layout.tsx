import '@/styles/globals.css';
import type { Metadata } from 'next';
import { Poppins, Inter } from 'next/font/google';

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Frontline Advantage | AI-Powered Workforce Growth',
  description: 'Develop skills, capabilities, and leadership readiness with AI-driven personalized learning. Built for frontline workers, sales teams, and organizations.',
  keywords: ['learning', 'skills development', 'AI coaching', 'workforce growth', 'LMS', 'LXP'],
  authors: [{ name: 'Frontline Advantage' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://frontlineadvantage.com',
    title: 'Frontline Advantage | AI-Powered Workforce Growth',
    description: 'Develop skills, capabilities, and leadership readiness with AI-driven personalized learning.',
    images: [
      {
        url: 'https://frontlineadvantage.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Frontline Advantage',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Frontline Advantage',
    description: 'AI-Powered Workforce Growth Platform',
    images: ['https://frontlineadvantage.com/og-image.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${poppins.variable} ${inter.variable}`}>
        {children}
      </body>
    </html>
  );
}
