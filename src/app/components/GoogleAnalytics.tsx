const measurementId = process.env.NEXT_PUBLIC_GA_ID || "G-VWDH18RX25";

export default function GoogleAnalytics() {
  return (
    <>
      <script
        id="google-analytics-init"
        dangerouslySetInnerHTML={{
          __html: `(function() {
            var callbackPath = '/apps/velocimetro-alerta/strava/callback';
            var currentPath = window.location.pathname.replace(/\\/+$/, '');
            if (currentPath === callbackPath) return;
            window.dataLayer = window.dataLayer || [];
            window.gtag = window.gtag || function() { window.dataLayer.push(arguments); };
            window.gtag('js', new Date());
            window.gtag('config', ${JSON.stringify(measurementId)});
            var script = document.createElement('script');
            script.async = true;
            script.src = ${JSON.stringify(`https://www.googletagmanager.com/gtag/js?id=${measurementId}`)};
            document.head.appendChild(script);
          })();`,
        }}
      />
    </>
  );
}
