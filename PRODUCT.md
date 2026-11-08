# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

React + Vite (user-specified). Deployed to GitHub Pages via GitHub Actions from a `<username>.github.io` repo, served at the site root (`base: '/'`).

## Users

- Internship recruiters skimming many portfolios quickly: they need name, year, stack, and a way to reach Daksh within seconds.
- Engineers / hiring leads who dig deeper: they look for signs of real building, code, and curiosity.
- Mixed audience; both read the same page.

## Product Purpose

Personal portfolio for Daksh Kalra, a Computer Science undergrad (class of 2030), whose job is to land software engineering internships. Success = a visitor remembers him and clicks through to email, GitHub, LinkedIn, or the resume.

## Positioning

Early-career and honest about it: shows momentum (what he knows, what he is learning, what is next) rather than padding. The site itself is the first shipped project.

## Capabilities and Constraints

- Sections: hero, about, projects, skills, timeline (education + milestones), contact, footer.
- Content lives in editable JSON under `src/data/` (`projects.json`, plus profile and timeline data) so Daksh can extend it without touching components.
- Projects section is hidden while `projects.json` is empty; adding the first entry makes it appear.
- Light and dark mode: follows system preference with a manual toggle.
- Heavy motion is wanted, tied to content, with full `prefers-reduced-motion` support.

## Evidence on Hand

- Name: Daksh Kalra. Email: daksh.kalra777@gmail.com.
- Skills: Python, Java, JavaScript, React, HTML/CSS, Firebase, Next.js.
- **Absent, must not be fabricated:** projects, university name, GitHub username, LinkedIn URL, resume PDF, timeline specifics. These ship as clearly marked placeholders in the data files.

## Product Principles

1. Honest over impressive: never invent projects, employers, or achievements.
2. Skimmable in ten seconds, rewarding in two minutes.
3. Easy to grow: every content change is a JSON edit.
4. The craft of the site is itself the proof of skill.

## Accessibility & Inclusion

WCAG 2.x AA contrast in both themes; full keyboard navigation with visible focus; all motion disabled under `prefers-reduced-motion`.
