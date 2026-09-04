import React from "react";

/**
 * Selectable radio card — title + description with a radio dot. Use a
 * group of these for mutually-exclusive, explained choices.
 */
export function RadioCard({ title, desc = null, selected = false, onSelect, className = "", ...rest }) {
  return (
    <div
      className={["fp-radio-card", selected ? "sel" : "", className].filter(Boolean).join(" ")}
      onClick={onSelect}
      role="radio"
      aria-checked={selected}
      {...rest}
    >
      <span className="fp-radio-dot" />
      <div>
        <div className="fp-rc-title">{title}</div>
        {desc && <div className="fp-rc-desc">{desc}</div>}
      </div>
    </div>
  );
}
