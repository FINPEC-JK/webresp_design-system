import React from "react";

/** Pagination control. Controlled via `page` (1-based) + `onChange`. */
export function Pager({ page = 1, totalPages = 1, label = null, onChange, className = "" }) {
  const go = (p) => onChange && p >= 1 && p <= totalPages && p !== page && onChange(p);
  const pages = [];
  const push = (p) => pages.push(p);
  push(1);
  let lo = Math.max(2, page - 1), hi = Math.min(totalPages - 1, page + 1);
  if (lo > 2) pages.push("…");
  for (let p = lo; p <= hi; p++) push(p);
  if (hi < totalPages - 1) pages.push("…");
  if (totalPages > 1) push(totalPages);

  return (
    <div className={["fp-pager", className].filter(Boolean).join(" ")}>
      <span>{label || `Página ${page} de ${totalPages}`}</span>
      <div className="fp-pager-pages">
        <button className="fp-pg" onClick={() => go(page - 1)} disabled={page <= 1} aria-label="Anterior">‹</button>
        {pages.map((p, i) =>
          p === "…" ? (
            <span key={`g${i}`} className="fp-pg gap">…</span>
          ) : (
            <button key={p} className={["fp-pg", p === page ? "on" : ""].join(" ")} onClick={() => go(p)}>
              {p}
            </button>
          )
        )}
        <button className="fp-pg" onClick={() => go(page + 1)} disabled={page >= totalPages} aria-label="Próxima">›</button>
      </div>
    </div>
  );
}
