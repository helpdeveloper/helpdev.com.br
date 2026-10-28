'use client';

import { useEffect, useRef, useState } from 'react';

declare global {
  interface Window {
    adsbygoogle?: Record<string, unknown>[];
  }
}

const publisherId = process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID;
const slotId = process.env.NEXT_PUBLIC_ADSENSE_SLOT_ID;

export default function AdSenseBanner() {
  const initialized = useRef(false);
  const adElement = useRef<HTMLModElement | null>(null);
  const [unfilled, setUnfilled] = useState(false);
  const enabled = Boolean(publisherId && slotId);

  useEffect(() => {
    if (!enabled) return;

    const element = adElement.current;
    if (!element) return;

    const observer = new MutationObserver(() => {
      setUnfilled(element.getAttribute('data-ad-status') === 'unfilled');
    });
    observer.observe(element, {
      attributes: true,
      attributeFilter: ['data-ad-status'],
    });

    setUnfilled(element.getAttribute('data-ad-status') === 'unfilled');

    if (!initialized.current) {
      initialized.current = true;
      (window.adsbygoogle ||= []).push({});
    }

    return () => observer.disconnect();
  }, [enabled]);

  if (!enabled || unfilled) {
    return null;
  }

  return (
    <aside
      aria-label="Publicidade"
      className="mx-auto my-8 w-full max-w-7xl px-4 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-[760px] rounded-lg border border-gray-200 bg-gray-50 p-3">
        <p className="mb-2 text-[10px] font-medium uppercase tracking-wide text-gray-500">
          Anúncio
        </p>
        <ins
          ref={adElement}
          className="adsbygoogle block min-h-[90px] w-full"
          style={{ display: 'block' }}
          data-ad-client={publisherId}
          data-ad-slot={slotId}
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
      </div>
    </aside>
  );
}
