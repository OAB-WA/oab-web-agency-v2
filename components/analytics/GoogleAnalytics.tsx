"use client";

import Script from "next/script";

/**
 * Google Analytics Component
 * 
 * This component adds Google Analytics 4 (GA4) tracking to your website.
 * It tracks:
 * - Page views
 * - User interactions
 * - Conversion events (form submissions, button clicks)
 * 
 * To use:
 * 1. Get your GA4 Measurement ID from Google Analytics (format: G-XXXXXXXXXX)
 * 2. Add it to your .env.local file as: NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
 * 3. This component will automatically load on all pages
 * 
 * Privacy: This respects user privacy and only tracks anonymous usage data
 */
export default function GoogleAnalytics() {
  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

  // Don't render if GA ID is not set
  if (!gaId) {
    return null;
  }

  return (
    <>
      {/* Google Analytics 4 Script */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gaId}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  );
}

/**
 * Helper function to track custom events
 * Use this throughout your app to track conversions
 * 
 * Example:
 * trackEvent('form_submission', { form_name: 'contact_form' });
 * trackEvent('button_click', { button_name: 'get_started' });
 */
export function trackEvent(
  eventName: string,
  eventParams?: Record<string, any>
) {
  if (typeof window !== "undefined" && (window as any).gtag) {
    (window as any).gtag("event", eventName, eventParams);
  }
}

/**
 * Track page views manually (usually automatic, but useful for SPA navigation)
 */
export function trackPageView(url: string) {
  if (typeof window !== "undefined" && (window as any).gtag) {
    (window as any).gtag("config", process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID, {
      page_path: url,
    });
  }
}

