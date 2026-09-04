import React from "react";

/** Empty / zero-data state — icon, title, message and optional action. */
export function EmptyState({ icon = null, title, message = null, action = null, className = "" }) {
  return (
    <div className={["fp-empty", className].filter(Boolean).join(" ")}>
      {icon && <span className="ic">{icon}</span>}
      {title && <div className="et">{title}</div>}
      {message && <div style={{ maxWidth: 360 }}>{message}</div>}
      {action}
    </div>
  );
}
