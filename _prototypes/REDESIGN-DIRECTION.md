# StackMinds Redesign — Direction & Decisions

_Last updated: 2026-07-11. This is our single source of truth for the redesign. Resume by opening the prototypes and reading this file._

---

## 1. The repositioning (the big shift)
Moving StackMinds from a **generic "we build websites" shop** → to a **full-service digital growth studio**: _"We help businesses grow online."_ A website is step one of a growth system, not the product itself.

- **Target clients:** local SMBs / service businesses, startups/SaaS, D2C / ecommerce brands.
- **Positioning flavor:** full-service growth partner, **founder-led** (direct with the maker, no agency layers).
- **Reality check:** mostly web-proven today, **expanding** into marketing. We position the vision honestly — we don't fake a marketing track record.

## 2. Core framework & messaging
- **Tagline / service architecture: `Build · Market · Grow`**
  - **Build** — web design & dev, WordPress, ecommerce, UI/UX, branding
  - **Market** — SEO, Google Ads, Meta Ads, social media, content
  - **Grow** — CRO, analytics, funnels, email, ongoing support
- **Why-us pillars:** one team for the whole journey · built for results (leads/sales) · premium craft without big-agency overhead.
- **Homepage narrative:** outcome promise → "a website is where growth starts, not ends" → Build/Market/Grow → selected work → studio/founder → process → contact.

## 3. HONESTY RULES (important — do not break)
- ❌ No fake testimonials, fake client logos, or invented stats (e.g. "120+ projects", "3.4× conversion lift").
- ❌ Do **not** literally claim "20 years experience." We convey senior craft through **design**, not unverifiable claims.
- ✅ Concept/spec builds must be clearly labeled **"Concept."**
- ✅ Credibility comes from: the quality of the work itself, founder-led story, process, a guarantee, and a **founding-client offer**.

## 4. Portfolio — real vs concept
**Real builds (live, honest proof):**
- **TheNationBrief** — thenationbrief.com — custom defence/geopolitics news platform, updated daily (his own venture).
- **StackMinds Research** — stackmindsresearch.com — research-support studio, WhatsApp lead-gen (his own venture).
- **Rudr Textile Solutions** — rudrtextilesolutions.com — real **client** (uncle's B2B business), WordPress/Elementor. Footer credits "StackMinds Web Solutions."
- **Shree Ganesh Dry Fruits** — his own ecommerce brand, **launching soon** (URL TBD).

**Concept projects (relabel from current fake "client" framing):**
- Atelier (furniture) · Aurora — Golden Hour (travel) · Aura Dental (dental).

## 5. Visual direction — ✅ FINAL: "Evergreen & Ivory" (v3)
Journey: v1 rejected ("too AI" — gradients/glow/emoji). v2 senior-craftsman layout approved. Warm-dark base rejected ("too brown"). Light editorial (paper + vermilion) good but stark. Explored soft + bold + dark-neon palette batches; user rejected electric/neon as "not readable/soothing". **LOCKED on the Evergreen palette (`home-v3-evergreen.html`).**

**FINAL PALETTE — Evergreen & Ivory:**
- `--bg` warm ivory `#f4f1e8` · `--bg2` sand `#ebe7db` · `--panel` `#fbf9f2`
- `--txt` deep charcoal-green `#1b2620` (soothing, high-readability — NOT pure black)
- `--muted` `#5f6b62` · `--muted2` `#949a8f`
- `--acc` calm pine green `#2f6b4f` · `--acc-dim` `#245840`
- `--deep` evergreen band `#16241d` + cream text `#e9e7db` + light-sage on-dark accent `#9fceb2`
- Hairlines `rgba(27,38,32,.15)`. **No gradients, no glow, no emoji, no neon.**
- Green = growth = on-brand. One deep-evergreen contact panel at the bottom for depth.

- **Type system:** `Bricolage Grotesque` (display) + `Instrument Serif` italics (accent words) + `JetBrains Mono` (labels/index numbers).
- **Editorial signals:** monospace micro-labels, `(00)–(05)` section indices, hairline rules, top status bar, capability marquee, subtle film grain, **custom cursor** (dot + trailing ring).
- **Work section = typographic index** (big-type hover rows), not cards.
- **3D:** restrained wireframe torus-knot in soft green lines + single pine-green point cluster. Motion = lively but tasteful (GSAP + Three.js).

## 6. Architecture — DECIDED: multi-page hybrid
Homepage = immersive single-scroll flagship (v2). Underneath, proper multi-page (like the OG React Router setup) for SEO + depth:
- `/` homepage (teases everything)
- `/work` index → `/work/[project]` case-study pages
- `/services` overview → `/services/[service]` individual pages (SEO/lead-gen workhorses)
- `/contact` dedicated page
- `/about` (optional) founder/studio story

## 7. Prototypes built (isolated, non-production)
In `_prototypes/` — standalone HTML, CDN Three.js+GSAP, zero connection to the live app:
- `home-v1.html` — first concept (rejected as "too AI"). Kept for reference.
- `home-v2.html` — **chosen direction.** Senior craftsman.

## 8. Live-site safety
- The real React app in `src/` and `index.html` is **untouched**. All redesign work stays in `_prototypes/` until we deliberately port it.
- Earlier this session we already: removed the Research Assistance section from the live app, added a branded 404 page + catch-all route. (Those were real code changes; the rest of the working tree is just CRLF line-ending noise vs GitHub.)

## 9. NEXT STEPS (tomorrow)
1. Pick a **deeper page to prototype next** in v2 style: project case-study (TheNationBrief) · service detail (SEO) · or full `/work` index. _(User to choose.)_
2. Confirm remaining opens: final **accent color**, keep/replace the **3D signature**, **Shree Ganesh** URL + type (store vs catalog), okay to use founder name **Ashutosh** / personal angle, lock **"Build · Market · Grow"** tagline.
3. Then: build out the rest of the pages as prototypes → once approved, **port the v2 system into the real React app** page by page.
