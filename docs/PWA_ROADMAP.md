# PWA Roadmap (Phase 2)

## Goal

Make As If feel installable from mobile browsers while remaining a web app.

## Planned Scope

- Web app manifest
- App icons
- Theme color
- Mobile viewport polish
- Basic offline fallback
- Add to Home Screen guidance
- PWA privacy note
- No push notifications at first
- No background sync at first

## iOS-Specific Limitations and Cautions

- iOS Safari PWA behavior may differ from Chrome/Android PWA behavior.
- Push notifications and background behavior have platform limitations.
- MediaRecorder support and audio behavior must be tested on actual iPhone hardware.

## Acceptance Criteria

- App can be added to home screen
- App looks app-like when launched from home screen
- Offline fallback does not mislead users into thinking all drills are offline-ready unless that is truly implemented
- No privacy regression
- No broken routes after refresh
- Build passes

## Recommended PRs

1. Add PWA manifest and icons
2. Add offline fallback
3. Add iPhone home-screen install guide
4. Add mobile browser QA matrix

## Out of Scope for this Phase

- Push notifications
- Background sync
- Backend introduction
- Authentication
- Analytics additions
- Payment/subscription
