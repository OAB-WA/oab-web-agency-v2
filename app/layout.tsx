import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { getOrganizationSchema, getWebSiteSchema } from "@/lib/seo/structured-data";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "OAB Web Agency - High-Converting Websites for Service Businesses",
    template: "%s | OAB Web Agency",
  },
  description:
    "OAB Web Agency builds high-converting websites for service-based businesses across the United States. We specialize in lead generation, conversion optimization, and local SEO to help service businesses grow their online presence and revenue.",
  keywords: [
    "service business website",
    "high converting website",
    "lead generation website",
    "local SEO",
    "conversion optimization",
    "service business web design",
    "plumber website",
    "electrician website",
    "lawyer website",
    "USA service business",
  ],
  authors: [{ name: "OAB Web Agency" }],
  creator: "OAB Web Agency",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://oabwebagency.com",
    siteName: "OAB Web Agency",
    title: "OAB Web Agency - High-Converting Websites for Service Businesses",
    description:
      "We build high-converting websites for service businesses across the United States. Get more leads, more bookings, and more revenue.",
  },
  twitter: {
    card: "summary_large_image",
    title: "OAB Web Agency - High-Converting Websites for Service Businesses",
    description:
      "We build high-converting websites for service businesses across the United States. Get more leads, more bookings, and more revenue.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/images/icons/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/images/icons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/images/icons/favicon.png", sizes: "32x32", type: "image/png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = getOrganizationSchema();
  const websiteSchema = getWebSiteSchema();

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className={`${inter.variable} ${poppins.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
