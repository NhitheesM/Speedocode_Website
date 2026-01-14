import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import { OrganizationJsonLd, WebsiteJsonLd, LocalBusinessJsonLd } from "@/components/JsonLd";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const baseUrl = "https://speedocodesystems.online";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Speedocode Systems | Modern Software Solutions",
    template: "%s | Speedocode Systems",
  },
  description: "We build premium software solutions that transform businesses. Custom websites, mobile apps, business automation, and blockchain development services.",
  keywords: [
    "software development",
    "web development",
    "mobile app development",
    "business automation",
    "blockchain development",
    "custom software",
    "React development",
    "Next.js development",
    "iOS app development",
    "Android app development",
    "workflow automation",
    "smart contracts",
    "digital transformation",
    "software agency",
  ],
  authors: [{ name: "Speedocode Systems" }],
  creator: "Speedocode Systems",
  publisher: "Speedocode Systems",
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
  manifest: "/manifest.json",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseUrl,
    siteName: "Speedocode Systems",
    title: "Speedocode Systems | Modern Software Solutions",
    description: "We build premium software solutions that transform businesses. Websites, Mobile Apps, Automation, and Blockchain development.",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Speedocode Systems - Modern Software Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Speedocode Systems | Modern Software Solutions",
    description: "We build premium software solutions that transform businesses.",
    images: ["/og-image.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: baseUrl,
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <OrganizationJsonLd />
        <WebsiteJsonLd />
        <LocalBusinessJsonLd />
      </head>
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} antialiased bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
