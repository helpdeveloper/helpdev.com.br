const measurementId = process.env.NEXT_PUBLIC_GA_ID || "G-VWDH18RX25";

export default function GoogleAnalytics() {
  return (
    <>
      <script
        id="google-analytics-init"
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || [];
            window.gtag = window.gtag || function(...args) { window.dataLayer.push(args); };
            window.gtag('js', new Date());
            window.gtag('config', ${JSON.stringify(measurementId)});`,
        }}
      />
      <script
        async
        id="google-analytics"
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
      />
    </>
  );
}
