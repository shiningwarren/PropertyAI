# PropertyAI

A modern AI-powered platform for property investors, landlords, and developers.

## Features
- AI chat demo
- Property features and services
- Testimonials
- Responsive, modern UI with Tailwind CSS

## Getting Started

1. **Open a terminal in your project directory**
2. **Install dependencies**
   ```sh
   npm install
   ```
3. **Start the development server**
   ```sh
   npm run dev
   ```
   - Wait for the local URL (e.g., http://localhost:5173/) to appear.
   - Open the local URL in your browser to view your app.
4. **Build for production**
   ```sh
   npm run build
   ```
5. **Preview the production build**
   ```sh
   npm run preview
   ```

## Deployment
- For custom domains (e.g., www.propertyai.club), set `base: '/'` in `vite.config.ts` before building.
- Deploy the contents of the `dist/` folder to your hosting provider (Vercel, Netlify, etc.)...

## Project Structure
- `src/` – Main source code (components, styles, entry point)
- `public/` – Static assets (404.html, robots.txt, sitemap.xml)
- `index.html` – Main HTML entry point

## Troubleshooting
- If you see errors about missing dependencies, run `npm install`.
- If the port is in use, stop other dev servers or use a different port.
- If code changes don't show, stop the server (`Ctrl+C`) and restart with `npm run dev`.

---
