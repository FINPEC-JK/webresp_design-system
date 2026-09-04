import React from "react";

/**
 * Field wrapper — label (+ optional required mark and hint) above any
 * control. Compose with Input / Select / Textarea or custom controls.
 */
export function Field({ label, required = false, hint = null, htmlFor, className = "", children }) {
  return (
    <div className={["fp-field", className].filter(Boolean).join(" ")}>
      {label && (
        <label htmlFor={htmlFor}>
          {label}
          {required && <span className="req"> *</span>}
        </label>
      )}
      {children}
      {hint && <span className="hint">{hint}</span>}
    </div>
  );
}
