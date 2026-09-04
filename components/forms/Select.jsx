import React from "react";

/** Native select styled with the FINPEC chevron. Pass `<option>`s as children. */
export function Select({ className = "", children, ...rest }) {
  return (
    <select className={["fp-select", className].filter(Boolean).join(" ")} {...rest}>
      {children}
    </select>
  );
}
