# CyberQuest Portal

CyberQuest is an NSF-funded project at Fisk University focused on cybersecurity curriculum
innovation, hands-on labs, and undergraduate research opportunities.

## Current highlights

- Modern hero banner with custom background image and overlay
- Updated site branding with custom logo + favicon
- Consistent team profiles on the home page and full team page with slide-in details
- React Router pages for About, Team, Outcomes, Milestones, News, Contact, and courses

## Key pages

- Home: `src/pages/Index.tsx`
- Team: `src/pages/Team.tsx`
- Courses: `src/pages/IntroToCybersecurity.tsx`, `src/pages/Cryptography.tsx`
- Outcomes: `src/pages/Outcomes.tsx`
- Milestones: `src/pages/Milestones.tsx`
- News: `src/pages/News.tsx`
- Contact: `src/pages/Contact.tsx`

## Shared data and components

- Team data: `src/data/team.ts`
- Team profile grid + slide panel: `src/components/TeamProfileGrid.tsx`
- Header/Footer branding: `src/components/Header.tsx`, `src/components/Footer.tsx`

## Static assets

- Hero background: `public/hero-image.png`
- Logo/Favicon: `public/logo.png`

## Getting started

Prerequisites: Node.js and npm.

```sh
npm install
npm run dev
```

## Scripts

- `npm run dev` - start the local dev server
- `npm run build` - production build
- `npm run preview` - preview the production build
- `npm run lint` - run ESLint
- `npm run test` - run tests with Vitest

## Tech stack

- Vite
- React
- TypeScript
- Tailwind CSS
- shadcn/ui

## Deployment

Build with `npm run build` and deploy the output from `dist/` to your hosting provider.
