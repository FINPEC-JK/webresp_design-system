import React from "react";

const DEFAULT_NOTES = [
  { title: "Correções de validação", items: [] },
  { title: "Evolução da plataforma", items: [] },
  { title: "Requisitos funcionais", items: [] },
  { title: "Requisitos não funcionais", items: [] },
];

function MsLogo() {
  const sq = (bg) => <span style={{ width: 12, height: 12, background: bg, display: "block" }} />;
  return (
    <span aria-hidden="true" style={{ display: "grid", gridTemplateColumns: "12px 12px", gap: 2 }}>
      {sq("#F25022")}{sq("#7FBA00")}{sq("#00A4EF")}{sq("#FFB900")}
    </span>
  );
}

function Chevron({ open }) {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d={open ? "m15 6-6 6 6 6" : "m9 6 6 6-6 6"} /></svg>;
}

/**
 * Standard FINPEC login screen (all systems): dark left panel with brand
 * lockup, title, description and the access block (SSO, user+password or
 * both) + full-bleed product image on the right with an expandable vertical
 * "Release notes" tab.
 */
export function LoginScreen({
  logoSrc = "",
  systemName = "",
  systemTagline = "",
  title = "",
  description = "",
  heading = "Acesse sua conta",
  subheading = null,
  methods = "sso",
  ssoLabel = "Entrar com Microsoft",
  onSso,
  onSubmit,
  forgotLabel = "Esqueci a senha",
  onForgot,
  footnote = null,
  imageSrc = "",
  release = null,
  releaseNotes = DEFAULT_NOTES,
  defaultReleaseOpen = false,
  className = "",
}) {
  const [open, setOpen] = React.useState(defaultReleaseOpen);
  const [user, setUser] = React.useState("");
  const [pass, setPass] = React.useState("");
  const showSso = methods === "sso" || methods === "both";
  const showPwd = methods === "password" || methods === "both";
  const sub = subheading != null ? subheading : (methods === "sso"
    ? "Use sua conta corporativa Microsoft para acessar a plataforma."
    : methods === "password" ? "Informe seu usuário e senha para acessar a plataforma."
    : "Use sua conta corporativa Microsoft ou seu usuário e senha.");
  const note = footnote != null ? footnote : (methods === "sso" ? "O reset de senha é feito pelo botão acima" : null);

  const inputS = { width: "100%", boxSizing: "border-box", height: 48, padding: "0 14px", background: "#1A1917", border: "1px solid #34322D", borderRadius: 6, color: "#F2EFE9", font: "400 15px/1 var(--font-ui)", outline: "none" };
  const labelS = { display: "block", font: "500 13px/1 var(--font-ui)", color: "#BDB8AE", marginBottom: 8 };
  const bg = imageSrc ? "#3a3128 url(\"" + imageSrc + "\") center/cover no-repeat" : "#3a3128";

  return (
    <div className={className} style={{ display: "grid", gridTemplateColumns: "500px minmax(0,1fr)", height: "100%", minHeight: 640, background: "#0F0F0E" }}>
      <div style={{ background: "#0F0F0E", color: "#fff", padding: "112px 40px 48px", display: "flex", flexDirection: "column", overflowY: "auto", boxSizing: "border-box" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 22 }}>
          {logoSrc ? <img src={logoSrc} alt="FINPEC" style={{ width: 104, height: "auto", flex: "none" }} /> : <span style={{ font: "var(--fw-bold) 20px/1 var(--font-display)", letterSpacing: "var(--ls-brand)" }}>FINPEC</span>}
          {(systemName || systemTagline) && (
            <div style={{ minWidth: 0 }}>
              {systemName && <div style={{ font: "500 26px/1.1 var(--font-display)", color: "#fff" }}>{systemName}</div>}
              {systemTagline && <div style={{ font: "400 13px/1.3 var(--font-ui)", color: "#C9C5BD", textTransform: "uppercase", marginTop: 12 }}>{systemTagline}</div>}
            </div>
          )}
        </div>
        {title && <h1 style={{ font: "400 38px/1.2 var(--font-display)", letterSpacing: "-0.01em", color: "#fff", margin: "56px 0 0", textWrap: "pretty" }}>{title}</h1>}
        {description && <p style={{ font: "400 16px/1.5 var(--font-ui)", color: "#C9C5BD", margin: "52px 0 0", textWrap: "pretty" }}>{description}</p>}
        <div style={{ marginTop: "auto", paddingTop: 64 }}>
          <h2 style={{ font: "400 26px/1.2 var(--font-display)", color: "#fff", margin: 0 }}>{heading}</h2>
          <p style={{ font: "400 13px/1.45 var(--font-ui)", color: "#C9C5BD", margin: "14px 0 26px" }}>{sub}</p>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {showSso && (
              <button type="button" onClick={onSso} style={{ height: 68, width: "100%", display: "flex", alignItems: "center", justifyContent: "center", gap: 12, background: "#fff", color: "#1B1A17", border: "1px solid #D9D6CF", borderRadius: 4, font: "500 15px/1 var(--font-ui)", cursor: "pointer" }}>
                <MsLogo />{ssoLabel}
              </button>
            )}
            {methods === "both" && (
              <div style={{ display: "flex", alignItems: "center", gap: 12, color: "#8C877D", font: "500 12px/1 var(--font-ui)", textTransform: "uppercase", letterSpacing: ".08em" }}>
                <span style={{ flex: 1, height: 1, background: "#2E2C28" }} />ou<span style={{ flex: 1, height: 1, background: "#2E2C28" }} />
              </div>
            )}
            {showPwd && (
              <form onSubmit={(e) => { e.preventDefault(); if (onSubmit) onSubmit({ user: user, password: pass }); }} style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                <label><span style={labelS}>Usuário</span><input style={inputS} value={user} onChange={(e) => setUser(e.target.value)} autoComplete="username" /></label>
                <label><span style={labelS}>Senha</span><input style={inputS} type="password" value={pass} onChange={(e) => setPass(e.target.value)} autoComplete="current-password" /></label>
                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                  <a href="#" onClick={(e) => { e.preventDefault(); if (onForgot) onForgot(); }} style={{ color: "#9DB8EC", font: "500 13px/1 var(--font-ui)", textDecoration: "none" }}>{forgotLabel}</a>
                </div>
                <button type="submit" style={{ height: 52, width: "100%", background: "var(--primary)", color: "#fff", border: 0, borderRadius: 4, font: "600 15px/1 var(--font-ui)", cursor: "pointer" }}>Entrar</button>
              </form>
            )}
          </div>
          {note && <p style={{ font: "400 12px/1.4 var(--font-ui)", color: "#C9C5BD", margin: "72px 0 0" }}>{note}</p>}
        </div>
      </div>
      <div style={{ position: "relative", overflow: "hidden", background: bg }}>
        <div style={{ position: "absolute", left: 0, top: "25%", display: "flex", alignItems: "flex-start" }}>
          {open && (
            <div style={{ width: 400, height: 400, boxSizing: "border-box", background: "#fff", borderRadius: "0 0 12px 0", padding: "24px 22px", color: "#1B1A17", overflowY: "auto" }}>
              <div style={{ font: "400 17px/1.2 var(--font-ui)", marginBottom: 14 }}>Release notes{release ? " — Build " + release : ""}</div>
              {releaseNotes.map((s, i) => (
                <details key={i} style={{ borderLeft: "2px solid #E6E8EE", padding: "4px 8px", font: "400 14px/1.5 var(--font-ui)" }}>
                  <summary style={{ cursor: "pointer" }}>{s.title}</summary>
                  {s.items && s.items.length > 0 && <ul style={{ margin: "6px 0 4px", paddingLeft: 20, color: "#4A4740" }}>{s.items.map((it, j) => <li key={j}>{it}</li>)}</ul>}
                </details>
              ))}
            </div>
          )}
          <button type="button" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Release notes"
            style={{ width: 40, height: 400, flex: "0 0 auto", display: "flex", flexDirection: "column", alignItems: "center", gap: 14, padding: "74px 0 0", background: "#fff", border: open ? 0 : "2px solid var(--primary)", borderLeft: 0, borderRadius: "0 10px 10px 0", color: "var(--primary)", cursor: "pointer", boxSizing: "border-box" }}>
            <Chevron open={open} />
            <span style={{ writingMode: "vertical-rl", transform: "rotate(180deg)", font: "400 17px/1 var(--font-ui)", whiteSpace: "nowrap" }}>
              {release ? release + " " : ""}Release notes
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
