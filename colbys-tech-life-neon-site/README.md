# Colby's Tech Life Website

## Quick local preview

For the easiest preview, open `public/index.html` directly in your browser after unzipping the project. This version uses relative links so the design, images, and page links load correctly even before it is uploaded to GitHub or Cloudflare.

For the most accurate preview, run a local server from the project folder:

```bash
python -m http.server 8000 --directory public
```

Then open `http://localhost:8000` in your browser.
A clean, mobile-first, Cloudflare-ready static website for Colby's Tech Life.

This site is built with plain HTML, CSS, and JavaScript. It is designed for services, information, and contact requests. It does not include a store, cart, payment system, customer accounts, or tracking scripts.

## Current brand setup

The site has been updated to match the provided brand card and color scheme:

- Dark navy and black tech background
- Electric blue and cyan glow accents
- White text on dark hero sections
- Power-style C logo mark
- Contact information from the brand card
- Edinburg, TX local service positioning

## Folder structure

```text
colbys-tech-life-site/
├── public/
│   ├── index.html
│   ├── services.html
│   ├── about.html
│   ├── contact.html
│   ├── faq.html
│   ├── thank-you.html
│   ├── 404.html
│   ├── _headers
│   ├── _redirects
│   ├── robots.txt
│   ├── sitemap.xml
│   ├── site.webmanifest
│   ├── favicon.svg
│   └── assets/
│       ├── css/
│       │   └── styles.css
│       ├── js/
│       │   └── main.js
│       └── img/
│           ├── brand-card.jpg
│           ├── brand-mark.svg
│           └── social-preview.jpg
├── functions/
│   └── README.md
├── package.json
├── wrangler.toml
└── README.md
```

## Pages included

- Home
- Services
- About
- Contact
- FAQ
- Thank You
- 404 page

## Local preview option 1: quick browser preview

Open this file directly in your browser:

```text
public/index.html
```

Some links may behave better when served through a local server, so the next option is recommended.

## Local preview option 2: simple local server

From the project folder, run:

```bash
cd colbys-tech-life-site
python -m http.server 8000 --directory public
```

Then open:

```text
http://localhost:8000
```

## Local preview option 3: Wrangler

Install dependencies:

```bash
npm install
```

Run a local Cloudflare Pages preview:

```bash
npm run dev
```

## Deploy to Cloudflare Pages using Direct Upload

This is the easiest path if you do not want to use GitHub yet.

1. Log in to Cloudflare.
2. Go to Workers & Pages.
3. Create a Pages project.
4. Choose Direct Upload.
5. Upload the contents of the `public` folder.
6. Cloudflare will create a temporary pages.dev address.
7. Test the site.
8. Add a custom domain later when you buy one.

Important: If you start with Direct Upload, Cloudflare says you cannot switch that same project to Git integration later. You can always create a new Pages project later if needed.

## Deploy to Cloudflare Pages using GitHub

This is the better long-term option if you want version control.

1. Create a GitHub repository.
2. Upload the entire project folder.
3. In Cloudflare, go to Workers & Pages.
4. Create a Pages project.
5. Choose Git integration.
6. Connect the GitHub repository.
7. Use these build settings:
   - Framework preset: None
   - Build command: `exit 0`
   - Build output directory: `public`
8. Deploy.

## Deploy using Wrangler

After installing dependencies and logging in to Cloudflare:

```bash
npm install
npx wrangler login
npm run deploy
```

The `wrangler.toml` file already points to `./public` as the Pages build output folder.

## Domain setup notes

The site currently uses `https://colbystechlife.com/` in SEO tags, social preview tags, the sitemap, and robots file.

When you choose a final domain, update these files:

- `public/index.html`
- `public/services.html`
- `public/about.html`
- `public/contact.html`
- `public/faq.html`
- `public/thank-you.html`
- `public/robots.txt`
- `public/sitemap.xml`

Search for:

```text
colbystechlife.com
```

Replace it with your final domain.

## Contact form status

The contact form is currently a front-end only starter form. It validates required fields, stores the name briefly in session storage, and redirects to `thank-you.html`.

It does not send an email yet and does not save customer requests yet.

Future options:

- Cloudflare Pages Function that sends an email
- Cloudflare Turnstile spam protection
- Email routing or transactional email service
- Request storage in a database
- Admin dashboard
- Quote tracking
- Client request management

## Privacy-friendly setup

This starter site includes:

- No analytics scripts
- No cookies
- No online payments
- No customer accounts
- No backend storage
- Basic security headers in `_headers`

## Good next upgrades

1. Buy and connect a final domain.
2. Add a real contact form handler.
3. Add a dedicated privacy policy page.
4. Add project examples or service packages.
5. Add reviews or testimonials once available.
6. Add local SEO copy for Edinburg, McAllen, Mission, Pharr, and the Rio Grande Valley.
