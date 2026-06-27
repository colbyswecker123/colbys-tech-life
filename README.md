# Colby's Tech Life Website

Root-level static Cloudflare Pages website. This package is mobile-first and uses live scrollable website previews on the Work page.

## Cloudflare Pages settings

- Framework preset: None
- Build command: leave blank or use `exit 0`
- Build output directory: `.`
- Root directory: leave blank

Do not use a `public/` folder for this version.

## Upload to GitHub

Upload the contents of this folder directly to the repo root. Your GitHub repo should show:

- `index.html`
- `services/`
- `work/`
- `about/`
- `faq/`
- `contact/`
- `privacy/`
- `thank-you/`
- `assets/`
- `404.html`
- `_headers`
- `robots.txt`
- `sitemap.xml`
- `site.webmanifest`

## Logo update fix

This package uses new versioned logo filenames so browser/Cloudflare cache does not keep showing the old logo:

- `assets/img/ctl-logo-v2.png`
- `assets/img/ctl-logo-small-v2.png`
- `assets/img/ctl-icon-192-v2.png`
- `assets/img/ctl-icon-512-v2.png`

## Live previews on Work page

The Work page embeds:

- `https://magneticgems.com`
- `https://understandingtrauma.org`
- `https://sweckersembroidery.com`

Visitors can scroll inside each preview window.

If a preview is blank, the embedded site is blocking iframe embedding. Add this to the `_headers` file of each embedded site and redeploy that site:

```txt
/*
  Content-Security-Policy: frame-ancestors 'self' https://colbystechlife.com https://www.colbystechlife.com;
```

Also remove any blocking line like:

```txt
X-Frame-Options: DENY
X-Frame-Options: SAMEORIGIN
```

Cloudflare must be connected to GitHub so every commit triggers a new deployment.
