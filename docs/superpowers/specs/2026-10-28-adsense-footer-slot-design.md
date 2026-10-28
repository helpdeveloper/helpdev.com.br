# AdSense Footer Slot Design

## Intent

Add one discreet responsive AdSense placement to every site route, after page content and before the shared footer.

## Goals

- Keep the existing content and primary calls to action ahead of the ad.
- Use the same placement on desktop and mobile, with responsive sizing.
- Keep ads disabled until publisher and slot IDs are configured.
- Provide a public privacy page describing AdSense cookies and ad personalization.

## Non-goals

- Enable AdSense Auto Ads or sticky/overlay formats.
- Add a consent-management platform or change other account-level AdSense settings.

## Constraints

- The Next.js root layout renders `children` followed by the shared `Footer`.
- IDs are created in the user's AdSense account, then stored as GitHub Actions environment variables; no IDs or credentials are invented.
- AdSense code needed for site verification is emitted in the document head.
- The repository has no configured test suite. Validate with the production build.

## Approaches

- **Global slot before the footer (chosen):** one component in the root layout gives route coverage and preserves the page's primary content first.
- **AdSense Auto Ads:** less placement control, which conflicts with the request for a discreet fixed location.
- **Sticky or overlay banner:** rejected because it obscures content and interrupts navigation.

## Design

Create a reusable client component that renders only when both `NEXT_PUBLIC_ADSENSE_CLIENT_ID` and `NEXT_PUBLIC_ADSENSE_SLOT_ID` are configured. Load the AdSense script in the document head for site verification, initialize the responsive slot once, label it “Anúncio”, and use a centered unit with a restrained neutral container. Mount it between `children` and `Footer` in the root layout. Add a privacy page and footer link describing AdSense cookies and personalization. This includes `/thanks` and privacy pages as part of the request for every route.

## Acceptance

- The ad slot is absent when either configuration value is missing.
- When configured, the slot appears after route content and before the footer.
- It is responsive and does not stick to or cover the viewport.
- The production build succeeds.
