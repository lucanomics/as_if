# Roadmap

## Now

- Finish Phrase Bank
- Mobile Safari polish
- Content expansion
- QA checklist
- GitHub Pages deployment check

## Next

- PWA readiness
- Add to Home Screen guide
- Offline fallback
- User testing

## Later

- AI prompt generator
- Optional AI feedback
- Capacitor evaluation
- TestFlight only if justified

## Not Now

- Native iOS
- React Native
- SwiftUI rewrite
- Supabase/Firebase auth
- Payment/subscription
- App Store submission
- Push notifications
- Speech scoring
- Legal/medical/immigration advice features

---

## Phase 3 — Capacitor/iOS Wrapper Evaluation (Decision Stage)

**Goal:** Evaluate whether to package the web app as an iOS wrapper using Capacitor. This is not implementation.

### Decision Criteria

- At least 10-20 real users have tested the web app
- Users show repeated practice behavior
- iPhone users are a meaningful share of usage
- Web/PWA limitations are clearly identified
- Audio recording behaves better or more reliably in wrapper testing
- App Store presence has clear value
- Privacy and content disclaimers are mature
- App has enough native-like value to avoid thin-wrapper rejection risk

### Risks

- App Store review risk
- Extra maintenance burden
- Native permission requirements
- Privacy label obligations
- WebView quirks
- Increased testing overhead
- Possible rejection if too close to a simple website wrapper

### Acceptance Criteria Before Any Implementation

- Written go/no-go decision
- Privacy policy draft
- App Store review risk checklist
- iOS permission copy draft
- TestFlight plan
- No major unresolved content safety issues

### Possible Future PRs

- Add Capacitor configuration
- Add iOS wrapper
- Add microphone permission string
- Add TestFlight build documentation
- Add App Store privacy checklist

---

## Phase 4 — Native iOS App Decision

**Goal:** Decide whether As If needs a native SwiftUI app.

Native iOS is **not** the default path. Consider it only if core product needs cannot be met by web/PWA/Capacitor.

### Native iOS may be justified if

- Voice interaction becomes core
- Offline-first learning becomes essential
- Push notification-driven habits become essential
- Subscription/payment UX becomes central
- Native performance is materially better
- Web/PWA limits directly hurt retention
- iPhone users overwhelmingly dominate
- Funding/team capacity supports native development

### Native iOS should be rejected if

- Web app usage is low
- Content value is not validated
- Users do not return
- App Store presence is only for prestige
- Native app would mostly duplicate the web app
- Maintenance capacity is limited

### Acceptance Criteria for Native Investment

- Product metrics justify native investment
- Clear web feature gap exists
- Maintenance plan exists
- Privacy/compliance plan exists
- Content moderation and safety rules are mature
