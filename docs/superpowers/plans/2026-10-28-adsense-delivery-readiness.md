# AdSense Delivery Readiness Implementation Plan

> **For agentic workers:** Execute inline in this session; validate with a production build and Playwright browser check.

**Goal:** Publish the site's ads.txt seller declaration and remove the visible ad frame when AdSense reports no fill.

**Architecture:** Add the exact seller line to Next.js `public/ads.txt`, which exports to the domain root. Observe the rendered AdSense slot's `data-ad-status` attribute and unmount the banner when it becomes `unfilled`.

**Tech Stack:** Next.js static export, React, TypeScript, Playwright CLI.

**Spec:** `docs/superpowers/specs/2026-10-28-adsense-footer-slot-design.md`

## Global Constraints

- Use publisher ID `ca-pub-4334384724173584` and responsive slot ID `8535614411`.
- Keep the banner responsive and after page content, before the shared footer.
- Do not treat client code as a substitute for AdSense account activation or site approval.

## Review Focus

- AdSense sets `data-ad-status="unfilled"` asynchronously: observe the attribute and hide the whole banner container.
- A filled ad remains visible: only hide on the exact `unfilled` status.
- Next static export serves `/ads.txt` at the root with plain text, not the app fallback HTML.

### Task 1: Publish ads.txt and hide unfilled banner

**Files:**
- Create: `public/ads.txt`
- Modify: `src/app/components/AdSenseBanner/index.tsx`

**Interfaces:**
- The ads.txt line is `google.com, pub-4334384724173584, DIRECT, f08c47fec0942fa0`.
- The component continues to render only when both existing environment values are configured.

- [x] Check the live failure in Playwright: with `data-ad-status="unfilled"`, the `Publicidade` aside is currently visible.
- [x] Add the seller declaration and observe slot status changes with a `MutationObserver`; return `null` only after status is exactly `unfilled`.
- [x] Run `NEXT_PUBLIC_ADSENSE_CLIENT_ID=ca-pub-4334384724173584 NEXT_PUBLIC_ADSENSE_SLOT_ID=8535614411 npm run build`.
- [x] Serve the static export and verify `/ads.txt` contains the seller line and an unfilled slot hides the whole aside.
- [x] Commit as `fix(adsense): publish ads.txt and hide unfilled slot`.
