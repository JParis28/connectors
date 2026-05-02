import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Connectors — The Phone Always Gets Answered",
  description:
    "An AI front office for home-services contractors. Picks up by the second ring, books the job, texts the customer back. 24/7.",
  openGraph: {
    title: "Connectors — The Phone Always Gets Answered",
    description:
      "An AI front office for home-services contractors. Picks up by the second ring, books the job, texts the customer back. 24/7.",
    siteName: "Connectors",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Connectors" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Connectors — The Phone Always Gets Answered",
    description:
      "An AI front office for home-services contractors. Picks up by the second ring, books the job, texts the customer back. 24/7.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased text-ink bg-white">
        {children}
      </body>
    </html>
  );
}
