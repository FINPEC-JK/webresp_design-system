import React from "react";

/**
 * Fullscreen image lightbox — wraps ImageViewer with a dark scrim,
 * title/subtitle header, and prev/next navigation across a set.
 * Closes on scrim click, the close button, or Escape.
 */
export function Lightbox({ src, title = null, sub = null, boxes = [], badge = null, badgeTone = "info", onClose, onPrev = null, onNext = null }) {
  const ImageViewer = (typeof window !== "undefined" && window.FINPECDesignSystem_ccaa11 && window.FINPECDesignSystem_ccaa11.ImageViewer) || (() => null);
  React.useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose && onClose();
      if (e.key === "ArrowLeft") onPrev && onPrev();
      if (e.key === "ArrowRight") onNext && onNext();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose, onPrev, onNext]);

  return (
    <div className="fp-lightbox" onClick={onClose}>
      <div className="fp-lightbox-head" onClick={(e) => e.stopPropagation()}>
        <div className="fp-lightbox-title">
          {title}
          {sub && <span className="sub">{sub}</span>}
        </div>
        <button className="fp-viewer-close" style={{ position: "static" }} onClick={onClose} aria-label="Fechar">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M18 6 6 18M6 6l12 12" /></svg>
        </button>
      </div>
      <div className="fp-lightbox-body" onClick={(e) => e.stopPropagation()} style={{ position: "relative" }}>
        {onPrev && (
          <button className="fp-lightbox-nav prev" onClick={onPrev} aria-label="Anterior">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
          </button>
        )}
        <ImageViewer src={src} boxes={boxes} badge={badge} badgeTone={badgeTone} height="100%" className="fp-lightbox-viewer" />
        {onNext && (
          <button className="fp-lightbox-nav next" onClick={onNext} aria-label="Próxima">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
          </button>
        )}
      </div>
    </div>
  );
}
