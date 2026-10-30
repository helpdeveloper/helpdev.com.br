# Aplicativos Help DEV Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a Portuguese portfolio page with six separate Google Play app cards and a CuidaZ “Em Breve” card.

**Architecture:** Keep app content in a static typed data module, render it with a focused portfolio card component, and use local image assets for every card. Add the `/apps` route to the existing navigation, footer, metadata, and static sitemap.

**Tech Stack:** Next.js 15 App Router, React 19, TypeScript, Tailwind CSS, static export.

**Spec:** `docs/superpowers/specs/2026-10-30-aplicativos-portfolio-design.md`

## Global Constraints

- Keep the page in Portuguese and maintain the site's current responsive Tailwind styling.
- Show seven cards: six published apps and one CuidaZ preview.
- Keep each Cronômetro listing separate, with a distinct Google Play link.
- Every card must display a description.
- Do not show a Google Play CTA on CuidaZ; display an “Em Breve” ribbon and its existing horizontal logo.
- Preserve the existing static export configuration and the untracked CuidaZ privacy-policy source file.
- Do not add a test framework or test files; the repository has no tests configured.

## Review Focus

- App-to-store mapping: check every published card points to its matching package ID from the spec.
- Card copy: check that all seven descriptions are rendered in full and remain readable.
- Coming-soon behavior: check that CuidaZ shows “Em Breve” and does not become a dead or misleading store link.
- Local imagery: check each image file exists, displays correctly, and uses the CuidaZ horizontal logo on its card.
- Responsive access: check the new navigation link appears beside Projetos in desktop and mobile menus and the grid fits narrow screens.

---

### Task 1: Prepare local app imagery

**Files:**
- Create: `public/images/apps/`
- Create: one Play Store promotional image and app icon per published listing, plus `cuidaz-logo.png`.

**Interfaces:**
- Produces the local image paths consumed by `src/data/apps.ts` in Task 2.

- [x] Download the promotional image from the developer profile and the app icon for each package listed in the spec. Save them under stable, readable filenames in `public/images/apps/`, keeping the correct file extensions.
- [x] Copy `/Volumes/gbz-ext/repositories/helpdev/cuidaz/assets/marca/logos/cuidaz-horizontal-transparente.png` to `public/images/apps/cuidaz-logo.png`.
- [x] Check all 13 files exist and are valid images; visually inspect the CuidaZ logo and one promotional image from each listing.

### Task 2: Build the app catalog and portfolio cards

**Files:**
- Create: `src/data/apps.ts`
- Create: `src/app/components/AppCard/index.tsx`
- Create: `src/app/apps/page.tsx`

**Interfaces:**
- `src/data/apps.ts` exports a `PortfolioApp` discriminated union and a `portfolioApps: PortfolioApp[]` in display order.
- A published app has its name, full short description, promotional image path, icon path, and exact Play Store URL. CuidaZ has its name, description, local logo path, and `kind: 'coming-soon'` with no store URL.
- `AppCard` accepts one `PortfolioApp` and renders the appropriate published or coming-soon treatment.

- [x] Add all six Play Store listings from the spec to `portfolioApps`, preserving their exact names and descriptions, with one unique store URL per listing.
- [x] Add CuidaZ with the description “Organize pacientes, agenda, atendimentos, evoluções clínicas e recebimentos.” and no store link.
- [x] Render published cards with a promotional image, app icon, full description, and “Ver na Play Store” external link; render CuidaZ with its horizontal logo and an “Em Breve” ribbon.
- [x] Build `/apps` with one H1, short introduction, and a responsive grid that shows all seven cards without truncating descriptions.
- [x] Define page metadata, canonical `/apps`, and Open Graph information in `src/app/apps/page.tsx` so it cannot affect nested privacy-policy metadata.

### Task 3: Add navigation and validate the static page

**Files:**
- Modify: `src/app/components/Navbar/index.tsx`
- Modify: `src/app/components/Footer/index.tsx`
- Modify: `src/app/sitemap.ts`

**Interfaces:**
- The existing Navbar uses `usePathname()` and `isActive()` for route state; reuse that behavior for `/apps`.

- [x] Add an “Aplicativos” link immediately after “Projetos” in both desktop and mobile navigation, with active styling on `/apps` and mobile menu close behavior.
- [x] Add an “Aplicativos” link to the footer and `/apps` to the sitemap route list.
- [x] Run `git diff --check` and `npm run build`; confirm a generated `/apps` static page is present under `out/` and all local image paths are emitted.
- [x] Review the final diff to confirm only the approved portfolio scope changed and the pre-existing untracked CuidaZ privacy-policy file is untouched.
