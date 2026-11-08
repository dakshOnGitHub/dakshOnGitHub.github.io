# Editing site content

Everything on the page comes from the JSON files in this folder. Edit them, save, and the dev server reloads.

## projects.json

Starts as `[]`. The **Setlist** (projects) section stays hidden until the array has at least one entry. Add a project like this:

```json
[
  {
    "title": "Study Buddy",
    "year": "2026",
    "summary": "One or two sentences: what it does and who it's for.",
    "highlight": "One concrete thing you're proud of (a hard bug, a number, a feature).",
    "stack": ["React", "Firebase"],
    "links": [
      { "label": "Live", "url": "https://example.com" },
      { "label": "Code", "url": "https://github.com/you/study-buddy" }
    ],
    "status": "shipped"
  }
]
```

- `status`: `"shipped"` or `"in progress"`.
- `highlight` and `links` are optional.
- Order in the array = order on the page. Put your best one first.

## profile.json

Name, about paragraphs, the rotating "Now playing" lines, and contact links.
Links with `"placeholder": true` show a dashed "placeholder" tag **in dev only**. Replace the URL and delete the `placeholder` line.
To add a resume: put `resume.pdf` in the `public/` folder, then add this to `contact.links`:

```json
{ "kind": "resume", "label": "Resume (PDF)", "url": "/resume.pdf" }
```

## skills.json

Three billing tiers, poster-style. Top tier renders biggest. Move skills between tiers as you get stronger.

## timeline.json

"Tour dates". `status` is `"played"` (past), `"now"`, or `"upcoming"`. Entries with `"placeholder": true` get a dev-only tag.
