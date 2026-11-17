# Rohan Misal

Personal site for an SDE-II portfolio. Static React + TypeScript app, built with Vite, deployed to GitHub Pages.

## Run locally

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
npm run preview
```

## Deploy on GitHub Pages

1. Push this folder to a GitHub repository. The default branch should be `main`.
2. In the repo: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. Push to `main`. The workflow in `.github/workflows/deploy.yml` builds the site and publishes it.

The site URL will be:

- `https://<user>.github.io/<repo>/` for a project repository
- `https://<user>.github.io/` if the repository is named `<user>.github.io`

The build reads the Pages base path, so asset links work in both cases.

## If you would rather use Vercel or Netlify

Both can import the same repository.

- Framework preset: Vite
- Build command: `npm run build`
- Output directory: `dist`
- Leave `BASE_PATH` empty so assets are served from `/`
