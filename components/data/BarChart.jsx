import React from "react";

/**
 * Sober bar chart. Pass `data` as [{ label, value }]; bars scale to the
 * max value. Deliberately flat — soft accent track, solid accent fill,
 * tooltip on hover via the native title.
 */
export function BarChart({ data = [], height = 120, className = "" }) {
  const max = Math.max(1, ...data.map((d) => d.value));
  return (
    <div className={["fp-bars", className].filter(Boolean).join(" ")} style={{ height }}>
      {data.map((d, i) => (
        <div key={i} className="fp-bar" style={{ height: "100%" }} title={`${d.label}: ${d.value}`}>
          <div className="fill" style={{ height: `${(d.value / max) * 100}%` }} />
        </div>
      ))}
    </div>
  );
}
