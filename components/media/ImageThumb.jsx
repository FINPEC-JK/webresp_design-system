import React from "react";

/**
 * Image thumbnail — fixed aspect-ratio crop with hover caption overlay,
 * a status pill in the corner, an optional zoom-in affordance, and a
 * loading skeleton shimmer. Click opens the parent's viewer/lightbox.
 */
export function ImageThumb({ src, alt = "", caption = null, sub = null, badge = null, badgeTone = "neutral", loading = false, onClick, className = "", style }) {
  return (
    <div className={["fp-img-thumb", loading ? "skeleton" : ""].filter(Boolean).join(" ") + (className ? " " + className : "")} onClick={onClick} style={style} role={onClick ? "button" : undefined}>
      {!loading && src && <img src={src} alt={alt} loading="lazy" />}
      {!loading && onClick && (
        <span className="zoom-hint">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="7" /><path d="m21 21-4.3-4.3" /><path d="M11 8v6M8 11h6" /></svg>
        </span>
      )}
      {badge && (
        <span className="badge-corner">
          <span className={`fp-pill fp-pill-${badgeTone}`}>{badge}</span>
        </span>
      )}
      {(caption || sub) && (
        <div className="overlay">
          <div className="cap">
            {caption}
            {sub && <span className="sub">{sub}</span>}
          </div>
        </div>
      )}
    </div>
  );
}

/** Responsive grid of ImageThumb cards — auto-fills, min 150px per cell. */
export function ImageThumbGrid({ children, className = "" }) {
  return <div className={["fp-thumb-grid", className].filter(Boolean).join(" ")}>{children}</div>;
}
