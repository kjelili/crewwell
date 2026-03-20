# CrewWell Web App

CrewWell is a site-operations wellness and safety pulse app with **user-owned data** and **role-based access control**.

## Privacy & Data Ownership

- **All data stays on the user's device** — stored in browser localStorage, never transmitted.
- Each user account is **namespace-isolated** — one user cannot read another user's check-ins.
- **Workers** see only their own check-in history.
- **Project Managers** see all check-ins across all users for dashboard analytics and crew management.
- PIN-secured local accounts — no cloud, no tracking, no data leaving the browser.

## What was implemented

### Authentication & Access Control
- Local user registration with display name, role selection, and PIN protection.
- Two roles: **Worker** and **Project Manager**.
- Session persistence so users stay signed in across page reloads.
- Sign-out to switch between accounts.

### Worker Experience
- Check-in form with stress, fatigue, safety readiness, and incident reporting.
- Option for anonymous or named submissions.
- Personal check-in history table (only their own data).
- No access to dashboard or site/crew management.

### Project Manager Experience
- Full dashboard with KPI cards, trend alerts, and manager recommendations.
- Aggregated view of ALL check-ins from ALL registered users.
- Supervisor nudges, incident correlation, and wellness referrals.
- Site and crew management (add/remove/restore defaults).
- Crew/site/time-window filters.

### Shared Features
- Multilingual UX (English, Spanish, French) with persisted preference.
- Responsive, touch-friendly UI with high contrast and modern design.
- LocalStorage-based persistence with backward-compatible normalization.

## Tech stack

- Vanilla JavaScript (no framework dependencies for the core app)
- Modern CSS with responsive grid and motion
- Vite (for development/build tooling)

## Run locally

```bash
npm install
npm run dev
```

Or open `crewwell-app.html` directly in a browser (single-file version).

## Production build

```bash
npm run build
npm run preview
```

## Deploy on Vercel

1. Import this repository into Vercel.
2. Vercel will use:
   - Install command: `npm install`
   - Build command: `npm run build`
   - Output directory: `dist`
3. Deploy.

`vercel.json` is configured for SPA fallback rewrites.

## Data Architecture

```
localStorage keys:
├── crewwell.users.registry        → [{id, displayName, role, pinHash, createdAt}]
├── crewwell.session.active        → {userId}
├── crewwell.user.<ID>.checkins    → [check-in objects]
├── crewwell.user.<ID>.sites       → [site names]
├── crewwell.user.<ID>.crews       → [crew names]
└── crewwell.user.<ID>.locale      → "en" | "es" | "fr"
```

Each user's data is fully namespaced under their unique ID. Managers aggregate by scanning all registered users' check-in stores (read-only).

## Project structure

- `src/main.js` — App logic, auth, data model, role-based rendering
- `src/style.css` — Design system and responsive UI styles
- `crewwell-app.html` — Single-file standalone version
- `README.md` — This file
