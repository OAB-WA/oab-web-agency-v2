import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ - Frequently Asked Questions",
  description:
    "Common questions about our website services for service businesses. Learn about pricing, timelines, remote work, and more.",
  openGraph: {
    title: "FAQ | OAB Web Agency",
    description:
      "Common questions about our website services for service businesses.",
  },
};

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

