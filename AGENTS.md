# Omix Website

## Tech Stack
- **React 18** via CDN (no build step)
- **Babel Standalone** for JSX transformation
- **Tailwind CSS** via CDN
- **Lucide icons** via CDN
- **Vercel** deployment

## File Structure
```

├── index.html          # Entry point, loads all scripts
├── app.js              # Main App component + ErrorBoundary
├── components/         # React components (Preloader, Hero, Navigation, etc.)
│   ├── Preloader.js
│   ├── Navigation.js
│   ├── Hero.js
│   ├── Products.js
│   ├── Services.js
│   ├── Contact.js
│   ├── EmailSection.js
│   ├── Footer.js
│   ├── WhatsAppButton.js
│   └── TrickleBadge.js
├── vercel.json         # SPA routing config (all routes -> index.html)
└── trickle/            # Project metadata
    ├── notes/
    ├── assets/
    └── rules/
```

## Key Commands
- **Deploy**: Push to Vercel-connected repo (automatic via Vercel)
- **Local preview**: Open `index.html` directly in browser or use any static server

## Architecture Notes
- No build step required - browser loads Babel and transforms JSX on-the-fly
- Components are individual `.js` files loaded via `<script type="text/babel">` in `index.html`
- `app.js` is loaded last after all component dependencies
- ErrorBoundary wraps the entire app for graceful error handling
- App preloads videos from `devproto.trickle.so` before showing content
- Design tokens defined as CSS custom properties in `index.html`

## Important Quirks
- Videos are preloaded asynchronously; app shows Preloader until all load (or 3s timeout)
- All components use try/catch blocks - errors silently return `null` (caught by ErrorBoundary)
- `vercel.json` rewrites all routes to `index.html` for SPA behavior
- `trickle/` folder contains project rules and generated assets - not part of the deployed site
