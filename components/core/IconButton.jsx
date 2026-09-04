import React from "react";

/** Chrome icon button — transparent, used in topbars and toolbars. */
export function IconButton({ className = "", children, ...rest }) {
  return (
    <button className={["fp-icon-btn", className].filter(Boolean).join(" ")} {...rest}>
      {children}
    </button>
  );
}
