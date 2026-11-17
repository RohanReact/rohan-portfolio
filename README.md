# Rohan Misal

Personal portfolio site (React + Vite). Live: [rohanmisal.github.io/rohan-portfolio](https://rohanmisal.github.io/rohan-portfolio/)

## Local

```bash
npm install
npm run dev
```

## GitHub Pages

1. Repo **Settings → Pages → Build and deployment → Source: GitHub Actions** (must save this once).
2. Push to `main`. Workflow `.github/workflows/deploy.yml` builds and publishes.

### Private repo?

| Goal | What works |
| --- | --- |
| Free GitHub account | Repo must stay **public** for Pages |
| Private source code | Needs **GitHub Pro**, or host on **Vercel / Netlify** (free, private repo OK) |

Note: even with Pro + a private repo, the published Pages site is still public on the internet.
