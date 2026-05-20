# As If — High-Stakes English Practice

As If is a web-based English practice app for high-pressure real-life situations such as immigration interviews, secondary inspection, police stops, hospital visits, counseling, university administration, and bureaucratic complaints.


## Product Direction

As If is web-first by design in the near term: mobile-first web UX first (especially iPhone Safari), then PWA readiness, then optional iOS wrapper evaluation only after validation. Native iOS is explicitly deferred unless evidence shows web/PWA is insufficient.

## Scope

- Static frontend foundation only
- Built with Vite + React + TypeScript + Tailwind CSS + React Router
- No backend
- No database
- No AI API integration
- No authentication

## Routes

- `/`
- `/scenarios`
- `/phrases`
- `/practice`
- `/about`

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Disclaimer

This service is for language practice only. It does not provide legal, immigration, medical, or mental health advice. In real situations, users should consult qualified professionals or official authorities.

이 서비스는 영어 표현 훈련을 위한 도구이며, 법률 자문, 이민 자문, 의료 자문 또는 정신건강 치료를 제공하지 않습니다. 실제 상황에서는 자격 있는 전문가나 공식 기관의 안내를 따라야 합니다.


## Expo mobile prototype

A separate Expo / React Native prototype lives in `mobile-prototype/`.
It is intentionally separate from the production web app and is not the production app.

Run it with:

```bash
cd mobile-prototype
npm install
npm run start
```

Current prototype intentionally does **not** include backend, AI, auth, audio recording, or App Store setup.
