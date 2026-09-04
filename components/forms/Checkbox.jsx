import React from "react";

const Check = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

/** Checkbox with the FINPEC accent fill. Controlled via `checked` + `onChange`. */
export function Checkbox({ checked = false, onChange, className = "", children, ...rest }) {
  return (
    <label className={["fp-checkbox", checked ? "on" : "", className].filter(Boolean).join(" ")} {...rest}>
      <span className="box">{checked && <Check />}</span>
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        style={{ position: "absolute", opacity: 0, width: 0, height: 0 }}
      />
      {children}
    </label>
  );
}
