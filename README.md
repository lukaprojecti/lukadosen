# lukadosen.ch

Personal website of Luka Došen. Next.js 15 (App Router) with Payload CMS 3 on Postgres (Supabase), Tailwind 4, deployed on Vercel.

- Public site: `src/app/(frontend)/` (home, about, letters, legal)
- Payload admin and API: `src/app/(payload)/` (`/admin`, `/api`)
- Letters and newsletter subscribers live in Payload collections

## Development

```bash
npm install
npm run dev
```

Open http://localhost:3000. Before pushing, run a clean build (Vercel lints everything):

```bash
rm -rf .next && npm run lint && npm run build
```

## Site Mode

The site has two modes, switched with one environment variable:

| `NEXT_PUBLIC_SITE_MODE` | What it shows |
|---|---|
| `full` (default, also when unset) | The complete site: home with newsletter, about, letters, subscribe forms |
| `landing` | A single German landing page (portrait, title, short text, three links). `/about` and `/letters/*` redirect to `/` with a temporary 307. `/legal`, `/admin` and `/api` keep working. The sitemap lists only `/`. |

Nothing is deleted in landing mode. All pages, Payload collections and data stay in place and come back when the mode is switched to `full`.

Texts and links of the landing page live in `src/lib/landingContent.ts`.

### Switching on Vercel

1. Vercel → project → Settings → Environment Variables: set `NEXT_PUBLIC_SITE_MODE` to `landing` (Production only, so preview deployments stay `full`).
2. Deployments → latest Production deployment → **Redeploy**.

To switch back, set the variable to `full` (or delete it) and redeploy.

`NEXT_PUBLIC_*` variables are inlined at build time, so a change only takes effect after a redeploy.

### Testing locally

```bash
NEXT_PUBLIC_SITE_MODE=landing npm run build && npm start
```
