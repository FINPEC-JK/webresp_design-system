import React from "react";

/**
 * Application sidebar — dark warm-near-black chrome with brand lockup,
 * grouped nav, and a user footer. `groups` is [{ label, items:[{ id,
 * label, icon?, badge?, hot? }] }]; the active row shows the accent bar.
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
  className = "",
}) {
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
            {g.items.map((it) => (
              <button
                key={it.id}
                className={["fp-nav-item", it.id === activeId ? "active" : ""].filter(Boolean).join(" ")}
                onClick={() => onNavigate && onNavigate(it.id)}
                title={collapsed ? (typeof it.label === "string" ? it.label : undefined) : undefined}
              >
                {it.icon && <span className="ni-icon">{it.icon}</span>}
                <span className="ni-label">{it.label}</span>
                {it.badge != null && (
                  <span className={["fp-nav-badge", it.tone || (it.hot ? "hot" : "")].filter(Boolean).join(" ")}>{it.badge}</span>
                )}
                {(it.badge != null || it.dot || it.hot) && (
                  <span className={["fp-nav-cdot", it.tone || (it.hot ? "hot" : "")].filter(Boolean).join(" ")} />
                )}
                {it.badge == null && (it.dot || it.hot) && (
                  <span className={["fp-nav-dot", it.tone || (it.hot ? "hot" : "")].filter(Boolean).join(" ")} />
                )}
              </button>
            ))}
          </div>
        ))}
      </nav>
      {user && (
        <div className="fp-side-foot">
          <div className="fp-side-user">
            <span className="fp-avatar" style={{ width: 34, height: 34, fontSize: 12 }}>{user.initials}</span>
            <div className="fp-su-meta" style={{ overflow: "hidden" }}>
              <div className="fp-su-name">{user.name}</div>
              <div className="fp-su-role">{user.role}</div>
            </div>
          </div>
        </div>
      )}
    </aside>
  );
}
