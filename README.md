# The Cafeteria — website

Static site, no build step, three files that matter:

- `index.html` — the page itself. Design is finished; don't need to touch this between events.
- `config.js` — **the only file you edit between events.** Date, time, the question, the survey stats.
- `thanks.html` — the page people see right after they submit the RSVP form.

## Editing between events

Open `config.js` in any text editor. Each value is commented. Change the text between the quotes, save, then commit and push (see "Updating the live site" below) to publish it.

Don't touch `index.html` unless you want to change the actual design or copy — that part was intentionally kept out of your way.

## RSVP handling: Netlify Forms (recommended)

You asked about Formspree. Formspree's free tier caps at 50 submissions/month — right at your ceiling, and one more account to manage. Since you're deploying to Netlify anyway (see below), **Netlify Forms** is built in: no extra account, no API key, and it's free up to 100 submissions/month, well clear of what you need.

The form in `index.html` is already wired for it (`data-netlify="true"`). Once the site is deployed to Netlify for the first time:

1. In your Netlify site dashboard, go to **Forms**. Netlify auto-detects the form from the static HTML on the first deploy — you'll see it listed as "rsvp."
2. Go to **Forms → Settings and usage → Form notifications → Add notification → Email notification**. Set it to your email. Now every RSVP lands in your inbox.
3. All submissions (name, contact, attending yes/no, guest, note) are also visible any time in the Forms tab, exportable as CSV — handy for a headcount before the event.

That's the whole setup. No signup elsewhere, no code changes.

### If you'd rather use Formspree instead (e.g. you end up on Vercel, not Netlify)

1. Go to [formspree.io](https://formspree.io), sign up free, create a new form.
2. Copy the endpoint it gives you (looks like `https://formspree.io/f/xxxxabcd`).
3. In `index.html`, find the `<form ...>` tag near the bottom (search for `RSVP`) and replace it with:
   ```html
   <form action="https://formspree.io/f/xxxxabcd" method="POST">
   ```
   (Remove the `data-netlify`, `netlify-honeypot`, and hidden `form-name`/`bot-field` lines — those are Netlify-specific.)
4. Formspree's free tier: 50 submissions/month, email notification built in, submissions also visible in their dashboard.

## Deploying (Netlify)

**Least friction path — connect this repo to Netlify so every push goes live automatically:**

1. Push this repo to GitHub (create a new empty repo on GitHub, then run the two commands it gives you under "push an existing repository").
2. Go to [app.netlify.com](https://app.netlify.com), sign up free with GitHub.
3. **Add new site → Import an existing project → GitHub** → pick this repo.
4. Build settings: leave the build command blank and the publish directory as `/` (this is a plain static site, nothing to build).
5. Deploy. Netlify gives you a live URL immediately (something like `random-name-123.netlify.app`).

From then on: edit `config.js` → commit → push → site updates automatically in about a minute. No dashboard visits needed for routine updates.

## Custom domain

Once you have a domain in mind:

1. Buy it from any registrar — Cloudflare Registrar (sells at cost, no markup) or Namecheap are both fine. Expect roughly $10–15/year for a `.com`.
2. In Netlify: **Site settings → Domain management → Add a domain**, enter it.
3. Netlify shows you DNS records to add at your registrar (usually just pointing nameservers to Netlify, or a couple of A/CNAME records if you want to keep DNS elsewhere).
4. Once DNS propagates (can take minutes to a few hours), Netlify auto-issues a free SSL certificate. No extra cost beyond the domain itself.

## Previewing locally

No server needed — just open `index.html` directly in a browser to check how it looks. The RSVP form won't actually submit anywhere until it's live on Netlify (Netlify Forms only works on deployed Netlify sites), but everything else — layout, config.js changes — will render correctly.
