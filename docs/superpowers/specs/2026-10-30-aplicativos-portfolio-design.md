# Aplicativos Help DEV — Design

## Intent

Create a portfolio page that makes Help DEV's Google Play apps easy to discover and open. Add an “Aplicativos” item beside “Projetos” in the site navigation.

## Goals

- Publish a responsive `/apps` page with seven portfolio cards: one for each of the six current Help DEV listings on Google Play, plus CuidaZ marked “Em Breve”.
- Put a description on every card. Published apps also get their store icon, the promotional image shown on the Play Store developer profile, and a clear link to that exact listing.
- Use the CuidaZ brand logo from its app repository for the upcoming card.
- Match the existing Next.js, Tailwind, and static-export setup.
- Include the page in the sitemap and give it page-specific metadata.

## Non-goals and anti-goals

- Do not group the three LapsCounter listings; running, cycling, and swimming each get their own card and store link.
- Do not imply that CuidaZ is already published or provide a Play Store link for it.
- Do not add app detail pages, install flows, ratings, reviews, or data that is not needed for this portfolio.
- Do not change the existing privacy-policy pages, including the untracked CuidaZ policy already in the worktree.

## Confirmed listings

The developer profile currently returns these six listings. Titles and short descriptions are from their Play Store pages.

| App | Play Store package | Short description |
| --- | --- | --- |
| Minha Obra | `br.com.helpdev.minhareforma` | Organize orçamento, gastos e pagamentos da sua obra ou reforma. |
| AtendFlow | `com.helpdev.atendflow` | Organize clientes, agendamentos e cobranças em um só lugar. |
| Velocímetro Alerta | `br.com.helpdev.velocimetroalerta.v2` | Alertas de velocidade por voz por tempo ou distância, sem olhar para a tela. |
| Cronômetro de corrida | `br.com.helpdev.lapscounter.running` | Marque trechos e acompanhe ritmo, distância e tempo total. |
| Cronômetro de ciclismo | `br.com.helpdev.lapscounter.cycling` | Marque trechos e acompanhe distância, tempo e velocidade média. |
| Cronômetro de Natação | `br.com.helpdev.lapscounter.swimming` | Marque voltas e acompanhe distância e ritmo na natação. |
| CuidaZ (Em Breve) | Ainda sem listagem pública | Organize pacientes, agenda, atendimentos, evoluções clínicas e recebimentos. |

## Approaches

1. **Six independent published-app cards plus a CuidaZ preview (chosen).** Each Play Store listing has its own card, promotional image, app icon, description, and Google Play CTA. CuidaZ has a separate card with its repository logo, description, and an “Em Breve” ribbon, without a store CTA. This follows the user's preference to keep all three Cronômetro apps separate and gives every listing equal visibility.
2. **Group the three Cronômetro listings under LapsCounter.** This would reduce repetition, but it does not match the user's preference to present each app separately.
3. **Compact list of store links.** This is the smallest change, but it would not give the page the requested portfolio presentation.

## Design and implementation calls

- The new route is `/apps`, matching the existing English route segments and the existing `src/app/apps/` privacy-policy routes.
- Add the navigation link in desktop and mobile menus, next to “Projetos”. Mark it active on `/apps`.
- Present a short page heading and introduction, followed by a responsive grid of seven cards. Each published-app card uses the promotional image from its Play Store developer-profile listing, the app icon alongside the name, the store description, and a “Ver na Play Store” link that opens the exact listing in a new tab.
- Give CuidaZ a separate “Em Breve” ribbon and use `cuidaz/assets/marca/logos/cuidaz-horizontal-transparente.png` from the CuidaZ repository. Its description is “Organize pacientes, agenda, atendimentos, evoluções clínicas e recebimentos.” Do not make the card clickable or show an unavailable store link.
- Copy the Play Store promotional images and icons, and the CuidaZ logo, into `public/images/apps/` so the static site does not depend on external image URLs at runtime.
- Add `/apps` to `src/app/sitemap.ts` and define metadata in `src/app/apps/page.tsx` so portfolio metadata does not propagate to nested privacy-policy routes.
- The existing footer lists primary site pages; add “Aplicativos” there to keep site navigation consistent.

## Constraints and success criteria

- Preserve the existing static export configuration and the user's current untracked CuidaZ privacy-policy file.
- Keep the page in Portuguese and maintain the site's current responsive Tailwind styling.
- Success means the page shows six cards with correct local imagery, descriptions, and exact Google Play targets, plus the CuidaZ logo, description, and “Em Breve” ribbon; the desktop and mobile navigation both reach `/apps`; the page is present in the sitemap and static production build.

## Remaining implementation choices

- The builder may choose the exact card spacing, color accents, and image crop to fit the existing site components.
- Prefer semantic links, descriptive image alt text, and a responsive layout with no horizontal overflow.
