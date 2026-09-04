The workhorse data grid — sticky uppercase headers, hover rows, hairline dividers. Column-driven so cells can render pills, money, IDs or row actions.

```jsx
<Card title="CPRFs ativas" count={1318} bodyless>
  <DataTable
    columns={[
      { key: "id", label: "CPRF", render: r => <span className="fp-cell-id">{r.id}</span> },
      { key: "produtor", label: "Produtor", render: r => <span className="fp-cell-strong">{r.produtor}</span> },
      { key: "valor", label: "Valor", num: true, render: r => <span className="fp-cell-money">{r.valor}</span> },
      { key: "status", label: "Status", render: r => <Pill tone={r.tone} dot>{r.status}</Pill> },
    ]}
    rows={rows}
  />
</Card>
```

Helper cell classes: `fp-cell-strong`, `fp-cell-money`, `fp-cell-id`, `fp-cell-sub`. Use `dense` for tighter rows; pair with `Pager`.
