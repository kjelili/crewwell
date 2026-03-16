# CrewWell Web App

CrewWell is a site-operations wellness and safety pulse app.  
It enables fast daily workforce check-ins and translates responses into trend alerts and practical manager recommendations.

## What was implemented

- Catchy, professional landing hero with clear value proposition and CTAs.
- Multilingual UX layer with in-app language switching (English, Spanish, French).
- Worker check-in form with:
  - Anonymous or named submission mode
  - Crew/site selection
  - Stress and fatigue sliders
  - Safety-readiness signal
  - Near-miss / incident signal capture
  - Optional notes
- Dashboard with:
  - Crew/site/time-window filters
  - KPI cards
  - Trend alerts (stress/fatigue/safety signals)
  - Manager recommendations
  - Supervisor nudges based on participation, incident, and risk signals
  - Incident correlation insight between incident flags and high-risk indicators
  - Wellness referral suggestions based on current trend patterns
  - Recent check-ins table
- Responsive, touch-friendly UI with high contrast and modern spacing/typography system.
- LocalStorage-based persistence with seeded demo data and backward-compatible normalization.
- Remotion demo video composition and render command.

## Tech stack

- Vite (vanilla JavaScript app shell)
- Modern CSS with responsive grid and motion
- Remotion + React (demo video generation)

## Run locally

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

## Render demo video

```bash
npm run video:render
```

Output file:

- `out/crewwell-demo.mp4`

## Project structure

- `src/main.js` - App logic and data model
- `src/style.css` - Design system and responsive UI styles
- `remotion/` - Demo video composition files
- `IMPLEMENTATION_LOG.md` - Step-by-step implementation record
- `BUILD_VERIFICATION.md` - Stability checks after each stage
- `DOCUMENTATION_SOURCES.md` - External docs used in implementation
