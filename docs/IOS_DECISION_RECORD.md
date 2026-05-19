# iOS Decision Record

- **Decision:** Do not build native iOS now
- **Status:** Accepted

## Context

As If is currently a web-based product with a working frontend foundation, drill flow, local practice storage, and browser-based audio behavior. The main product risk is not platform availability; it is whether users repeat the learning loop and find the practice useful.

The immediate need is to improve iPhone Safari usability and validate repeat use. Native iOS development would increase platform overhead before core product validation is complete.

## Options Considered

1. Stay web-only
2. Mobile-first web + PWA
3. Capacitor wrapper
4. React Native / Expo
5. SwiftUI native iOS

## Decision Outcome

Proceed with:

- Mobile-first web now
- PWA next
- Capacitor later only if validated
- SwiftUI only much later if clearly necessary

## Consequences

### Positive

- Faster iteration
- Lower platform overhead
- Easier content updates
- Broader cross-device reach during validation

### Costs / Trade-offs

- Must test carefully on mobile Safari
- Requires explicit PWA planning and QA discipline
- Native-only capabilities are deferred

## Revisit Triggers

Revisit this decision only after evidence exists that web/PWA constraints materially harm retention or core practice outcomes.
