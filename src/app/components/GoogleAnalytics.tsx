import Script from "next/script";

const measurementId = process.env.NEXT_PUBLIC_GA_ID || "G-VWDH18RX25";

export default function GoogleAnalytics() {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
        strategy="beforeInteractive"
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
