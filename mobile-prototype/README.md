# As If Expo Mobile Prototype

## Purpose
This folder contains a separate Expo + React Native prototype to explore native-feel mobile UX for As If.

## Scope
- Technical prototype only
- Separate from the production web app
- Local mock data and UI flow for review

## How to run
```bash
cd mobile-prototype
npm install
npm run start
```

## What is implemented
- Expo-managed React Native app with TypeScript
- Dark-mode, card-based mobile layout
- Four screens with local tab-state navigation: Home, Drill, Phrases, Practice
- Reusable components for cards/chips/section headers/tabs
- Local prototype data: scenarios, phrases, practice records

## What is mocked
- Drill audio recording button is UI-only
- Save practice is UI-only
- Phrase filtering is local-only
- Practice history is static local sample data

## What is intentionally not included
- Backend or remote storage
- Auth
- AI feedback
- Speech-to-text
- Analytics
- Payment
- App Store/TestFlight distribution setup

## Notes on data
A small amount of content is manually duplicated from the web app domain for prototype speed. If this direction advances, shared data packaging should be introduced.

## Future path
- Visual polish via Claude Design
- Shared data package between web and native
- Real audio recording flow
- Local persistence
- TestFlight only after product validation
