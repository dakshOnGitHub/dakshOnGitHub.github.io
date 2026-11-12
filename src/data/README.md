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

## skills.json

`groups`: one row per level (`Proficient`, `Familiar`, `Learning`). Move skills between groups as you get stronger.

## timeline.json

The **Experience** section. `status` is `"past"` or `"now"` (the current entry gets a "Now" tag). List only things that have happened or are happening; no speculative future entries.

## cad.json

The **CAD** section. Starts as `[]` and stays hidden until it has an entry. Files go in `public/cad/`.

```json
[
  {
    "title": "Laptop stand",
    "summary": "One sentence: what it's for and the design problem it solves.",
    "tool": "Fusion 360",
    "year": "2026",
    "poster": "/cad/laptop-stand.jpg",
    "model": "/cad/laptop-stand.glb"
  }
]
```

- `poster` is a still render shown first (in Fusion: capture an image of the design, about 1200px wide, saved as .jpg).
- `embed` (easiest): in Fusion, Share > Public link, then use `https://<your-hub>.autodesk360.com/shares/public/<SH id>?mode=embed`. Autodesk's viewer loads in place when someone clicks **View in 3D**. Use either `embed` or `model`, not both.
- `model` is optional. When present, a **View in 3D** button appears; the 3D viewer only downloads when someone clicks it.
- Getting a `.glb` out of Fusion 360: use File > Export and pick `.glb` if your version lists it; otherwise export `.obj` or `.stl` and convert it in Blender (File > Export > glTF 2.0, format "glTF Binary").
- Keep each `.glb` under ~3 MB. To shrink one: `npx @gltf-transform/cli optimize in.glb out.glb --compress draco`
