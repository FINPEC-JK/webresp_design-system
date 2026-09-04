Soft tinted status chip — the standard way to show row/record state across FINPEC tables and cards.

```jsx
<Pill tone="ok" dot>Concluída</Pill>
<Pill tone="warn">needs_review</Pill>
<Pill tone="danger">Sem CDZ</Pill>
```

Tones map to the semantic palette: `ok` `warn` `danger` `info` `neutral` `accent`. `dot` adds a leading status dot in the current color.
