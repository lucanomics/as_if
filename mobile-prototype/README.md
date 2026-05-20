# As If Expo Mobile Prototype

## Composure direction
This prototype is polished around **Composure: Calm Under Questioning**. The UI is intentionally dark, restrained, and editorial so learners can practice high-stakes wording without cute gamification or fear-heavy alarm styling.

Core product copy:
- **Textbook English? As if.**
- **Practice English for the situations that actually matter.**

## What was polished
- Unified theme tokens for color, spacing, radii, and system-type styles.
- Safe-area-aware shell and consistent content padding.
- Native-feel bottom tabs (Home, Drill, Phrases, Practice) with compact uppercase labels and active top indicator.
- Home rewritten as a serious entry point with focused hero copy and practical actions.
- Drill redesigned so the pressure question is the visual anchor.
- Phrase Bank redesigned for quick scanning across Safe / Avoid / Tone.
- Practice rewritten as private on-device review with diagnostic, non-shaming weakness tags.
- Shared UI component pass across cards/chips/headers/drill elements.

## What remains mocked
- Record interaction is still mock-only (no real microphone pipeline).
- Save Practice is mock-only.
- Local mock data only (no backend sync).
- No auth, AI feedback, analytics, payments, or production-native migration.

## Run locally
```bash
cd mobile-prototype
npm install
npm run start
```

Optional checks (if available in package scripts):
```bash
npm run typecheck
```

## Important note
This is a **native-feel Expo prototype** for concept validation and flow testing. It is **not** the production web app and not a production-native app migration.
