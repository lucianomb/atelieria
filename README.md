# Atelieria — AI-Driven Architectural Visualization

Atelieria is a sleek, dark‑mode studio for transforming floor plans into stunning 3D visualizations with AI. Upload a plan, generate, compare before/after, and export.

## ✨ Features
- Drag & drop image upload with progress and file validation
- One‑click AI rendering and export (PNG)
- Before/after comparison slider
- Private project persistence with Puter Cloud (login required)
- Modern, high‑contrast UI (Plus Jakarta Sans, glass surfaces, neon accents)
- Built with React Router 7, Tailwind CSS v4, TypeScript

## 🚀 Tech Stack
- React 19 + React Router 7
- Tailwind CSS 4
- TypeScript
- Lucide Icons
- Puter Cloud SDK (`@heyputer/puter.js`) for auth/storage

## 📦 Project Structure (high level)
```
app/                # Routes, root layout, and global styles
  routes/
    home.tsx        # Landing + upload + projects grid
    visualizer.$id  # Visualizer & compare view for a project
  app.css           # Tailwind layers, theme, and components
components/         # UI components (Navbar, Upload, Button, etc.)
lib/                # AI + Puter integration and constants
public/             # Static assets
```

## 🔐 Environment
Create `.env.local` at the project root and configure your Puter credentials:
```
# Example — obtain from Puter Dashboard
PUTER_APP_ID=your_app_id
PUTER_APP_SECRET=your_app_secret
# Any other vars your Puter setup requires
```

## 🧑‍💻 Getting Started
1. Install dependencies
   ```bash
   npm install
   ```
2. Start the dev server
   ```bash
   npm run dev
   ```
   App runs at http://localhost:5173
3. Build for production
   ```bash
   npm run build
   ```
4. Serve the build (Node)
   ```bash
   npm start
   ```

## 🐳 Docker (optional)
```bash
docker build -t atelieria .
docker run -p 3000:3000 atelieria
```

## 🧭 Architecture Notes
- UI state is handled locally per route; auth state is provided via `Outlet` context in `app/root.tsx`.
- Uploads are validated client‑side; progress is simulated for UX while the `FileReader` prepares data.
- Generation calls are abstracted in `lib/ai.action.ts`; persistence in `lib/puter.action.ts`.

## 🔧 Scripts
- `npm run dev` — Start dev server with HMR
- `npm run build` — Build client and server bundles
- `npm start` — Serve the production build
- `npm run typecheck` — Generate types and run TypeScript

## 🤝 Contributing
Please read [CONTRIBUTING.md](CONTRIBUTING.md) and our [Code of Conduct](CODE_OF_CONDUCT.md) before opening issues or PRs.

## 🔒 Security Policy
See [SECURITY.md](SECURITY.md) for how to report vulnerabilities.

## 📄 License
MIT © Atelieria Contributors
