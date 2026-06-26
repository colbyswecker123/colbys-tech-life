# Colby's Tech Life

Professional static website for Colby's Tech Life.

## Folder structure

```text
public/              Website files deployed by Cloudflare Pages
functions/           Cloudflare Pages Functions for future backend features
package.json         Local preview helper
wrangler.toml        Cloudflare Pages output folder setting
```

## Cloudflare Pages settings

Keep the existing Cloudflare Pages project. Do not create a new one.

Use these build settings:

```text
Framework preset: None
Build command: exit 0
Build output directory: public
Root directory: leave blank
```

## Update the live site through GitHub

1. Unzip this package.
2. Go to the GitHub repository connected to Cloudflare Pages.
3. Upload/replace these top-level items:

```text
public
functions
README.md
package.json
wrangler.toml
```

4. Commit changes.
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

## Contact form email delivery

The contact form UI is complete and points to:

```text
/api/contact
```

The Cloudflare Pages Function is included at:

```text
functions/api/contact.js
```

To activate email delivery later, add these environment variables in Cloudflare Pages:

```text
RESEND_API_KEY
CONTACT_TO
CONTACT_FROM
```

Until those are connected, the contact form will display a message asking visitors to email directly.

## After buying a custom domain

After connecting `colbystechlife.com`, update these files from the temporary pages.dev URL to the final domain:

```text
public/sitemap.xml
public/robots.txt
HTML canonical URLs and Open Graph URLs
```

Search for:

```text
https://colbys-tech-life.pages.dev
```

Replace with:

```text
https://colbystechlife.com
```
