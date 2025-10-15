"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Script from "next/script";

const GA_MEASUREMENT_ID =
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "G-3XXG55DLFC";
const IS_PROD = process.env.NODE_ENV === "production";

export default function GoogleAnalytics() {
  const pathname = usePathname();

  useEffect(() => {
    if (!IS_PROD || !GA_MEASUREMENT_ID) return;
    if (typeof window === "undefined") return;
    if (!pathname) return;

    // Track client-side navigation
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any).gtag?.("config", GA_MEASUREMENT_ID, {
      page_path: pathname,
    });
  }, [pathname]);

  if (!IS_PROD || !GA_MEASUREMENT_ID) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-gtag" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){ dataLayer.push(arguments); }
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', { page_path: window.location.pathname });
        `}
      </Script>
    </>
  );
}
