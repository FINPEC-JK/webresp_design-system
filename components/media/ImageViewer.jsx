import React from "react";

/**
 * Pan/zoom image viewer — wheel to zoom, drag to pan, toolbar with
 * +/- / reset / fit. Optional `boxes` overlay draws bounding boxes
 * (percent-based coords) for annotation/audit review, e.g. FOXE
 * cattle-count results.
 */
export function ImageViewer({ src, alt = "", boxes = [], badge = null, badgeTone = "info", height = 420, minZoom = 1, maxZoom = 6, onClose = null, className = "" }) {
  const stageRef = React.useRef(null);
  const [zoom, setZoom] = React.useState(1);
  const [pos, setPos] = React.useState({ x: 0, y: 0 });
  const drag = React.useRef(null);

  const clamp = (z) => Math.min(maxZoom, Math.max(minZoom, z));
  const zoomTo = (z) => setZoom(clamp(z));
  const reset = () => { setZoom(1); setPos({ x: 0, y: 0 }); };

  const onWheel = (e) => {
    e.preventDefault();
    const delta = -e.deltaY * 0.0016;
    zoomTo(zoom + zoom * delta);
  };
  const onPointerDown = (e) => {
    drag.current = { startX: e.clientX, startY: e.clientY, origX: pos.x, origY: pos.y };
    stageRef.current && stageRef.current.setPointerCapture(e.pointerId);
  };
  const onPointerMove = (e) => {
    if (!drag.current) return;
    setPos({ x: drag.current.origX + (e.clientX - drag.current.startX), y: drag.current.origY + (e.clientY - drag.current.startY) });
  };
  const onPointerUp = () => { drag.current = null; };

  return (
    <div className={["fp-viewer", className].filter(Boolean).join(" ")} style={{ height }}>
      {badge && <span className="fp-viewer-badge"><span className={`fp-pill fp-pill-${badgeTone}`}>{badge}</span></span>}
      {onClose && (
        <button className="fp-viewer-close" onClick={onClose} aria-label="Fechar">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M18 6 6 18M6 6l12 12" /></svg>
        </button>
      )}
      <div
        ref={stageRef}
        className={"fp-viewer-stage" + (drag.current ? " grabbing" : "")}
        onWheel={onWheel}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerLeave={onPointerUp}
      >
        <div className="fp-viewer-canvas" style={{ transform: `translate(-50%,-50%) translate(${pos.x}px,${pos.y}px) scale(${zoom})` }}>
          <img src={src} alt={alt} draggable={false} />
          {boxes.map((b, i) => (
            <div key={i} className="fp-viewer-box" style={{ left: b.x + "%", top: b.y + "%", width: b.w + "%", height: b.h + "%" }}>
              {b.label && <span className="tag">{b.label}</span>}
            </div>
          ))}
        </div>
      </div>
      <div className="fp-viewer-toolbar">
        <button onClick={() => zoomTo(zoom - 0.4)} aria-label="Diminuir zoom">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><circle cx="11" cy="11" r="7" /><path d="m21 21-4.3-4.3M8 11h6" /></svg>
        </button>
        <span className="pct">{Math.round(zoom * 100)}%</span>
        <button onClick={() => zoomTo(zoom + 0.4)} aria-label="Aumentar zoom">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><circle cx="11" cy="11" r="7" /><path d="m21 21-4.3-4.3M11 8v6M8 11h6" /></svg>
        </button>
        <span className="div" />
        <button onClick={reset} aria-label="Redefinir zoom">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12a9 9 0 1 0 2.6-6.3" /><path d="M3 4v5h5" /></svg>
        </button>
      </div>
    </div>
  );
}
