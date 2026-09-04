import React from "react";

/**
 * Application topbar — left menu/breadcrumb, right search + actions.
 * `crumbs` is an array of strings; the last renders as the current page.
 */
export function Topbar({ crumbs = [], search = true, searchPlaceholder = "Buscar…", actions = null, leading = null, className = "" }) {
  return (
    <header className={["fp-topbar", className].filter(Boolean).join(" ")}>
      {leading}
      <div className="fp-crumb">
        {crumbs.map((c, i) => (
          <React.Fragment key={i}>
            {i > 0 && <span className="sep">/</span>}
            <span className={i === crumbs.length - 1 ? "cur" : ""}>{c}</span>
          </React.Fragment>
        ))}
      </div>
      {search && (
        <div className="fp-topsearch">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="7" /><path d="m21 21-4.3-4.3" />
          </svg>
          <input placeholder={searchPlaceholder} />
          <span className="kbd">⌘K</span>
        </div>
      )}
      {actions && <div style={{ display: "flex", alignItems: "center", gap: 10, marginLeft: search ? 0 : "auto" }}>{actions}</div>}
    </header>
  );
}
