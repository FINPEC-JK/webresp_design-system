import React from "react";

/**
 * Application sidebar — dark warm-near-black chrome with brand lockup,
 * grouped nav, and a user footer. `groups` is [{ label, items:[{ id,
 * label, icon?, badge?, hot?, children? }] }]; items with `children` are
 * expandable/collapsible parents (e.g. "Configurações" → Cadastros, Acessos).
 */
export function Sidebar({
  brandWord = "FINPEC",
  logoSrc = "",
  groups = [],
  activeId = null,
  onNavigate,
  user = null,
  collapsed = false,
  onToggleCollapse,
  variant = "dark",
  theme = null,
  onToggleTheme,
  onLogout,
  showClock = true,
  release = null,
  className = "",
}) {
  const [now, setNow] = React.useState(() => new Date());
  React.useEffect(() => {
    if (!showClock) return;
    const t = setInterval(() => setNow(new Date()), 30000);
    return () => clearInterval(t);
  }, [showClock]);
  const months = ["jan.","fev.","mar.","abr.","mai.","jun.","jul.","ago.","set.","out.","nov.","dez."];
  const dateStr = now.getDate() + " de " + months[now.getMonth()] + " de " + now.getFullYear();
  const timeStr = String(now.getHours()).padStart(2, "0") + ":" + String(now.getMinutes()).padStart(2, "0");
  const isDark = theme === "dark";
  const ico = (d) => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" dangerouslySetInnerHTML={{ __html: d }} />;
  const sun = ico('<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/>');
  const moon = ico('<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>');
  const logout = ico('<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><path d="m16 17 5-5-5-5"/><path d="M21 12H9"/>');
  const hasFoot = user || onToggleTheme || showClock || release || onLogout;
  const containsActive = (it) => !!(it.children && it.children.some((c) => c.id === activeId || containsActive(c)));
  const [expanded, setExpanded] = React.useState(() => {
    const s = {};
    const walk = (list) => list.forEach((it) => { if (it.children) { if (it.defaultExpanded || containsActive(it)) s[it.id] = true; walk(it.children); } });
    groups.forEach((g) => walk(g.items || []));
    return s;
  });
  React.useEffect(() => {
    const add = {};
    const walk = (list) => list.forEach((it) => { if (it.children) { if (containsActive(it)) add[it.id] = true; walk(it.children); } });
    groups.forEach((g) => walk(g.items || []));
    if (Object.keys(add).length) setExpanded((s) => Object.assign({}, s, add));
  }, [activeId]);
  const chev = (open) => <svg className="ni-chev" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ transform: open ? "rotate(90deg)" : "none" }}><path d="m9 6 6 6-6 6" /></svg>;
  const renderItem = (it, depth) => {
    const hasKids = !!(it.children && it.children.length);
    const open = !!expanded[it.id];
    const tone = it.tone || (it.hot ? "hot" : "");
    const parentActive = hasKids && containsActive(it);
    const row = (
      <button
        key={it.id}
        className={["fp-nav-item", depth > 0 ? "sub" : "", it.id === activeId ? "active" : "", parentActive ? "has-active" : ""].filter(Boolean).join(" ")}
        style={depth > 1 ? { paddingLeft: 12 + 32 + (depth - 1) * 14 } : undefined}
        onClick={() => {
          if (hasKids) {
            if (collapsed && onToggleCollapse) { onToggleCollapse(); setExpanded((s) => Object.assign({}, s, { [it.id]: true })); }
            else setExpanded((s) => Object.assign({}, s, { [it.id]: !open }));
          } else if (onNavigate) onNavigate(it.id);
        }}
        aria-expanded={hasKids ? open : undefined}
        title={collapsed ? (typeof it.label === "string" ? it.label : undefined) : undefined}
      >
        {depth === 0 && it.icon && <span className="ni-icon">{it.icon}</span>}
        <span className="ni-label">{it.label}</span>
        {it.badge != null && <span className={["fp-nav-badge", tone].filter(Boolean).join(" ")}>{it.badge}</span>}
        {(it.badge != null || it.dot || it.hot || parentActive) && depth === 0 && (
          <span className={["fp-nav-cdot", tone || (parentActive ? "info" : "")].filter(Boolean).join(" ")} />
        )}
        {it.badge == null && (it.dot || it.hot) && <span className={["fp-nav-dot", tone].filter(Boolean).join(" ")} />}
        {hasKids && chev(open)}
      </button>
    );
    if (!hasKids) return row;
    return (
      <div className="fp-nav-tree" key={it.id}>
        {row}
        {open && !collapsed && <div className="fp-nav-sub">{it.children.map((c) => renderItem(c, depth + 1))}</div>}
      </div>
    );
  };
  return (
    <aside className={["fp-sidebar", collapsed ? "collapsed" : "", variant === "light" ? "light" : variant === "white" ? "white" : "", className].filter(Boolean).join(" ")}>
      <div className="fp-side-brand">
        <div className="fp-side-lockup">
          {logoSrc ? <img src={logoSrc} alt="" style={{ height: 30, width: "auto" }} /> : null}
          <span className="fp-brand-word">{brandWord}</span>
        </div>
        {onToggleCollapse && (
          <button
            className="fp-side-toggle"
            onClick={onToggleCollapse}
            aria-label={collapsed ? "Expandir menu" : "Recolher menu"}
            aria-expanded={!collapsed}
            title={collapsed ? "Expandir menu" : "Recolher menu"}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 6h18M3 12h18M3 18h18" />
            </svg>
          </button>
        )}
      </div>
      <nav className="fp-side-scroll">
        {groups.map((g, gi) => (
          <div className="fp-nav-group" key={gi}>
            {g.label && <div className="fp-nav-group-label">{g.label}</div>}
            {g.items.map((it) => renderItem(it, 0))}
          </div>
        ))}
      </nav>
      {hasFoot && (
        <div className="fp-side-foot">
          {(onToggleTheme || showClock) && (
            <div className="fp-sf-row">
              <div className="fp-sf-actions">
              {onToggleTheme && (
                <button className="fp-sf-btn" onClick={onToggleTheme}
                  aria-label={isDark ? "Mudar para modo claro" : "Mudar para modo escuro"}
                  title={isDark ? "Modo claro" : "Modo escuro"}>
                  {isDark ? moon : sun}
                </button>
              )}
              </div>
              {showClock && (
                <div className="fp-sf-clock" title={dateStr + " · " + timeStr}>
                  <span>{dateStr}</span><span className="fp-sf-time">{timeStr}</span>
                </div>
              )}
            </div>
          )}
          {user && (
            <div className="fp-side-user">
              <span className="fp-avatar fp-sf-avatar">{user.initials}</span>
              <div className="fp-su-meta" style={{ overflow: "hidden", flex: 1, minWidth: 0 }}>
                <div className="fp-su-name">{user.name}</div>
                <div className="fp-su-role">{user.role}</div>
              </div>
              {onLogout && (
                <button className="fp-sf-btn fp-sf-logout" onClick={onLogout} aria-label="Sair" title="Sair">{logout}</button>
              )}
            </div>
          )}
          {release && <div className="fp-sf-release">{release}</div>}
        </div>
      )}
    </aside>
  );
}
