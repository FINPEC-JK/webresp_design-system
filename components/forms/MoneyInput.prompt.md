Masked numeric input for any **valor** or **percentual** field. Digits fill from the right, always respecting the decimal places (typing `1 8 4` → `R$1,84`), and the mask (`R$0,00` / `0,00%`) shows even when empty.

```jsx
<Field label="Valor (R$)" required>
  <MoneyInput mask="currency" onValueChange={setValor} />
</Field>

<Field label="Taxa (%)">
  <MoneyInput mask="percent" defaultValue={8.2} onValueChange={setTaxa} />
</Field>
```

Use `mask="currency"` for money and `mask="percent"` for rates. `onValueChange` gives you the parsed number; `defaultValue` seeds it. For read-only display of a monetary figure (KPIs, tables), don't use this input — render the value with the `R$` prefix directly (see `KpiCard` `prefix`).
