import React from "react";

const ToneMap = {
  primary: ["var(--primary-soft)", "var(--primary)"],
  accent: ["var(--accent-soft)", "var(--accent)"],
  info: ["var(--info-soft)", "var(--info)"],
  ok: ["var(--ok-soft)", "var(--ok)"],
  warn: ["var(--warn-soft)", "var(--warn)"],
  danger: ["var(--danger-soft)", "var(--danger)"],
  neutral: ["var(--neutral-soft)", "var(--neutral-ink)"],
};

/**
 * KPI stat card — label + optional icon, a large display-font value
 * with optional currency prefix and unit, and a footer trend. The
 * headline metric pattern across FINPEC dashboards.
 *
 * For monetary read-only values, pass prefix="R$" (rendered tight before
 * the value) and unit="bi" / "mi" (rendered with breathing room after):
 * → R$1,84 bi
 */
export function KpiCard({ label, value, prefix = null, unit = null, icon = null, tone = "primary", trend = null, foot = null, className = "" }) {
  const [bg, fg] = ToneMap[tone] || ToneMap.primary;
  return (
    <div className={["fp-kpi", "fp-fade-in", className].filter(Boolean).join(" ")}>
      <div className="fp-kpi-row">
        <span className="fp-kpi-label">{label}</span>
        {icon && (
          <span className="fp-kpi-ic" style={{ background: bg, color: fg }}>
            {icon}
          </span>
        )}
      </div>
      <div className="fp-kpi-value">
        {prefix && <span className="prefix">{prefix}</span>}
        {value}
        {unit && <span className="unit">{unit}</span>}
      </div>
      {(trend || foot) && (
        <div className="fp-kpi-foot">
          {trend && (
            <span className={`fp-trend ${trend.dir}`}>
              {trend.dir === "up" ? "▲" : trend.dir === "down" ? "▼" : ""} {trend.label}
            </span>
          )}
          {foot && <span>· {foot}</span>}
        </div>
      )}
    </div>
  );
}
