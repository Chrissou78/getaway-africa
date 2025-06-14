import "./globals.css";
import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter"
});

const outfit = Outfit({ 
  subsets: ["latin"],
  variable: "--font-outfit"
});

export const metadata: Metadata = {
  title: "Gateway Africa - Investment Platform for African Opportunities",
  description: "Gateway Africa connects global investors and companies to Africa's most promising opportunities in sustainable energy, exports, and business development.",
  keywords: "Africa investment, sustainable energy, business development, export advisory, African markets, renewable energy, investment opportunities",
  authors: [{ name: "Gateway Africa" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    title: "Gateway Africa - Build with Africa. Invest in the Future.",
    description: "Gateway Africa connects global investors and companies to Africa's most promising opportunities in sustainable energy, exports, and business development.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
        <body className={inter.className}>{children}</body>
    </html>
  );
}