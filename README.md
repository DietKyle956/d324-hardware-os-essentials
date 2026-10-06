# D324 — Hardware and Operating Systems Essentials

A self-contained study site for the WGU **D324 Objective Assessment**: 36
lessons across 8 topics, each with an instant-feedback quiz and a printable
cheat card. Built in the same Tufte-inspired style as the
[C949 study guides](https://dietkyle956.github.io/c949-study-guides/).

Live site: **https://dietkyle956.github.io/d324-hardware-os-essentials/**

## Layout

```
index.html              home page (topic list + how the site works)
resources.html          WGU provisions, communities, gaps
assets/
  styles.css            shared Tufte-inspired stylesheet (dark-mode aware)
  nav.js                injected sidebar + previous/next buttons
  quiz.js               instant-feedback quiz widget
<topic>/
  index.html            topic overview
  lessons/NNNN-*.html   the lessons (renumbered per topic)
  reference/*.html      one printable cheat card per lesson
```

The eight topics follow the assessment's own structure: Hardware, Operating
Systems, Virtual Environment, Networking, Non-functional Requirements, IDEs
and Text Editors, Customization, and Cloud Computing.

## Deploying

The site is static and served from the repo root on `main`. GitHub Pages is
enabled for this repository (Settings &rarr; Pages &rarr; deploy from branch
`main`, root). The `.nojekyll` file keeps Jekyll from touching the HTML.
Every push to `main` redeploys automatically.

## Working docs (not part of the site)

- [`MISSION.md`](./MISSION.md) — why we're studying this
- [`ROADMAP.md`](./ROADMAP.md) — the master lesson plan
- [`RESOURCES.md`](./RESOURCES.md) — trusted sources (rendered as `resources.html`)
- [`NOTES.md`](./NOTES.md) — working notes (gitignored)
- `d324_oa_topics_and_questions.md` — the coaching report (gitignored, private)
