import type { Metadata } from 'next';
import StravaCallbackFallback from './strava-callback-fallback';

export const metadata: Metadata = {
  title: 'Retorno do Strava — Velocímetro Alerta',
  robots: { index: false, follow: false },
};

export default function StravaCallbackPage() {
  return <StravaCallbackFallback />;
}
