---
version: 1
slug: "src-app-jsx"
primary_target: "src/App.jsx"
related_targets: []
---

# Surface: portfolio home (single page)

Scope: the whole one-page site, src/App.jsx and sections. Mode: Experience.
Audience: internship recruiters (10-second skim) and engineers (2-minute read).
Action: reach Daksh by email / GitHub / LinkedIn / resume.
Proof: real skills list, honest timeline; no projects yet (section hidden until projects.json fills).
Constraints: DESIGN.md "Signal" palette and type, light/dark toggle, heavy motion tied to content, reduced-motion support. Build path: code-led (no image generation in this harness).
Unresolved: university name, GitHub/LinkedIn handles, resume PDF, timeline specifics are placeholders.

## Direction contract

THESIS: The site is a gig poster for a tour that has just started — Daksh is the headliner, skills are the supporting bill sized by strength, the timeline is tour dates, contact is the box office. Refuses the category default of hero + about card + icon skill grid + vertical timeline cards.

OWN-WORLD: Warm paper / warm ink grounds, one signal orange used as poster ink (rules, stars, stamps, fills), Archivo at 125% width black uppercase for billing, Plex Mono for venue/date small print, hairline rules, a tilted "TOUR STARTED 2026" stamp. No boxes-with-shadows; the bill is centered stacked type with descending size tiers.

STORY: Visitor sees who (headliner), what (CS, class of 2030), the lineup (stack), where he has been and is going (tour dates), and how to book him (box office). Leaves remembering the poster and with a contact link one click away.

FIRST VIEWPORT: Top strip: mono small print "DK · 2026 → 2030 WORLD TOUR" left, theme toggle + "BOOK →" anchor right. Center: "DAKSH / KALRA" across two lines at --fs-hero, letters rising in with stagger; orange star rule under it; "CS STUDENT · CLASS OF 2030" in mono; a "NOW PLAYING:" ticker cycling real facts. Bottom edge: start of the orange billing marquee band. Primary action "BOOK A CHAT" button in accent fill.

FORM: Festival poster billing, position 3 on my ordered list of seven; dealt structure. seed:221fd17ed45e3e46

Signature interaction: billing tiers rise into place on scroll with stagger; tour-date rows wipe in with an orange rule drawing across; box-office email letters swap on hover. Motion grammar: rise-from-mask, rule-draw, stamp-land.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
