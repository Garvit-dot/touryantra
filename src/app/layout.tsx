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
  metadataBase: new URL("https://touryantra.com"),

  title: {
    default: "TourYantra",
    template: "%s | TourYantra",
  },

  description:
    "Discover handcrafted international journeys with TourYantra. Experience luxury travel across Dubai, Bali, Vietnam and Thailand with thoughtfully curated itineraries.",

  keywords: [
    "TourYantra",
    "Luxury Travel",
    "International Tours",
    "Dubai Tour Packages",
    "Bali Tour Packages",
    "Vietnam Tour",
    "Thailand Tour",
    "Travel Agency India",
  ],

  authors: [
    {
      name: "TourYantra",
    },
  ],

  creator: "TourYantra",

  publisher: "TourYantra",

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "https://touryantra.com",
  },

  openGraph: {
    title: "TourYantra",

    description:
      "Engineered journeys. Effortless memories. Explore handcrafted international experiences with TourYantra.",

    url: "https://touryantra.com",

    siteName: "TourYantra",

    locale: "en_US",

    type: "website",

    images: [
      {
        url: "/logos/logo-transparent2.png",
        width: 1200,
        height: 630,
        alt: "TourYantra",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "TourYantra",

    description:
      "Engineered journeys. Effortless memories.",

    images: ["/logos/logo-transparent2.png"],
  },

  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },

  themeColor: "#07111F",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
