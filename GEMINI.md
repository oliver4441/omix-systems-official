# Omix Web Development Platform

## Project Overview
Omix is a web development service focused on delivering high-converting websites for Kenyan businesses with a 7-day launch guarantee. The project emphasizes speed, local pricing, real results, and ongoing support. It is a single-page application built using React components loaded directly in the browser, without a traditional build step.

## Tech Stack
- **Frontend**: React 18 (via CDN), Babel Standalone (for on-the-fly JSX transformation)
- **Styling**: Tailwind CSS (via CDN), custom CSS variables for design tokens
- **Icons**: Lucide icons (via CDN)
- **Deployment**: Vercel (for automatic deployment and SPA routing)

## Architecture Notes
- The application operates as a Single-Page Application (SPA) where `index.html` is the entry point.
- React components are individual `.js` files loaded using `<script type="text/babel">` in `index.html`.
- `app.js` serves as the main application component, wrapping the entire application within an `ErrorBoundary` for graceful error handling.
- Components are designed to be self-contained and use `try/catch` blocks to silently return `null` on error, which is then caught by the `ErrorBoundary`.
- Videos and other assets are preloaded asynchronously, with a `Preloader` component shown during this phase.
- Design tokens are defined using CSS custom properties within `index.html`.
- The `vercel.json` file is configured to rewrite all routes to `index.html`, ensuring proper SPA routing.
- The `trickle/` directory contains project metadata, generated assets, and rules, and is not part of the deployed site.

## Building and Running
- **No Build Step**: This project does not require a traditional build process (e.g., Webpack, Vite). JSX transformation is handled in the browser by Babel Standalone.
- **Local Preview**: To run the project locally, simply open `index.html` in a web browser, or serve the root directory using any static file server.
- **Deployment**: The project is designed for automatic deployment via Vercel. Pushing changes to the connected Git repository will trigger a new deployment.

## Development Conventions
- **Component Structure**: Each major UI element is encapsulated in its own `.js` file within the `components/` directory.
- **Styling**: Tailwind CSS classes are used extensively for styling, with additional custom CSS provided in `index.html` for base styles, components, and animations.
- **Error Handling**: Components are encouraged to use `try/catch` blocks to prevent individual component failures from crashing the entire application, relying on the `ErrorBoundary` in `app.js` for a global fallback.
- **Asset Management**: Videos and other multimedia assets are located in the `` directory. The `trickle/assets` folder contains JSON files that appear to be generated metadata.
- **Scroll Animations**: The `index.html` includes JavaScript for scroll-based animations, applying `scroll-animate` classes to elements when they become visible.
