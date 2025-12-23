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
    default: "AnuTech - IT Solutions & Technology Agency",
    template: "%s | AnuTech",
  },
  description:
    "AnuTech is a premium IT Solutions, Software Agencies, and Digital Transformation consultancies. We deliver high-performance software, custom web development, and strategic technology consulting.",
  keywords: [
    "IT Solutions",
    "Software Agency",
    "Web Development",
    "Digital Transformation",
    "Technology Consulting",
  ],
  authors: [{ name: "AnuTech" }],
  creator: "AnuTech",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://anutech.com",
    siteName: "AnuTech",
    title: "AnuTech - IT Solutions & Technology Agency",
    description:
      "Innovative IT Solutions for Visionaries. We deliver high-performance software, custom web development, and strategic technology consulting.",
  },
  twitter: {
    card: "summary_large_image",
    title: "AnuTech - IT Solutions & Technology Agency",
    description:
      "Innovative IT Solutions for Visionaries. We deliver high-performance software, custom web development, and strategic technology consulting.",
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
