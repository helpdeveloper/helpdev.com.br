import Image from 'next/image';
import type { PortfolioApp } from '@/data/apps';

interface AppCardProps {
  app: PortfolioApp;
}

export function AppCard({ app }: AppCardProps) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      {app.kind === 'published' ? (
        <div className="relative aspect-[2/1] overflow-hidden bg-gray-100">
          <Image
            src={app.promotionalImage}
            alt={`Imagem promocional do aplicativo ${app.name}`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      ) : (
        <div className="relative flex aspect-[2/1] flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-sky-50 via-white to-emerald-50 px-8 py-10">
          <span className="absolute inset-x-0 top-0 bg-gradient-to-r from-blue-700 to-emerald-600 py-2 text-center text-sm font-semibold tracking-wide text-white">
            {app.statusLabel}
          </span>
          <Image
            src={app.logo}
            alt="Logo do CuidaZ"
            width={1135}
            height={340}
            sizes="(max-width: 640px) 75vw, 300px"
            className="mt-6 h-auto w-full max-w-[300px] object-contain"
          />
        </div>
      )}

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center gap-3">
          {app.kind === 'published' && (
            <Image
              src={app.icon}
              alt={`Ícone do aplicativo ${app.name}`}
              width={52}
              height={52}
              className="h-13 w-13 rounded-xl object-cover shadow-sm"
            />
          )}
          <h2 className="text-lg font-semibold leading-snug text-gray-900 group-hover:text-blue-700">
            {app.name}
          </h2>
        </div>

        <p className="mt-4 flex-1 text-sm leading-6 text-gray-600">
          {app.description}
        </p>

        {app.kind === 'published' && (
          <a
            href={app.storeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex min-h-11 items-center justify-center rounded-lg bg-blue-700 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
          >
            Ver na Play Store
          </a>
        )}
      </div>
    </article>
  );
}
