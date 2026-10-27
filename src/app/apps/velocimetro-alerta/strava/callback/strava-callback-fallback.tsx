'use client';

import { useEffect, useState } from 'react';

const callbackPath = '/apps/velocimetro-alerta/strava/callback';
const appPackage = 'br.com.helpdev.velocimetroalerta.v2';
const playStoreUrl = 'https://play.google.com/store/apps/details?id=br.com.helpdev.velocimetroalerta.v2';

export default function StravaCallbackFallback() {
  const [appIntent, setAppIntent] = useState<string | null>(null);

  useEffect(() => {
    const currentUrl = new URL(window.location.href);
    const callbackParams = new URLSearchParams();
    for (const name of ['code', 'state', 'error']) {
      const value = currentUrl.searchParams.get(name);
      if (value) callbackParams.set(name, value);
    }

    if (callbackParams.has('state') && (callbackParams.has('code') || callbackParams.has('error'))) {
      const query = callbackParams.toString();
      const fallback = encodeURIComponent(playStoreUrl);
      setAppIntent(
        `intent://helpdev.com.br${callbackPath}?${query}` +
          `#Intent;scheme=https;package=${appPackage};S.browser_fallback_url=${fallback};end`
      );
    }

    window.history.replaceState(null, document.title, callbackPath);
  }, []);

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100 px-5 py-12">
      <section className="w-full max-w-lg rounded-2xl bg-white p-8 text-center shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-wide text-orange-600">Velocímetro Alerta</p>
        <h1 className="mt-3 text-2xl font-bold text-gray-900">Retorno do Strava</h1>
        <p className="mt-4 leading-7 text-gray-700">
          A autorização está voltando para o aplicativo. Se ele não abriu automaticamente, use o botão abaixo para
          concluir a conexão.
        </p>
        {appIntent ? (
          <a
            className="mt-6 inline-flex rounded-lg bg-orange-600 px-5 py-3 font-semibold text-white hover:bg-orange-700"
            href={appIntent}
          >
            Abrir o Velocímetro Alerta
          </a>
        ) : (
          <p className="mt-6 rounded-lg bg-amber-50 p-4 text-sm text-amber-900">
            Não encontramos os dados de retorno. Volte ao app e inicie a conexão com o Strava novamente.
          </p>
        )}
        <p className="mt-6 text-sm text-gray-500">
          Se a conta não aparecer conectada em <strong>Conta e conexões</strong>, volte ao app e tente conectar
          novamente.
        </p>
      </section>
    </main>
  );
}
