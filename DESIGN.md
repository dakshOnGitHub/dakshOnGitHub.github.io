# DESIGN.md — "Signal"

Personal portfolio of Daksh Kalra (CS undergrad, class of 2030, seeking internships).
Feel: **professional with a signature** — one poster-scale moment (the name), calm editorial structure everywhere else, one signal color used sparingly.
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
| Display (name only) | **Archivo Variable** | `font-stretch: 125%`, weight 900, uppercase, `letter-spacing: -0.02em`, `line-height: 0.88` |
| Headings (section titles, emails, skill names) | **Archivo Variable** | `font-stretch: 112%`, weight 650–750, mixed case, `letter-spacing: -0.02em`, `line-height: 1.05` |
| Body | **Archivo Variable** | `font-stretch: 100%`, weight 400 (500–600 for emphasis), `line-height: 1.6` |
| Labels / meta | **IBM Plex Mono** | weight 500, uppercase, `letter-spacing: 0.06em` |

### Type scale
| Token | Size |
|-------|------|
| `--fs-hero` | `clamp(3rem, 12.5vw, 9.5rem)` — name; forced break between first/last name |
| `--fs-h2`   | `clamp(1.75rem, 2.8vw, 2.375rem)` — section titles |
| `--fs-h3`   | `clamp(1.125rem, 1.6vw, 1.375rem)` |
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
| `--s-7` | 96px (drops to 64px below 720px) |
| `--s-8` | 160px |

- Page gutter: `clamp(16px, 4vw, 48px)`.
- Section vertical padding: `--s-7`.
- Max content width: 1200px; text blocks narrower.

## 5. Layout principles
- Professional first: plain section names (About, Recognition, Projects, Skills, Experience, Contact). No metaphor copy.
- Identity comes from three things only: the wide uppercase name, the signal orange, and the **short accent bar** (32px × 3px) that marks the hero rule and the top of every section head.
- **Hero:** left-aligned. Mono kicker (role / class of) → name → hairline rule with accent bar → one-line pitch beside a "Currently" block → actions (Email me solid, Resume ghost, GitHub/LinkedIn text links).
- **Sections:** two-column grid ≥900px. Left column: accent bar, numbered mono label (`01 / About`, number in accent), heading; sticky while the section scrolls. Right column: content. Single column below 900px. Numbering is computed in `App.jsx`, so hidden sections leave no gaps.
- Hairline rows (`--line`) structure lists (facts, awards, honors, skills, experience, contact links). No boxed cards, no shadows.
- Recognition (awards + leadership) is its own section right after About.
- Skills: one row per level (Proficient / Familiar / Learning), mono label left, names right.
- Experience: past and current entries only; never list speculative future milestones. Current entry gets a small accent "Now" tag.
- Projects section renders only when `src/data/projects.json` has entries.
- Icons: inline SVG line icons (1.5px stroke, `currentColor`), only for contact links / UI controls.

### Accent budget
Orange appears only on: the monogram, the accent bars, section numbers, award places, the "Now" tag/dot, the primary button, link underlines, focus rings and selection. Nothing else.

## 6. Motion

Subtle and brief, gated behind `prefers-reduced-motion` (CSS only; reduced = instant states).

| Token | Value |
|-------|-------|
| `--ease-out` | `cubic-bezier(0.16, 1, 0.3, 1)` |
| `--ease-in-out` | `cubic-bezier(0.65, 0, 0.35, 1)` |
| `--dur-fast` | 180ms |
| `--dur-med` | 450ms |
| `--dur-slow` | 800ms |

1. **Hero entrance:** name letters rise from a mask (30ms stagger); accent bar wipes in; pitch and actions fade up.
2. **Scroll reveal:** `[data-reveal]` blocks fade up 16px once.
3. **Hover:** link underlines wipe left→right; link-row arrows nudge up-right.

No marquee, no ticker, no scroll-linked effects. Animate only `transform`, `opacity`, `clip-path`.
