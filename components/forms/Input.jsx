import React from "react";

/** Text input. Pass `as="textarea"` for a multiline field. */
export function Input({ as = "input", className = "", ...rest }) {
  const cls = ["fp-input", className].filter(Boolean).join(" ");
  if (as === "textarea") return <textarea className={cls} {...rest} />;
  return <input className={cls} {...rest} />;
}
