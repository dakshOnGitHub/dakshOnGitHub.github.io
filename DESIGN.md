# DESIGN.md — "Signal"

Personal portfolio of Daksh Kalra (CS undergrad, class of 2030, seeking internships).
Feel: **bold & energetic** — poster-scale type, one hot signal color, motion that points at real content.
This file is the source of truth. Build to it exactly; change it here first.

---

## 1. Color tokens

One accent hue (signal orange), tuned per mode for contrast. Never introduce a second accent, gradients, or purple.

| Token          | Light       | Dark        | Use |
|----------------|-------------|-------------|-----|
| `--bg`         | `#F3EFE6`   | `#100F0D`   | Page background (warm paper / warm ink) |
| `--surface`    | `#EAE4D8`   | `#1A1916`   | Raised blocks, cards, marquee band |
| `--text`       | `#141210`   | `#F1ECE2`   | Primary text, display type |
| `--muted`      | `#5C564D`   | `#A39C90`   | Secondary text, meta, captions |
| `--line`       | `#141210` @ 14% | `#F1ECE2` @ 14% | Hairlines, dividers |
| `--accent`     | `#C8390A`   | `#FF5A1F`   | The signal: highlights, links, fills, focus |
| `--on-accent`  | `#FFFFFF`   | `#100F0D`   | Text/icons placed on an accent fill |

### Verified contrast (WCAG 2.x)
- text / bg: 16.28 (light), 16.27 (dark)
- muted / bg: 6.32 (light), 7.04 (dark); muted / surface: 5.73, 6.46
- accent / bg: 4.52 (light), 6.14 (dark)
- accent / surface: **4.10 (light)** → fails for small text; 5.64 (dark)
- on-accent / accent: 5.19 (light), 6.14 (dark)

### Accent rules
- Small accent-colored text is allowed **only on `--bg`**, never on `--surface` in light mode.
- On `--surface`, accent is for large text (≥24px, or ≥18.66px bold), fills, rules, and icons only.
- Text on an accent fill always uses `--on-accent` (never hard-code white — fails in dark mode).
- Focus ring: 2px solid `--accent`, 3px offset.

## 2. Theme switching
- Default follows `prefers-color-scheme`; manual toggle overrides and persists in `localStorage` (`theme` key, wrapped in try/catch).
- A blocking inline script in `index.html` sets `data-theme` on `<html>` **before** React mounts — no flash of wrong theme.
- Set `color-scheme: light` / `dark` per theme so native controls and scrollbars match.
- Theme change animates `background-color`/`color` over 300ms; no other properties.

## 3. Typography

Two families only. Self-hosted via Fontsource variable packages (no Google Fonts link — the wide axis only exists in the variable file).

| Role | Family | Settings |
|------|--------|----------|
| Display (name, section titles) | **Archivo Variable** | `font-stretch: 125%`, weight 800–900, uppercase, `letter-spacing: -0.02em`, `line-height: 0.88` |
| Body | **Archivo Variable** | `font-stretch: 100%`, weight 400 (600 for emphasis), `line-height: 1.55` |
| Labels / meta / code | **IBM Plex Mono** | weight 400/500, uppercase for labels, `letter-spacing: 0.06em` |

### Type scale
| Token | Size |
|-------|------|
| `--fs-hero` | `clamp(2.5rem, 13vw, 10.5rem)` — name; force line break between first/last name |
| `--fs-h2`   | `clamp(2.25rem, 7vw, 5.5rem)` — section titles |
| `--fs-h3`   | `clamp(1.25rem, 2.2vw, 1.75rem)` |
| `--fs-lead` | `clamp(1.125rem, 1.6vw, 1.375rem)` |
| `--fs-body` | `1rem` (16px) |
| `--fs-label`| `0.75rem` (12px, mono, uppercase) |

Rules: body line length max `62ch`. Never animate `font-variation-settings` or `font-stretch`. Display text must not overflow at 360px width.

## 4. Spacing

4px base, 8 steps. Use only these.

| Token | Value |
|-------|-------|
| `--s-1` | 4px |
| `--s-2` | 8px |
| `--s-3` | 16px |
| `--s-4` | 24px |
| `--s-5` | 40px |
| `--s-6` | 64px |
| `--s-7` | 96px |
| `--s-8` | 160px (drops to 96px below 720px) |

- Page gutter: `clamp(16px, 4vw, 48px)`.
- Section vertical padding: `--s-8`.
- Max content width: 1280px; text blocks narrower.

## 5. Layout principles
- Asymmetric, poster-like composition. Big type is the primary visual; no stock illustrations, no emoji, no icon-grid "feature" sections.
- Page structure: **festival poster billing** — hero = headliner, skills = tiered lineup (top tier biggest), timeline = tour dates, contact = "Book Daksh", projects = setlist.
- Section headers: huge two-line display title only (no small label or index number above it).
- Hairline rules (`--line`) structure the page instead of boxed cards wherever possible.
- Projects section renders only when `src/data/projects.json` has entries.
- Icons: inline SVG line icons (1.5px stroke, `currentColor`), only for contact links / UI controls.

## 6. Motion

Lots of motion, always tied to content. All motion is gated behind one global `prefers-reduced-motion` switch (CSS + a JS hook); reduced = instant states, no marquee scroll, no parallax.

| Token | Value |
|-------|-------|
| `--ease-out` | `cubic-bezier(0.16, 1, 0.3, 1)` |
| `--ease-in-out` | `cubic-bezier(0.65, 0, 0.35, 1)` |
| `--dur-fast` | 180ms |
| `--dur-med` | 450ms |
| `--dur-slow` | 900ms |

Signature moments:
1. **Hero entrance** — name letters rise from a mask with stagger (`--dur-slow`, 40ms stagger); accent bar wipes in.
2. **Skills marquee** — infinite horizontal band of skills on `--surface`; pauses on hover.
3. **Section titles** — slide up out of a clip mask on scroll into view.
4. **Timeline** — vertical accent line draws as you scroll; entries fade/slide in.
5. **Hover** — links get an accent underline that wipes left→right; cards shift 4px with accent edge.
6. **Status ticker** — "currently" line in hero cycles through real facts from profile data.

Animate only `transform`, `opacity`, `clip-path`. No layout-shifting animation.
