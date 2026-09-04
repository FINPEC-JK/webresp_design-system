Primary call-to-action button for FINPEC interfaces — use `primary` for the single main action per view, `secondary`/`ghost` for supporting actions, `danger` for destructive ones.

```jsx
<Button variant="primary" icon={<PlusIcon />}>Nova CPRF</Button>
<Button variant="secondary">Exportar</Button>
<Button variant="ghost" size="sm">Cancelar</Button>
```

Variants: `primary` (burnt orange), `secondary` (outlined paper), `ghost` (text only), `danger` (red). Sizes: `sm` / `md` / `lg`. Pass `icon` to lead with an inline SVG; omit `children` for a square icon-only button. `block` stretches full width.
