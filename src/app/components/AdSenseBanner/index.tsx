'use client';

import { useEffect, useRef } from 'react';

declare global {
  interface Window {
    adsbygoogle?: Record<string, unknown>[];
  }
}

const publisherId = process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID;
const slotId = process.env.NEXT_PUBLIC_ADSENSE_SLOT_ID;

export default function AdSenseBanner() {
  const initialized = useRef(false);
  const enabled = Boolean(publisherId && slotId);

  useEffect(() => {
    if (!enabled || initialized.current) return;

    initialized.current = true;
    (window.adsbygoogle ||= []).push({});
  }, [enabled]);

  if (!enabled) {
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
