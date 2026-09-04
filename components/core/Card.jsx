import React from "react";

/**
 * Card surface. Compose with `title` (+ optional `count`, `actions`)
 * to render the bordered header, or pass only `children` for a bare
 * surface. `bodyless` skips the inner padding wrapper (e.g. for tables).
 */
export function Card({ title = null, count = null, actions = null, bodyless = false, className = "", children, ...rest }) {
  return (
    <div className={["fp-card", className].filter(Boolean).join(" ")} {...rest}>
      {(title || actions) && (
        <div className="fp-card-head">
          <div className="fp-card-title">
            {title}
            {count != null && <span className="fp-count-pill">{count}</span>}
          </div>
          {actions}
        </div>
      )}
      {bodyless ? children : <div className="fp-card-body">{children}</div>}
    </div>
  );
}
