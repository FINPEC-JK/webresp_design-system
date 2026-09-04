The headline metric card for dashboards — a big display-font value with a tinted icon and a trend footer.

```jsx
<KpiCard label="Capital sob gestão" prefix="R$" value="1,84" unit="bi"
  icon={<WalletIcon/>} tone="primary"
  trend={{dir:"up", label:"+8,2%"}} foot="vs. mês anterior" />
```

For monetary read-only figures, pass `prefix="R$"` (rendered tight → `R$1,84`) and `unit="bi"`/`"mi"` (rendered with a gap → `1,84 bi`). `tone` tints the icon chip; `trend.dir` colors the trend green (up) or red (down). Lay four across in a `.kpi-grid`-style grid.
