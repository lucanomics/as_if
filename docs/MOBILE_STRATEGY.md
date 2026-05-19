# Mobile Strategy: iPhone-First Web Execution

## Current Product Direction

As If is currently a **mobile-first web app** built with **Vite, React, TypeScript, and Tailwind CSS**.

Near-term, the primary target is **iPhone Safari and mobile web usability**. The project should remain **web-first** until the learning loop and real user demand are validated.

### Why this direction

- Faster product iteration
- No App Store review delay during core validation
- Lower compliance and platform overhead early on
- Easier content updates through normal web deploys
- Works across iOS, Android, desktop, and tablets
- Existing codebase is already web-based
- Current priority is validating the learning loop, not platform packaging

---

## Phase 1 — Mobile-first Web MVP

**Status:** Mostly underway / partially completed.

**Goal:** Make the current web app feel excellent on iPhone Safari.

### Scope

- Scenario Library
- Drill Page
- Phrase Bank
- My Practice
- Browser-local storage for practice records
- Audio recording/playback where browser support allows
- Responsive layout and touch-friendly controls
- Clear privacy and disclaimer copy
- No backend
- No login
- No remote storage

### Acceptance Criteria

- Works on iPhone Safari
- Navigation is usable with one hand
- Cards are readable on small screens
- Forms and controls are not cramped
- Audio gracefully handles unsupported or denied-permission states
- Saved records remain browser-local
- Build passes
- Content safety boundaries remain clear

### Recommended PRs

1. Phrase Bank data and filters
2. Mobile UX audit and polish
3. iPhone Safari audio compatibility check
4. Content expansion to 50-100 items
5. Basic QA checklist

---

## Mobile Safari QA Checklist

Use this checklist for manual verification on real iPhone Safari.

- [ ] Home page readability
- [ ] Scenario Library filter usability
- [ ] Drill page textarea behavior
- [ ] Audio permission prompt
- [ ] Audio start/stop/playback behavior
- [ ] localStorage record save behavior
- [ ] My Practice list/delete/clear behavior
- [ ] Phrase Bank filters
- [ ] Landscape orientation layout
- [ ] Small-screen tap target usability
- [ ] Safari refresh behavior
- [ ] Back button behavior
- [ ] Add to Home Screen behavior (once PWA phase is implemented)

---

## PR Sequence (Planned)

| Order | Branch | Purpose | Type |
|---|---|---|---|
| 1 | feat/add-phrase-bank-data-and-filters | Add phrase bank data/search/filter UI | Feature |
| 2 | polish/mobile-safari-ux | Improve iPhone Safari layout and touch targets | UX |
| 3 | qa/add-mobile-compatibility-checklist | Add manual QA checklist | Docs/QA |
| 4 | feat/add-pwa-manifest | Add manifest and icons | PWA |
| 5 | feat/add-offline-fallback | Add basic offline fallback | PWA |
| 6 | docs/capacitor-evaluation | Evaluate iOS wrapper readiness | Docs |
| 7 | feat/add-capacitor-ios-wrapper | Only if approved after evaluation | Platform |

---

## Safety and Compliance Reminders

- As If provides language practice only.
- It does not provide legal, immigration, medical, or mental health advice.
- It does not guarantee outcomes.
- It must not coach false statements.
- It must not coach evasion.
- Audio should remain local-session only unless policy and architecture are explicitly changed.
- Practice records should remain localStorage-only unless policy and architecture are explicitly changed.
- Any PWA or iOS packaging must not weaken privacy claims.

## Mobile Safari UX polish pass (2026-05)

Checklist completed in this pass:
- [x] Increased tappable sizes for key buttons, nav links, and control actions (targeting ~44px minimum where practical).
- [x] Improved small-screen spacing and typography rhythm for 320–430px widths.
- [x] Improved top/bottom safe-area handling for iPhone notch/home-indicator devices.
- [x] Made Scenario Library and Phrase Bank filters easier to use on narrow widths.
- [x] Increased drill-page readability (pressure question emphasis, textarea comfort, related link tap area).
- [x] Polished audio recorder controls/status and ensured playback control fits card width.
- [x] Improved My Practice card wrapping and action button readability on mobile.
- [x] Reduced risk of horizontal overflow through component-level wrapping/overflow handling.

