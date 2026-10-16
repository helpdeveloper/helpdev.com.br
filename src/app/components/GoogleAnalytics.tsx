"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Script from "next/script";

const measurementId = process.env.NEXT_PUBLIC_GA_ID || "G-FYBBYE3DXD";

declare global {
  interface Window {
    dataLayer: unknown[][];
    gtag: (...args: unknown[]) => void;
  }
}

export default function GoogleAnalytics() {
  const pathname = usePathname();
  const lastTrackedPath = useRef<string | null>(null);

  useEffect(() => {
    if (!pathname || lastTrackedPath.current === pathname) return;

    lastTrackedPath.current = pathname;
    window.gtag("event", "page_view", {
      page_path: pathname,
      page_location: `${window.location.origin}${pathname}`,
      page_title: document.title,
    });
  }, [pathname]);

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics-init" strategy="beforeInteractive">
        {`window.dataLayer = window.dataLayer || [];
          window.gtag = window.gtag || function(...args) { window.dataLayer.push(args); };
          window.gtag('js', new Date());
          window.gtag('config', '${measurementId}', { send_page_view: false });`}
      </Script>
    </>
  );
}
