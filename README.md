# Colby’s Tech Life Website

A clean, professional, static website for Colby’s Tech Life.

## Folder structure

```text
public/
  index.html
  services.html
  about.html
  faq.html
  contact.html
  thank-you.html
  404.html
  assets/
    css/styles.css
    js/main.js
    img/
functions/
README.md
package.json
wrangler.toml
```

## Cloudflare Pages settings

Use the same project you already connected to GitHub.

```text
Framework preset: None
Build command: exit 0
Build output directory: public
Root directory: leave blank
```

## How to update the live website

1. Download and extract this package.
2. Go to your GitHub repo: `colbyswecker123/colbys-tech-life`.
3. Upload/replace the project files so the repo root contains `public`, `functions`, `README.md`, `package.json`, and `wrangler.toml`.
4. Commit the changes.
5. Cloudflare Pages will redeploy automatically.

## Local preview

From the project folder, run:

```bash
python -m http.server 8000 --directory public
```

Then open:

```text
http://localhost:8000
```

## Contact form status

The contact form is front-end only right now. It redirects to `thank-you.html` and can later be connected to Cloudflare Pages Functions or an email service.

## Domain notes

Current temporary URL:

```text
https://colbys-tech-life.pages.dev
```

After buying a custom domain, update:

- Canonical URLs in each HTML page
- `sitemap.xml`
- `robots.txt`
- Open Graph image URLs if desired
