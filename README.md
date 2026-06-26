# Colby's Tech Life Website

Clean, static, Cloudflare Pages-ready website for Colby's Tech Life.

## Folder structure

```text
public/
  index.html
  services.html
  about.html
  contact.html
  faq.html
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

## Preview locally

Open `public/index.html` directly, or run:

```bash
python -m http.server 8000 --directory public
```

Then open:

```text
http://localhost:8000
```

## Cloudflare Pages build settings

Use these settings:

```text
Framework preset: None
Build command: exit 0
Build output directory: public
Root directory: leave blank
```

## Updating GitHub after the first deployment

1. Open your GitHub repository.
2. Click **Add file**.
3. Click **Upload files**.
4. Drag the contents of this folder into the repository.
5. Commit the changes.
6. Cloudflare Pages will automatically redeploy from GitHub.

## Contact form

The contact form currently uses a static `action="thank-you.html"` flow. It does not email requests yet. A Cloudflare Pages Function or third-party form service can be added later.

## Current public URL

```text
https://colbys-tech-life.pages.dev
```
