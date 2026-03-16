# Build Verification

## Verification checkpoints

### Checkpoint 1 - Scaffold baseline

- Command: `npm run build`
- Result: pass
- Notes: Vite scaffold builds successfully before feature work.

### Checkpoint 2 - MVP + UI implementation

- Command: `npm run build`
- Result: pass
- Notes: Core CrewWell app builds with no bundling errors.

### Checkpoint 3 - Lint check on edited files

- Tool: IDE lints
- Result: pass
- Notes: No lint errors reported in `src/main.js` and `src/style.css`.

### Checkpoint 4 - Final build after docs + Remotion setup

- Command: `npm run build`
- Result: pass
- Notes: App build remains stable after all updates.

### Checkpoint 5 - Demo video render

- Command: `npm run video:render`
- Result: pass
- Output: `out/crewwell-demo.mp4`

### Checkpoint 6 - v2 features integration build

- Command: `npm run build`
- Result: pass
- Notes: Multilingual, supervisor nudges, incident correlation, and referral logic compile successfully.

### Checkpoint 7 - v2 edited files lint

- Tool: IDE lints
- Result: pass
- Notes: No lint errors reported in `src/main.js` and `src/style.css` after v2 integration.
