import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const GA_MEASUREMENT_ID = "G-N0WWKMEW5T";

export const metadata: Metadata = {
  metadataBase: new URL("https://aeliverfrozenproductstrading.com"),
  title: {
    default: "A.Eliver Frozen Products Trading | Bacolod City Frozen Food Wholesaler",
    template: "%s | A.Eliver Frozen Products Trading Bacolod",
  },
  description:
    "A.Eliver Frozen Products Trading - Bacolod City's trusted frozen food wholesaler since 2018. We supply premium frozen products including hotdogs, tocino, longganisa, bacon, nuggets, and seafood from top brands like San Miguel, CDO, Tender Juicy, Virginia, and more. Wholesale prices for Bacolod businesses.",
  keywords: [
    "frozen food Bacolod",
    "frozen products Bacolod City",
    "Bacolod frozen food supplier",
    "Bacolod frozen food wholesaler",
    "frozen food trading Bacolod",
    "wholesale frozen food Bacolod",
    "A.Eliver Frozen Products",
    "Aeliver Frozen Bacolod",
    "frozen meat supplier Bacolod",
    "hotdog supplier Bacolod",
    "tocino longganisa Bacolod",
    "CDO products Bacolod",
    "San Miguel Pure Foods Bacolod",
    "Tender Juicy Bacolod distributor",
    "Virginia products Bacolod",
    "frozen seafood Bacolod",
    "processed meat Bacolod City",
    "Negros Occidental frozen food",
    "Bacolod food distributor",
    "wholesale food supplier Bacolod",
  ],
  authors: [{ name: "A.Eliver Frozen Products Trading" }],
  creator: "A.Eliver Frozen Products Trading",
  publisher: "A.Eliver Frozen Products Trading",
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
  openGraph: {
    type: "website",
    locale: "en_PH",
    url: "https://aeliverfrozenproductstrading.com",
    siteName: "A.Eliver Frozen Products Trading",
    title: "A.Eliver Frozen Products Trading | Bacolod City Frozen Food Wholesaler",
    description:
      "Bacolod City's trusted frozen food wholesaler since 2018. Premium frozen products at wholesale prices. Hotdogs, tocino, longganisa, bacon, nuggets, seafood and more.",
    images: [
      {
        url: "/images/logo.png",
        width: 800,
        height: 800,
        alt: "A.Eliver Frozen Products Trading - Bacolod Frozen Food Supplier",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "A.Eliver Frozen Products Trading | Bacolod Frozen Food Wholesaler",
    description:
      "Bacolod City's trusted frozen food wholesaler since 2018. Premium frozen products at wholesale prices.",
    images: ["/images/logo.png"],
  },
  alternates: {
    canonical: "https://aeliverfrozenproductstrading.com",
  },
  category: "Food & Beverage",
  classification: "Frozen Food Wholesaler",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://aeliverfrozenproductstrading.com",
  name: "A.Eliver Frozen Products Trading",
  alternateName: ["Aeliver Frozen Products", "A Eliver Frozen Bacolod"],
  description:
    "Bacolod City's trusted frozen food wholesaler since 2018. We supply premium frozen products including hotdogs, tocino, longganisa, bacon, nuggets, and seafood from top Philippine brands at wholesale prices.",
  url: "https://aeliverfrozenproductstrading.com",
  telephone: ["+63-954-412-8989", "+63-975-261-8594"],
  email: "",
  image: "/images/logo.png",
  logo: "/images/logo.png",
  priceRange: "$$",
  currenciesAccepted: "PHP",
  paymentAccepted: "Cash, GCash, Bank Transfer",
  address: {
    "@type": "PostalAddress",
    streetAddress: "",
    addressLocality: "Bacolod City",
    addressRegion: "Negros Occidental",
    postalCode: "6100",
    addressCountry: "PH",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 10.7000182,
    longitude: 122.9713241,
  },
  areaServed: [
    {
      "@type": "City",
      name: "Bacolod City",
    },
    {
      "@type": "State",
      name: "Negros Occidental",
    },
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "08:00",
      closes: "18:00",
    },
  ],
  sameAs: [
    "https://www.facebook.com/A.EliverFrozen",
    "https://m.me/A.EliverFrozen",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: ["+63-954-412-8989", "+63-975-261-8594"],
    contactType: "sales",
    areaServed: "PH",
    availableLanguage: ["English", "Filipino", "Hiligaynon"],
  },
  founder: {
    "@type": "Person",
    name: "Angelie Balinas Eliver-Braca",
  },
  foundingDate: "2018",
  numberOfEmployees: {
    "@type": "QuantitativeValue",
    minValue: 1,
    maxValue: 10,
  },
  knowsAbout: [
    "Frozen Food Distribution",
    "Wholesale Food Supply",
    "Frozen Meat Products",
    "Processed Food",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Frozen Products Catalog",
    itemListElement: [
      {
        "@type": "OfferCatalog",
        name: "Processed Meats",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Product", name: "Hotdogs" } },
          { "@type": "Offer", itemOffered: { "@type": "Product", name: "Tocino" } },
          { "@type": "Offer", itemOffered: { "@type": "Product", name: "Longganisa" } },
          { "@type": "Offer", itemOffered: { "@type": "Product", name: "Bacon" } },
          { "@type": "Offer", itemOffered: { "@type": "Product", name: "Ham" } },
        ],
      },
      {
        "@type": "OfferCatalog",
        name: "Frozen Ready-to-Cook",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Product", name: "Nuggets" } },
          { "@type": "Offer", itemOffered: { "@type": "Product", name: "Patties" } },
          { "@type": "Offer", itemOffered: { "@type": "Product", name: "Frozen Seafood" } },
        ],
      },
    ],
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "46000",
    bestRating: "5",
    worstRating: "1",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://aeliverfrozenproductstrading.com",
    },
  ],
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "A.Eliver Frozen Products Trading",
  url: "https://aeliverfrozenproductstrading.com",
  logo: "/images/logo.png",
  foundingDate: "2018",
  founders: [
    {
      "@type": "Person",
      name: "Angelie Balinas Eliver-Braca",
    },
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bacolod City",
    addressRegion: "Negros Occidental",
    addressCountry: "Philippines",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: ["+63-954-412-8989", "+63-975-261-8594"],
    contactType: "Customer Service",
  },
  sameAs: ["https://www.facebook.com/A.EliverFrozen"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <head>
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#9C27B0" />
        <meta name="geo.region" content="PH-NEC" />
        <meta name="geo.placename" content="Bacolod City" />
        <meta name="geo.position" content="10.7000182;122.9713241" />
        <meta name="ICBM" content="10.7000182, 122.9713241" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body className="min-h-screen antialiased">
        {/* Google Analytics */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}
