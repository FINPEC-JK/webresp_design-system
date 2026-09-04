The standard content container — white surface, hairline border, soft shadow, optional bordered header with title / count / actions.

```jsx
<Card title="Missões processadas" count={16} actions={<Button size="sm" variant="secondary">Ver todas</Button>}>
  …body…
</Card>

<Card title="Fila de revisão" bodyless>
  <DataTable …/>
</Card>
```

Use `bodyless` when the child (a table) manages its own padding.
