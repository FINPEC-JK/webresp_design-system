import React from "react";

/** Inline toast / notification chip on dark ink. Use `tone` for the icon color. */
export function Toast({ tone = "default", icon = null, className = "", children, ...rest }) {
  const cls = ["fp-toast", tone !== "default" ? tone : "", className].filter(Boolean).join(" ");
  return (
    <div className={cls} role="status" {...rest}>
      {icon && <span className="ic">{icon}</span>}
      {children}
    </div>
  );
}
