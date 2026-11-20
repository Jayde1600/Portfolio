# Portfolio

A fast, dependency-free personal portfolio. Plain HTML, CSS and a few lines of JavaScript: no framework, no build step.

## Run it in VS Code

1. Open this folder in VS Code.
2. Install the **Live Server** extension (VS Code will suggest it when you open the folder).
3. Right-click `index.html` → **Open with Live Server**.

The page reloads every time you save.

## Make it yours

Everything in `[SQUARE BRACKETS]` in `index.html` is a placeholder. Search for `[` to find them all.

| What | Where |
| --- | --- |
| Name, city, email, links | `index.html` (header, hero, about, footer) |
| Project screenshots | Save as `assets/img/project-1.webp` etc., then follow the comment above the first project in `index.html` |
| Résumé | Replace `assets/files/Aphiwe-Meslane-CV.pdf` (keep the name, or update the two links in `index.html`) |
| Photos | Replace the files in `assets/img/` (keep the names, or update the `src` and `width`/`height` in `index.html`) |
| Accent colour | `--accent` at the top of `css/styles.css` |

### Keeping it fast

- Save photos as **WebP**, around 1400px on the long side, ideally under 150 KB.
- Always set `width` and `height` on `<img>` so the page doesn't jump while loading.
- Images below the first screen use `loading="lazy"`, so they only download when needed.

## Structure

```
index.html          the page
css/styles.css      all styles
js/main.js          the scroll buddy
assets/fonts/       self-hosted fonts (Bricolage Grotesque, Inter, JetBrains Mono; SIL Open Font License)
assets/img/         photos
assets/files/       résumé PDF
```

## Deploying

It's a static site, so any static host works: GitHub Pages, Netlify or Vercel. Upload the folder as-is.
