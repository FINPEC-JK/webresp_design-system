import React from "react";

/**
 * Status pill. Solid-soft tinted chip for state labels (status,
 * category, count). Set `dot` to show a leading status dot.
 */
export function Pill({ tone = "neutral", dot = false, className = "", children, ...rest }) {
  const cls = ["fp-pill", `fp-pill-${tone}`, className].filter(Boolean).join(" ");
  return (
    <span className={cls} {...rest}>
      {dot && <span className="dot" />}
      {children}
    </span>
  );
}
