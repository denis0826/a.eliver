import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export const metadata: Metadata = {
  title: "A.Eliver Frozen Products Trading | Bacolod's Trusted Frozen Food Wholesaler",
  description:
    "A.Eliver Frozen Products Trading - Your trusted frozen food supplier in Bacolod City. We offer premium frozen products from top brands like San Miguel, CDO, Virginia, and more at wholesale prices. Contact us for hotdogs, tocino, longganisa, bacon, nuggets, and other frozen goods.",
  keywords: [
    "frozen food supplier Bacolod",
    "frozen products wholesaler",
    "A.Eliver Frozen Products",
    "Bacolod frozen food",
    "wholesale frozen food Philippines",
    "San Miguel Pure Foods",
    "CDO products",
    "Tender Juicy hotdogs",
    "frozen meat supplier",
    "tocino longganisa Bacolod",
  ],
  authors: [{ name: "A.Eliver Frozen Products Trading" }],
  creator: "A.Eliver Frozen Products Trading",
  publisher: "A.Eliver Frozen Products Trading",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_PH",
    url: "https://www.facebook.com/A.EliverFrozen",
    siteName: "A.Eliver Frozen Products Trading",
    title: "A.Eliver Frozen Products Trading | Bacolod's Trusted Frozen Food Wholesaler",
    description:
      "Your trusted frozen food supplier in Bacolod City. Premium frozen products from top brands at wholesale prices.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "A.Eliver Frozen Products Trading",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "A.Eliver Frozen Products Trading",
    description:
      "Bacolod's trusted frozen food wholesaler. Quality products at wholesale prices.",
    images: ["/images/og-image.jpg"],
  },
  verification: {
    google: "",
  },
  alternates: {
    canonical: "https://www.facebook.com/A.EliverFrozen",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "A.Eliver Frozen Products Trading",
  image: "/images/logo.png",
  "@id": "https://www.facebook.com/A.EliverFrozen",
  url: "https://www.facebook.com/A.EliverFrozen",
  telephone: "+63-954-412-8989",
  address: {
    "@type": "PostalAddress",
    streetAddress: "",
    addressLocality: "Bacolod City",
    addressRegion: "Negros Occidental",
    postalCode: "",
    addressCountry: "PH",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 10.6765,
    longitude: 122.9509,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "08:00",
    closes: "18:00",
  },
  sameAs: ["https://www.facebook.com/A.EliverFrozen"],
  priceRange: "$$",
  servesCuisine: "Frozen Food Products",
  description:
    "A.Eliver Frozen Products Trading is Bacolod City's trusted frozen food wholesaler, offering premium frozen products from top Philippine brands at competitive wholesale prices.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#E91E63" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
