# Cloudflare Pages Functions

This folder includes a starter contact form endpoint:

`POST /api/contact`

The function is ready to send email through Resend after environment variables are added in Cloudflare Pages.

Required environment variables:

- `RESEND_API_KEY`
- `CONTACT_TO`
- `CONTACT_FROM`

Until those are configured, the contact page will show a message asking visitors to email directly.
