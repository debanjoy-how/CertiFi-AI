# CertiChain AI

AI-powered tamper-proof certificate verification system.

This repository is a production-style hackathon starter built with Next.js 14 App Router, TypeScript, Tailwind CSS, shadcn-style UI primitives, Framer Motion, and Lucide icons. It intentionally uses mocked data, placeholder APIs, and TODO comments so beginner teams can ship the frontend fast and wire real backend services later.

## Project structure

```text
app/
  api/
    auth/login/route.ts
    certificates/issue/route.ts
    certificates/verify/route.ts
  certificates/page.tsx
  dashboard/page.tsx
  issue/page.tsx
  login/page.tsx
  settings/page.tsx
  verify/[certId]/page.tsx
  verify/page.tsx
  globals.css
  layout.tsx
  page.tsx
components/
  ui/
    badge.tsx
    button.tsx
    card.tsx
    input.tsx
    label.tsx
    table.tsx
    textarea.tsx
  animated-background.tsx
  certificate-card.tsx
  certificate-form.tsx
  dashboard-header.tsx
  dashboard-shell.tsx
  hash-display.tsx
  hero-section.tsx
  loading-spinner.tsx
  navbar.tsx
  qr-preview.tsx
  recent-certificates.tsx
  sidebar.tsx
  stats-cards.tsx
  verification-badge.tsx
lib/
  constants.ts
  fake-blockchain.ts
  hash.ts
  mock-data.ts
  qr.ts
  utils.ts
types/
  certificate.ts
  verification.ts
```

## Install

```bash
npm install
```

## Run locally

```bash
npm run dev
```

## shadcn/ui setup

The project already includes shadcn-style component files under `components/ui`, but if you want to continue using the CLI:

```bash
npx shadcn@latest init
npx shadcn@latest add button card input badge textarea table
```

## Recommended implementation order

1. Replace mock login with Supabase Auth.
2. Replace mock issue route with a real certificate insert flow.
3. Persist verification logs and public lookup results.
4. Swap the QR placeholder for exportable QR generation.
5. Add PDF certificate generation.
6. Add optional AI fraud scoring and blockchain anchoring.

## Deploy to Vercel

```bash
npm install -g vercel
vercel
vercel --prod
```

## Notes

- TODO comments are included for Supabase, API, and blockchain integration.
- No real authentication, blockchain, or AI services are wired yet by design.
- The verification result page supports `VALID`, `TAMPERED`, and `NOT_FOUND` demo states out of the box.
