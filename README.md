# Bahaa's Portfolio — Instagram-Style Digital Marketing Portfolio

A portfolio site built to look and behave like an Instagram profile page — story
highlights, a post grid, a case-study modal, tabs, and a testimonials grid, all
built with React + Vite.

## Running it locally

```bash
npm install
npm run dev
```

Then open the URL it prints (usually http://localhost:5173).

To build for production:

```bash
npm run build
npm run preview   # sanity-check the production build locally
```

## Editing content (no code knowledge needed)

Everything you'll want to change lives in `src/content/`:

- **`content.js`** — your name, handle, bio, specialties, stats (Campaigns /
  Clients Served / Avg. ROI), website link, and contact email/WhatsApp.
- **`posts.js`** — the grid of case studies/campaigns. Each entry has a cover
  image, a caption, headline "metrics", and a full case-study write-up (challenge
  / approach / results / timeframe) shown when someone clicks the post. An entry
  with `type: "reel"` can also set an optional `video` field (an imported `.mp4`)
  — the grid still shows the `image` as a static cover with a play badge, but the
  expanded view plays the actual video instead of the image.
- **`highlights.js`** — the story-highlight bubbles (Social Media, Paid Ads, SEO,
  Branding, Strategy) and the slides shown when someone clicks one.
- **`testimonials.js`** — the client quotes shown under the Testimonials tab.

Every field is a plain string, number, or array — just edit the text between the
quotes and save. No need to touch anything in `src/components/`.

### Swapping in real photos

All images currently used are placeholder SVGs in `src/assets/images/`
(gradient tiles with labels). To use real photos:

1. Add your image file to the matching folder (`assets/images/posts/`,
   `assets/images/highlights/`, or directly in `assets/images/`).
2. Update the `import` line at the top of the relevant content file
   (`posts.js`, `highlights.js`, or `content.js`) to point at the new file.

For best results, use roughly square images (1:1 aspect ratio) sized around
1080×1080px for posts, similar to how Instagram itself sizes photos — this
avoids any layout shift. WebP or JPG both work.

### Adding a real video to a Reel

Browsers won't reliably play `.mov`/HEVC files exported from an iPhone —
transcode to H.264 `.mp4` first, e.g.:

```bash
ffmpeg -i input.mov -vf "scale=720:-2" -c:v libx264 -crf 23 -pix_fmt yuv420p \
  -c:a aac -b:a 128k -movflags +faststart output.mp4
ffmpeg -ss 0.4 -i input.mov -vframes 1 -vf "scale=720:-2" poster.jpg
```

Add both files to `src/assets/videos/web/`, import them in `posts.js`, and set
`video` (the `.mp4`) and `image` (the `poster.jpg`, used as the grid cover) on
the post entry.

## Deploying

This is a static Vite build — deploy the `dist/` folder (produced by
`npm run build`) to any static host. **Vercel** is recommended:

1. Push this project to a GitHub repo.
2. Import the repo at vercel.com — it auto-detects the Vite preset.
3. Deploy. Add a custom domain later from the Vercel dashboard if you have one.

Netlify works the same way as a second option.

## Project structure

```
src/
├── content/       # ⭐ all editable copy/data lives here
├── components/    # UI components, grouped by feature
├── context/        # theme (light/dark) provider
├── hooks/          # shared interactive logic (modal, story timer, ESC-to-close)
└── styles/         # tokens.css (colors/spacing/fonts) + one CSS Module per component
```
