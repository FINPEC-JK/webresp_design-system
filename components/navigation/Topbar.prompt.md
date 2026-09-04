The application topbar — breadcrumb on the left, global search (⌘K) and action buttons on the right. Sits at the top of the `.fp-main` column.

```jsx
<Topbar
  crumbs={["CPRFs", "Ativas"]}
  actions={<>
    <IconButton aria-label="Notificações"><BellIcon/></IconButton>
    <Button variant="primary" icon={<PlusIcon/>}>Nova CPRF</Button>
  </>}
/>
```

Set `search={false}` to drop the search field; use `leading` for a sidebar-collapse toggle.
