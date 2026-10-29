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


## Footer (all variants)
Order, top → bottom: **light/dark toggle** (left) + **date · time** (right) → **avatar with initials**, name, profile, **Sair** (logout icon, right) → **release code** (mono, e.g. `0.2.0022`).

```jsx
<Sidebar groups={groups} activeId={id} onNavigate={setId}
  user={{ name: "João Kraemer", role: "Master", initials: "JK" }}
  theme={theme} onToggleTheme={() => setTheme(t => t === "dark" ? "light" : "dark")}
  onLogout={logout} release="0.2.0022" />
```

- Themes are **only "light" and "dark"** — never offer a "Sistema/System" option.
- Release shows the version only; don't append ticket/RE codes.
- `showClock={false}` hides date/time. Collapsed mode stacks the icon buttons and hides text.

## Settings & sub-menus
- **All settings** (cadastros, criação de acessos, perfis/permissões, parâmetros, integrações…) live as **sub-items inside a sidebar item** (e.g. "Configurações") — never in the footer.
- Any item that groups several sub-items is **expandable/collapsible**: pass `children`. Click on the parent toggles (chevron rotates); it auto-expands when it contains `activeId`. Nesting is allowed (e.g. Cadastros → Clientes, Filiais).

```jsx
{ label: "Administração", items: [
  { id: "config", label: "Configurações", icon: <Gear/>, children: [
    { id: "cad", label: "Cadastros", children: [{ id: "cad-cli", label: "Clientes" }, { id: "cad-fil", label: "Filiais" }] },
    { id: "acessos", label: "Criação de acessos" },
    { id: "perfis", label: "Perfis e permissões" },
  ]},
]}
```
