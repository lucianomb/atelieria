# Contributing to Atelieria

Thanks for your interest in contributing! This guide will help you get set up, make changes, and submit high‑quality pull requests.

## Code of Conduct
By participating, you agree to abide by our [Code of Conduct](CODE_OF_CONDUCT.md).

## Development Setup
1. Fork and clone the repo
2. Create a feature branch
3. Install dependencies and run the dev server:
   ```bash
   npm install
   npm run dev
   ```
4. Create a `.env.local` file with your Puter credentials.

## Making Changes
- Keep PRs focused and small where possible
- Follow the existing code style and naming conventions
- Prefer functional React components and hooks
- Ensure TypeScript types are accurate
- UI changes should align with the dark studio design in `app/app.css`

## Testing Your Changes
- Run `npm run typecheck` locally to verify types
- Manually verify key flows: sign‑in, upload, visualize, export

## Commit Messages
- Use clear, descriptive messages (imperative tone)
- Reference issues where applicable (e.g., "Fixes #123")

## Pull Request Checklist
- [ ] Description of changes and motivation
- [ ] Screenshots for UI changes (before/after)
- [ ] Updated docs if needed (README, comments)
- [ ] No console errors/warnings in dev tools
- [ ] `npm run typecheck` passes

## Reporting Issues
Use the issue templates and include:
- Expected vs. actual behavior
- Steps to reproduce
- Screenshots or logs
- Environment details (OS, browser, Node version)

We appreciate your contributions — thank you for helping improve Atelieria!