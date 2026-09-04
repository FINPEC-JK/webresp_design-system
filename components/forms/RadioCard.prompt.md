A radio option rendered as a bordered card with a title and description — use for mutually-exclusive choices that need explanation. Selected state tints with `accent-soft`.

```jsx
<RadioCard title="Analista" desc="Pode revisar e corrigir contagens." selected={role==='analista'} onSelect={() => setRole('analista')} />
<RadioCard title="Administrador" desc="Acesso total ao painel." selected={role==='admin'} onSelect={() => setRole('admin')} />
```
