# AdSense Footer Slot Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add one responsive, discreet AdSense slot after each route’s content and before the shared footer.

**Architecture:** A client component reads the publisher and slot IDs from public build-time environment variables. The root layout loads the AdSense verification script in the document head and places the ad component between route content and the global footer. A site privacy page documents AdSense cookies and ad personalization.

**Tech Stack:** Next.js 15 App Router, React 19, TypeScript, Tailwind CSS.

**Spec:** `docs/superpowers/specs/2026-10-28-adsense-footer-slot-design.md`

## Global Constraints

- Keep ads off when either `NEXT_PUBLIC_ADSENSE_CLIENT_ID` or `NEXT_PUBLIC_ADSENSE_SLOT_ID` is missing.
- Do not add Auto Ads, sticky ads, or overlays.
- Do not invent account IDs.
- Store the AdSense IDs as GitHub Actions variables in the `deploy` environment.
- Configure both GitHub variables before the release build so the unit appears on every route.
- The repository has no configured test suite; run `npm run build` as the validation command.

## Review Focus

- Missing either ID must not render an empty advertising container.
- Load the verification script only when the publisher ID is present; initialize the ad slot only when both IDs are present.
- The unit must remain responsive on narrow screens.
- The slot must remain after the route content and before the shared footer.
- Initialization must not run more than once during normal navigation.

---

### Task 1: Add the global AdSense slot

**Files:**
- Create: `src/app/components/AdSenseBanner/index.tsx`
- Modify: `src/app/layout.tsx`

**Interfaces:**
- Consumes: `NEXT_PUBLIC_ADSENSE_CLIENT_ID` and `NEXT_PUBLIC_ADSENSE_SLOT_ID`.
- Produces: `AdSenseBanner`, a default-exported React component rendered once by the root layout.

- [ ] Add a client component that returns `null` until both IDs are present.
- [ ] Load the AdSense verification script in the root document head and initialize one responsive slot with the “Anúncio” label.
- [ ] Render the component between `{children}` and `<Footer />` in the root layout.
- [ ] Run `npm run build`; expected result: production build succeeds.
