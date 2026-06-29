
# Rebrand to **A Casa & Designer** — Cardápios que encantam

The current site is a heavily themed AI film-production studio. Almost every section uses film metaphors (festival laurels, film strip, "WANTED" posters, photo darkroom). For a menu design studio those metaphors are wrong, so this is a structural rebrand, not a text swap.

## New brand identity

- **Name:** A Casa & Designer
- **Tagline:** Cardápios que encantam, experiências que fidelizam
- **Language:** Portuguese (PT-BR) throughout
- **Positioning:** Studio that designs menus and dining experiences for restaurants, cafés, bars, hotels

## Design system (locked from your picks)

- **Palette — Noir & Gold:** `#0d0d0d` background, `#1a1a1a` surface, `#c9a84c` primary gold, `#f0d78c` warm gold highlight, off-white for text on dark
- **Typography:** Instrument Serif (headings, editorial weight) + Work Sans (body, UI). Installed via `@fontsource`.
- **Layout:** Full-width sections — stacked cinematic bands, each section breathes edge-to-edge
- **Feel:** Editorial, hospitality-luxe, restrained gold accents, generous whitespace, no neon, no purple/blue/emerald accents

## Section-by-section rebuild

```text
Hero            → A Casa & Designer / tagline / "Agendar conversa" CTA
                  Replace film reel video with a still/loop of an elegant
                  designed menu on a dark linen tabletop (gold light)
                  Nav (PT): Trabalhos · Processo · Serviços · Estúdio · Contato

Portfolio       → "Trabalhos selecionados" — featured menu redesign case
                  Replace YouTube embed with a single hero menu photo +
                  client name, segment, brief outcome

Awards          → REMOVE festival laurels. Replace with "Restaurantes que
                  confiam" — a quiet row of client logos / names in gold rule

About           → "Nosso processo" — 5 steps adapted to menu design:
                  01 Imersão · 02 Estratégia & Cardápio · 03 Direção de
                  arte · 04 Diagramação & Provas · 05 Entrega & Implantação
                  Replace film-strip animation with a vertical / horizontal
                  numbered timeline in gold

Services        → "O que desenhamos" — REMOVE darkroom clothesline.
                  Replace with a 3-col editorial grid:
                  · Cardápios impressos · Cardápios digitais (QR) ·
                  Carta de vinhos · Identidade de mesa · Sinalização do
                  salão · Treinamento de equipe

Team            → "Estúdio" — REMOVE "WANTED" posters. Replace with a
                  calm editorial team grid: 3-4 people, name, role,
                  short bio. Drop bounties/mustaches entirely.

Contact         → "Vamos conversar" — keep form structure, translate
                  to PT-BR, soften copy. Toast messages in PT-BR.

Footer          → A Casa & Designer · short PT-BR description · social
                  links (placeholders for IG/LinkedIn) · REMOVE AI-tools
                  list (Runway/Kling/etc.) · replace with "O que fazemos"
                  links · update address to placeholder PT-BR address
```

## Technical work

1. **Fonts:** `bun add @fontsource/instrument-serif @fontsource/work-sans`, import in `src/main.tsx`, register in `tailwind.config.ts` as `serif` (Instrument Serif) and `sans` (Work Sans). Remove the Bagel Fat One Google Fonts `@import` from `index.css` and the `<link>` in `index.html`.
2. **Tokens (`src/index.css`):** Replace `:root` with the Noir & Gold palette in HSL. Make dark the default (drop the light scheme — the brand is dark). Remove the `--accent-blue / -emerald / -purple` tokens and replace with `--gold` and `--gold-soft`. Add `--gradient-gold` and `--shadow-gold` for elegant highlights.
3. **Tailwind config:** swap font families, drop the blue/emerald/purple accent color entries, add `gold` and `gold-soft`.
4. **Component rewrites:** Hero, Portfolio, Awards, About, Services, Team, Contact, Footer — all rewritten to the new content, PT-BR copy, and the new design system. No `text-white`, `bg-black`, `bg-red-*` hardcoded classes; everything via tokens.
5. **Remove film-only assets:** `team-member-1..7.png` (wanted mugshots), `minimal-*` laurel PNGs, `storyboard-image.avif` — delete from `src/assets` and drop imports. Hero S3 video URL removed.
6. **New imagery:** generate 3-4 editorial-style menu photographs (premium quality, dark moody table-top, gold light) for hero, portfolio featured, and services tiles.
7. **`index.html`:** title → "A Casa & Designer — Cardápios que encantam", PT-BR meta description, `lang="pt-BR"`, drop Bagel font link, drop Lovable-template OG image.
8. **Memory cleanup:** the project memory still says brand = "Mojju, Birmingham AL" with Bagel Fat One and film themes. Overwrite the core memory and remove the now-obsolete memory files (Hero Video, Awards Styling, Team Theme, Production Process) so future turns don't re-apply film conventions.

## What stays

- Component file structure (`Hero`, `Portfolio`, `Awards`, `About`, `Services`, `Team`, `Contact`, `Footer`) — easier to keep the same skeleton and rewrite contents
- Contact form behavior (React form + toast) — only copy changes
- Mobile menu pattern in Hero
- Smooth-scroll anchors

## What I'll skip unless you ask

- New routes/pages (single landing page stays single landing page)
- Backend / form submission wiring (still uses the local toast simulation)
- CMS for case studies
- Real client logos / real team photos — I'll use elegant generated imagery and placeholder names you can swap

## Open questions before I build

1. **Imagery direction for Hero:** generated still photograph of a designed menu on a dark table with gold light, OR keep a subtle background video (e.g. slow pan over a menu / candlelit table)? I'll default to a still hero photo unless you prefer video.
2. **Team:** invent 3 placeholder designers with roles, or leave a single "Estúdio" intro block until you give me real names?
3. **Contact info:** placeholder email/phone/city in PT-BR, or do you have real ones to drop in now?

Reply with quick answers (or "use your judgment") and I'll execute the whole rebuild in one pass.
