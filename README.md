# Colby's Tech Life Website

Clean, simplified Cloudflare Pages website for Colby's Tech Life.

## What changed in this version

- Simplified the homepage so it is shorter and less busy.
- Replaced CTA/navigation links with root-based links so buttons work reliably on the custom domain.
- Changed the contact form to a simple working thank-you redirect for now.
- Kept the official power-C logo in the header and footer.
- Updated SEO/canonical URLs to https://colbystechlife.com.
- Added cache-busting version tags to CSS/JS so the new design shows after deployment.

## Cloudflare Pages settings

Framework preset: None  
Build command: exit 0  
Build output directory: public  
Root directory: leave blank

## Update live site

Upload these top-level items to GitHub:

- public
- functions
- README.md
- package.json
- wrangler.toml

Commit message suggestion: `Simplify homepage and fix buttons`


## Routing fix
This version removes the catch-all `/* /404.html 404` rule from `public/_redirects` because it can cause Cloudflare Pages to send normal subpages to the 404 page. The remaining redirect rules only support clean URLs such as `/services` -> `/services.html`.

Cloudflare Pages settings:
- Framework preset: None
- Build command: exit 0
- Build output directory: public
- Root directory: .
