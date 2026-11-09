# Editing site content

Everything on the page comes from the JSON files in this folder. Edit them, save, and the dev server reloads.

## projects.json

Starts as `[]`. The **Projects** section stays hidden until the array has at least one entry. Add a project like this:

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
- `highlight`, `links` and `items` are optional. `items` is a list of `{ "name", "desc" }` for grouping several small apps under one card.
- Order in the array = order on the page. Put your best one first.

## profile.json

Name, the hero `pitch` (one sentence), the `currently` lines (2-3 short facts shown in the hero), about paragraphs, facts, awards, honors, and contact links.
Awards and honors render in the **Recognition** section; it hides itself if both are empty.
Links with `"placeholder": true` show a dashed "placeholder" tag **in dev only**. Replace the URL and delete the `placeholder` line.
The resume link (`"kind": "resume"`) also powers the **Resume** button in the hero. The PDF lives in `public/`.

## skills.json

`groups`: one row per level (`Proficient`, `Familiar`, `Learning`). Move skills between groups as you get stronger.

## timeline.json

The **Experience** section. `status` is `"past"` or `"now"` (the current entry gets a "Now" tag). List only things that have happened or are happening; no speculative future entries.
