# Rubricks website

Single-page marketing site for Rubricks, built with React and Vite.

## Develop

```bash
npm install
npm run dev        # local dev server with hot reload
npm test           # run the test suite once
npm run build      # production build into dist/
npm run preview    # serve the production build locally
```

## Project layout

```
index.html              Vite entry: meta tags, font links, #root
public/favicon.svg      brick-mark favicon
src/main.jsx            mounts <App /> into #root
src/App.jsx             page composition
src/index.css           global styles (unchanged from the original site)
src/lib/wall.js         running-bond brick-wall generator (pure function)
src/components/         Header, Hero, BrickWall, Divisions, Process, Community, Contact, Footer
src/__tests__/          rendering tests (Vitest + Testing Library)
```

## Deploy to Vercel

Vercel detects Vite automatically. No `vercel.json` is needed.

### Option A: from GitHub (recommended, gives you auto-deploys)

1. Push this folder to a GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "Rubricks website in React"
   git branch -M main
   git remote add origin git@github.com:<you>/<repo>.git
   git push -u origin main
   ```
2. Go to https://vercel.com/new, import the repository.
3. Framework preset: **Vite**. Build command `npm run build`, output directory `dist` (both are auto-filled).
4. Click **Deploy**. Every push to `main` will redeploy production; every other branch gets a preview URL.

### Option B: from the terminal

```bash
npm i -g vercel      # already installed on this machine
vercel login
vercel               # first run links the folder to a new project and creates a preview deployment
vercel --prod        # deploy to production
```

## Web Analytics

Vercel Web Analytics is enabled on the project. The `<Analytics />` component from `@vercel/analytics/react` is mounted in `src/App.jsx`; it loads `/_vercel/insights/script.js` in production and a no-op debug script locally.

## Connect your domain

1. In the Vercel dashboard open the project, then **Settings → Domains**.
2. Add `rubricks.in` and `www.rubricks.in`. Vercel will show the DNS records it needs.
3. At your DNS provider (wherever `rubricks.in` is registered), add:
   - `A` record for `@` pointing to `76.76.21.21`
   - `CNAME` record for `www` pointing to `cname.vercel-dns.com`

   If you prefer, change the domain's nameservers to `ns1.vercel-dns.com` and `ns2.vercel-dns.com` and Vercel will manage all records.
4. Wait for DNS to propagate (usually minutes, up to 48 hours). Vercel issues the HTTPS certificate automatically.
5. In **Settings → Domains**, mark one of the two (`rubricks.in` or `www.rubricks.in`) as the primary so the other redirects to it.

The same can be done from the CLI:

```bash
vercel domains add rubricks.in
vercel domains add www.rubricks.in
```

## License

MIT. See [LICENSE](LICENSE).
