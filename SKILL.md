---
name: finpec-design
description: Use this skill to generate well-branded interfaces and assets for FINPEC, either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping FINPEC's agribusiness-credit and computer-vision products (Painel do Investidor and FOXEN-AI).
user-invocable: true
---

# FINPEC Design System — Skill

FINPEC is a Brazilian **agribusiness-credit fintech** (CPRFs, B3, indicadores do agro) with two reference products: the **Painel do Investidor/Admin** (burnt-orange "papel & tinta" language) and **FOXEN-AI** (computer-vision cattle counting; mono-heavy, dark-capable). Designs are **sober, clean, objective**, built for dense data and complex components.

## Start here

1. Read `readme.md` — the full design guide: company context, content fundamentals, visual foundations, iconography, and the file index. It is the source of truth.
2. Skim the foundation cards in `guidelines/` and the components in `components/` (core, forms, data, feedback, navigation).
3. Look at the two UI kits for real composition:
   - `ui_kits/painel/index.html` — Painel do Investidor (login → dashboard → CPRFs → nova emissão).
   - `ui_kits/foxe/index.html` — FOXEN-AI (Início, Contagens IA, Revisão, Usuários; light/dark + accent themes).
4. There is also a copy-ready template at `templates/painel-dashboard/`.

## How to build

- **Throwaway artifacts (slides, mocks, prototypes):** copy the assets you need out of `assets/`, link `styles.css`, and write static HTML/React. Load the component runtime with `<script src=".../_ds_bundle.js">` and read components from `window.FINPECDesignSystem_ccaa11` (e.g. `const { Button, Card, KpiCard, DataTable, Sidebar } = window.FINPECDesignSystem_ccaa11`). Mirror the patterns in the UI kits — don't reinvent the look.
- **Production code:** copy assets and lift the rules in `readme.md` to become an expert in the brand. Use the token CSS in `tokens/` as the variable contract.

## Non-negotiables

- **Português (BR)** copy; sober, direct, operational tone; sentence case for titles, UPPERCASE mono for section/nav labels; BR number/currency format; **never emoji**.
- **Single burnt-orange accent** (`--accent #DC4E25`) used sparingly; warm cream paper, warm-near-black chrome, warm (never grey) shadows.
- **Three typefaces:** Schibsted Grotesk (display/numbers), Hanken Grotesk (UI), IBM Plex Mono (figures, IDs, codes).
- **Sober charts** — soft accent track, solid accent fill, no clutter.
- **Lucide-style** line icons (stroke ~1.9px) as inline SVG. No emoji, no hand-rolled icon art.

If the user invokes this skill without other guidance, ask what they want to build, ask a few focused questions (product/surface, audience, fidelity, variations), then act as an expert FINPEC designer who outputs HTML artifacts **or** production code, depending on the need.
