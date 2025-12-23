import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/ui/PageHero";
import Features from "@/components/sections/Features";
import Stats from "@/components/sections/Stats";
import CTA from "@/components/sections/CTA";
import { getBreadcrumbSchema } from "@/lib/seo/structured-data";
import siteConfig from "@/lib/data/site-config.json";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about AnuTech's mission, capabilities, and how we transform complex challenges into actionable results through advanced methodologies.",
  openGraph: {
    title: "About Us | AnuTech",
    description:
      "Learn about AnuTech's mission, capabilities, and how we transform complex challenges into actionable results.",
  },
};

export default function About() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: siteConfig.site.url },
    { name: "About", url: `${siteConfig.site.url}/about` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Navbar />
      <main>
        <PageHero
          badge={{ icon: "shield-halved", text: "AGENCY CAPABILITIES" }}
          title="Explore the Power of AnuTech Solutions"
          description="Discover how AnuTech transforms complex challenges into actionable results. Our advanced methodologies are designed to optimize business workflows."
        />
        <Features showHeader={false} />
        <Stats />
        <CTA />
      </main>
      <Footer />
    </>
  );
}

