"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Script from "next/script";

const measurementId = process.env.NEXT_PUBLIC_GA_ID || "G-VWDH18RX25";

declare global {
  interface Window {
    dataLayer: unknown[][];
    gtag: (...args: unknown[]) => void;
  }
}

export default function GoogleAnalytics() {
  const pathname = usePathname();
  const lastTrackedPath = useRef<string | null>(null);
  const hasTrackedInitialPage = useRef(false);
  const pendingPageViews = useRef<Array<{ pathname: string; pageTitle: string }>>([]);
  const [gtagReady, setGtagReady] = useState(false);

  useEffect(() => {
    if (!pathname) return;

    if (!hasTrackedInitialPage.current) {
      hasTrackedInitialPage.current = true;
      lastTrackedPath.current = pathname;
      return;
    }

    if (lastTrackedPath.current !== pathname) {
      lastTrackedPath.current = pathname;
      pendingPageViews.current.push({ pathname, pageTitle: document.title });
    }

    if (!gtagReady || typeof window.gtag !== "function") return;

    for (const pageView of pendingPageViews.current) {
      window.gtag("event", "page_view", {
        page_path: pageView.pathname,
        page_location: `${window.location.origin}${pageView.pathname}`,
        page_title: pageView.pageTitle,
      });
    }
    pendingPageViews.current = [];
  }, [gtagReady, pathname]);

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
        strategy="afterInteractive"
        onReady={() => setGtagReady(true)}
      />
      <Script id="google-analytics-init" strategy="beforeInteractive">
        {`window.dataLayer = window.dataLayer || [];
          window.gtag = window.gtag || function(...args) { window.dataLayer.push(args); };
          window.gtag('js', new Date());
          window.gtag('config', '${measurementId}');`}
      </Script>
    </>
  );
}
