"use client";

import Link from "next/link";
import { trackEvent } from "@/components/analytics/GoogleAnalytics";

/**
 * TrackedLink Component
 * 
 * A wrapper around Next.js Link that automatically tracks clicks as conversion events.
 * Use this for all CTA buttons and important links to measure user engagement.
 * 
 * Props:
 * - href: The destination URL
 * - className: CSS classes (same as regular Link)
 * - children: Link content
 * - eventName: Custom event name (default: "button_click")
 * - eventParams: Additional event parameters to track
 * 
 * Example:
 * <TrackedLink 
 *   href="/contact" 
 *   eventName="cta_click"
 *   eventParams={{ cta_location: "hero", cta_text: "Get Free Audit" }}
 * >
 *   Get Free Audit
 * </TrackedLink>
 */
interface TrackedLinkProps {
  href: string;
  className?: string;
  children: React.ReactNode;
  eventName?: string;
  eventParams?: Record<string, any>;
  onClick?: () => void;
}

export default function TrackedLink({
  href,
  className,
  children,
  eventName = "button_click",
  eventParams = {},
  onClick,
}: TrackedLinkProps) {
  const handleClick = () => {
    // Track the click event
    trackEvent(eventName, {
      link_url: href,
      link_text: typeof children === "string" ? children : "CTA Button",
      ...eventParams,
    });

    // Call custom onClick if provided
    if (onClick) {
      onClick();
    }
  };

  return (
    <Link href={href} className={className} onClick={handleClick}>
      {children}
    </Link>
  );
}

