# Elimu Njia — TCU Admission Explorer

A real project for a student engineering team: turn a 371-page PDF admission guidebook
into a service that answers one question well — **"with my A-Level results, where can I
study?"**

The data is already extracted and verified. What does not exist yet is the software.
That is what you are building.

---

## Why this project is worth building

Every year around 128,000 bachelor's places open across 93 Tanzanian institutions, and
the only official source is a PDF that almost nobody reads end to end. Students pick
programmes from rumour and from what a friend's cousin did. A search box and an
eligibility check is not a hard product, but it is a genuinely useful one, and it has
every ingredient a training project needs: real messy data, a non-trivial algorithm, a
shared API contract, and three clients that must agree with each other.

You are not building a demo. Build it as if people will use it in July.

---

## The team

Three tracks working in parallel against one contract.

| Track | Stack | Owns |
|---|---|---|
| **Backend** | Django 5 + DRF, PostgreSQL, drf-spectacular (Swagger) | Data model, importer, API, eligibility engine |
| **Frontend** | React 19, TanStack Query + Router + Table, shadcn/ui, lucide-react | Web app |
| **Mobile** | React Native (Expo), TanStack Query | Android/iOS app |

Suggested sizing is 2–3 students per track over 8 weeks. If your team is smaller or the
timeline shorter, cut scope from the **Stretch** sections in each task list first, never
from Milestone 1–3.

### The one rule that makes parallel work possible

**The eligibility algorithm lives in the backend and nowhere else.**

It is tempting for the web and mobile clients to each compute points locally — it is only
about thirty lines. Do not. The moment two clients implement it, they drift, and a student
gets told they qualify for medicine on their phone and not on the web. The rule the whole
team follows: *clients render, the server decides.*

The one exception is the running points total in the results-entry form, which updates as
the user types and is cosmetic. Everything that affects which programmes are shown comes
from `POST /api/v1/eligibility/check/`.

---

## Repository layout

Three repos, or one monorepo with three folders — your call, but decide in week 1.

```
tcu-admissions/
├── backend/          Django project, seed importer, tests
├── web/              React 19 + Vite
├── mobile/           Expo React Native
└── docs/
    ├── API_CONTRACT.md      the shared contract — read this first
    ├── TASKS_BACKEND.md
    ├── TASKS_FRONTEND.md
    ├── TASKS_MOBILE.md
    └── seed_data.json       verified guidebook data, 980 programmes
```

---

## The data you are given

`docs/seed_data.json` — extracted from the official guidebook and cross-checked. It holds:

| Collection | Count | Notes |
|---|---|---|
| `institutions` | 93 | name, abbreviation, region, type, ownership, slug |
| `programmes` | 980 | name, code, requirements text, min points, capacity, duration, field |
| `subjects` | 27 | canonical A-Level subject list |
| `grade_conditions` | 176 | per-subject minimum grades, e.g. "at least C in Chemistry" |
| `grading_scales` | 3 | NECTA point values by exam year |

Total capacity across all programmes: 128,528 places.

### What is trustworthy and what is not

The extraction was validated by checking that programme codes share a prefix within each
institution — a stray code exposes a misfiled programme. The final data has zero
mismatched prefixes across all 93 institutions, and the institution list joins 1:1 against
the guidebook's own Table 3. Treat the data as sound.

Three caveats you must handle in code rather than "fix" in the data:

1. **Two rows carry typos from the source itself** — one programme prints a duration of
   100 years, another 25. They are flagged in `data_note`. Surface the note; do not
   silently correct the guidebook.
2. **40 programmes have no numeric duration** (`"3-6"` for Open University, `"4 or 5"`,
   or blank). `duration_years` is null for these; `duration_text` always has the printed
   value. Never render "null years".
3. **31 programmes have no parsed subject list.** Their requirements are phrased in a way
   no parser should be trusted to interpret. These are not failures — they are a real
   category, and the API returns them as `REVIEW_WORDING` so a human reads the text.

More generally: **every programme must be able to show its full official requirement text
and guidebook page number.** The eligibility result is a guide that narrows 980 options to
a shortlist; the printed wording is what decides. Any screen that shows a verdict without
a route to the source text is not done.

---

## Milestones

Each milestone ends with a demo to the whole team. Working software only — no slides.

**Milestone 1 — Walking skeleton (week 1–2)**
Backend serves `GET /api/v1/programmes/` from Postgres with real seeded data. Web renders
the list. Mobile renders the list. Nothing is pretty, nothing is filtered, but data flows
end to end on all three clients. *This is the most important milestone; do not let it
slip.*

**Milestone 2 — Browse and search (week 3–4)**
Server-side filtering, search, pagination, ordering. Institution directory. Programme
detail with full requirement text. Swagger published and accurate.

**Milestone 3 — Eligibility (week 5–6)**
The `eligibility/check/` endpoint with the full algorithm including grade conditions.
Results-entry form on web and mobile. The four result buckets. This is the heart of the
product.

**Milestone 4 — Make it real (week 7)**
Offline caching on mobile. Loading and empty states everywhere. Accessibility pass on web.
Guide screen with dates and rules. Error handling that explains what to do.

**Milestone 5 — Ship (week 8)**
Deployed backend, deployed web app, mobile build installable on a real phone. README that
a stranger can follow. Handover demo.

---

## Definition of done

A ticket is done when all of these are true. This is not negotiable per-track.

- It works against the real 980-programme dataset, not fixtures of three rows
- Loading, empty, and error states exist and say something useful
- It works on a 360px-wide screen (web) or a small Android device (mobile)
- Tests cover the logic, not the framework
- No secrets in the repo
- Someone else on your track has reviewed the PR
- The API contract was not changed unilaterally

---

## Working agreements

**Branching.** `main` always deploys. Feature branches, PRs, one reviewer. No direct
pushes to main after week 1.

**Contract changes.** If a track needs the API to change, open an issue tagged
`contract`, get agreement from the other two tracks, then update `API_CONTRACT.md` in the
same PR as the implementation. A contract change that lands without the doc update gets
reverted.

**Unblocking.** Frontend and mobile must not wait for backend. Mock the contract from day
one — MSW on web, the same handlers on mobile. If the backend is late, the clients should
still be demoable. This is the point of writing the contract first.

**Standups.** Fifteen minutes, three questions: what shipped, what is next, what is
blocking. Blocked more than a day is an escalation, not a personal failing.

**Ask for help early.** The measure of a good junior engineer is not solving everything
alone, it is being unblocked fast and not repeating the same block twice.

---

## What each track should learn

These are the actual learning objectives; the tickets are just the vehicle.

**Backend** — modelling real data with real edge cases, keeping business logic out of
views, query performance under `select_related`/`prefetch_related`, honest API design,
generated documentation, testing an algorithm rather than a framework.

**Frontend** — server state versus client state (TanStack Query is not Redux), URL as the
source of truth for filters, composing an accessible component library instead of styling
divs, rendering long lists without jank.

**Mobile** — the same API on a device with worse network and less screen, offline-first
caching, platform navigation patterns, and shipping a build to a physical phone.

**Everyone** — reading someone else's contract, disagreeing productively in a PR, and
saying "I don't know yet" out loud.

---

## Source

Bachelor's Degree Admission Guidebook for the 2026/2027 Admission Cycle (For Holders of
Secondary School Qualifications), Tanzania Commission for Universities, July 2026.
ISBN 978-9976-9353-1-4.

The guidebook is the authority. Where this project and the guidebook disagree, the
guidebook wins, and that is a bug to file.