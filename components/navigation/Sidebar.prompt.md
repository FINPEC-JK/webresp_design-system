The FINPEC application sidebar — warm near-black chrome, brand lockup, grouped nav with count badges, and a user footer. The active row gets the burnt-orange edge bar.

```jsx
<Sidebar
  logoSrc="/assets/finpec-mark.png"
  activeId="visao-geral"
  onNavigate={setScreen}
  user={{ name: "João Kraemer", role: "Administrador", initials: "JK" }}
  groups={[
    { label: "Geral", items: [{ id: "visao-geral", label: "Visão Geral", icon: <HomeIcon/> }] },
    { label: "CPRFs", items: [
      { id: "ativas", label: "Ativas", icon: <FileIcon/>, badge: "1.318", tone: "info" },
      { id: "assinatura", label: "Pendentes", icon: <PenIcon/>, badge: "14", hot: true },
      { id: "boi", label: "Boi Gordo", icon: <CowIcon/>, dot: true, tone: "ok" },
    ]},
  ]}
/>
```

**Indicadores por item** — cada item aceita: `badge` (contador ou texto curto), `tone` (`"info"` azul · `"ok"` verde · `"hot"` atenção/laranja), `hot` (atalho para `tone:"hot"`), e `dot` (ponto de status quando não há contador). Ex.: `{ badge: "5", tone: "info" }` mostra a pílula "5"; `{ dot: true, tone: "hot" }` mostra um ponto pulsante de atenção. Pair com `<Topbar>` inside an `.fp-app` grid (`grid-template-columns: var(--sidebar-w) 1fr`). Icons are Lucide-style inline SVGs at ~20px.
