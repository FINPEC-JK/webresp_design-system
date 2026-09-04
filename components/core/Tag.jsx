import React from "react";

/** Compact metadata tag with an outlined paper look. Optional leading icon. */
export function Tag({ icon = null, className = "", children, ...rest }) {
  return (
    <span className={["fp-tag", className].filter(Boolean).join(" ")} {...rest}>
      {icon}
      {children}
    </span>
  );
}
