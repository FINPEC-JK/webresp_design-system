// FOXE UI kit — chrome + screens. Faithful recreation of the FOXE redesign,
// using its own theme-var system (FOXE has a distinct dark-capable, mono-heavy
// language separate from the Painel's burnt-orange).

const MONO = "'IBM Plex Mono',monospace";
const UI = "'Hanken Grotesk',sans-serif";

/* ---------------- Sidebar ---------------- */
function FoxeSidebar({ screen, onNav, theme, accent, onTheme, onAccent }) {
  const [prefs, setPrefs] = React.useState(false);
  const navBtn = (id, n, name) => {
    const active = screen === id;
    return (
      <button key={id} onClick={() => onNav(id)} style={{ display: "flex", alignItems: "center", gap: 11, padding: "9px 12px 9px 14px", borderRadius: 9, cursor: "pointer", border: "none", width: "100%", textAlign: "left", fontFamily: UI, fontSize: 13.5, fontWeight: active ? 600 : 500, color: active ? "var(--accent-ink)" : "var(--text-2)", background: active ? "var(--nav-active)" : "transparent", position: "relative" }}>
        {active && <span style={{ position: "absolute", left: 0, top: 7, bottom: 7, width: 3, borderRadius: 2, background: "var(--accent)" }} />}
        <span style={{ fontFamily: MONO, fontSize: 10, fontWeight: 600, color: active ? "var(--accent)" : "var(--muted)", minWidth: 16 }}>{n}</span>
        <span>{name}</span>
      </button>
    );
  };
  const accentList = [["azul", "#2860c6", "#6ba6e8"], ["verde", "#2f7d4f", "#5cc185"], ["ambar", "#c0791f", "#e3a44f"], ["terra", "#b35535", "#e0875f"], ["finpec", "#DC4E25", "#f0744d"]];
  const seg = (on) => ({ fontFamily: UI, fontWeight: 600, fontSize: 12, padding: "6px 11px", borderRadius: 7, border: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: 5, background: on ? "var(--card)" : "transparent", color: on ? "var(--text)" : "var(--muted)", boxShadow: on ? "0 1px 2px rgba(0,0,0,.14)" : "none" });

  return (
    <aside style={{ width: 252, flex: "none", background: "var(--card)", borderRight: "1px solid var(--border)", display: "flex", flexDirection: "column", height: "100vh", position: "sticky", top: 0 }}>
      <div style={{ padding: "20px 18px 16px", borderBottom: "1px solid var(--border-soft)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <img src="../../assets/finpec-mark.png" alt="" style={{ height: 30, width: "auto", flex: "none" }} />
          <div style={{ minWidth: 0 }}>
            <div style={{ fontWeight: 800, fontSize: 16, letterSpacing: ".02em", lineHeight: 1, color: "var(--text)" }}>FOXEN-AI</div>
            <div style={{ font: "500 9.5px/1.35 " + MONO, color: "var(--muted)", letterSpacing: ".04em", marginTop: 4, textTransform: "uppercase" }}>Visual Computacional para Contagem de Gado</div>
          </div>
        </div>
      </div>
      <div style={{ padding: "14px 12px", overflowY: "auto", flex: 1, display: "flex", flexDirection: "column", gap: 4 }}>
        {navBtn("inicio", "★", "Início")}
        <div style={{ padding: "12px 10px 6px" }}>
          <div style={{ font: "600 10px/1 " + MONO, letterSpacing: ".12em", color: "var(--muted)", marginBottom: 7 }}>CONTEXTO</div>
          <select style={{ width: "100%", border: "1px solid var(--border)", background: "var(--input)", borderRadius: 8, padding: "8px 10px", font: "600 12px/1 " + UI, color: "var(--text-2)", marginBottom: 7, cursor: "pointer" }}><option>Operação · Cara Preta</option></select>
          <select style={{ width: "100%", border: "1px solid var(--border)", background: "var(--input)", borderRadius: 8, padding: "8px 10px", font: "600 12px/1 " + UI, color: "var(--text-2)", cursor: "pointer" }}><option>Todas as fazendas</option></select>
        </div>
        <div style={{ font: "600 10px/1 " + MONO, letterSpacing: ".12em", color: "var(--muted)", padding: "10px 10px 6px" }}>DRONES</div>
        {FOXE_NAV.drones.map((d) => navBtn(d.id, d.n, d.name))}
        <div style={{ font: "600 10px/1 " + MONO, letterSpacing: ".12em", color: "var(--muted)", padding: "14px 10px 6px" }}>FOXEN-AI</div>
        {FOXE_NAV.foxe.map((d) => navBtn(d.id, d.n, d.name))}
      </div>
      <div style={{ borderTop: "1px solid var(--border-soft)", padding: "10px 12px", position: "relative" }}>
        {prefs && (
          <div style={{ background: "var(--card)", border: "1px solid var(--border)", borderRadius: 12, padding: 14, marginBottom: 8, boxShadow: "0 -6px 24px rgba(0,0,0,.10)" }}>
            <div style={{ font: "600 10px/1 " + MONO, letterSpacing: ".1em", textTransform: "uppercase", color: "var(--muted)", marginBottom: 9 }}>Aparência</div>
            <div style={{ display: "inline-flex", gap: 3, background: "var(--mute-tint)", border: "1px solid var(--border)", borderRadius: 9, padding: 3 }}>
              <button onClick={() => onTheme("light")} style={seg(theme !== "dark")}><span style={{ fontSize: 13 }}>☀</span>Claro</button>
              <button onClick={() => onTheme("dark")} style={seg(theme === "dark")}><span style={{ fontSize: 12 }}>☾</span>Escuro</button>
            </div>
            <div style={{ font: "600 10px/1 " + MONO, letterSpacing: ".1em", textTransform: "uppercase", color: "var(--muted)", margin: "14px 0 9px" }}>Cor da marca</div>
            <div style={{ display: "flex", alignItems: "center", gap: 9 }}>
              {accentList.map((p) => (
                <button key={p[0]} onClick={() => onAccent(p[0])} style={{ width: 19, height: 19, borderRadius: "50%", cursor: "pointer", background: theme === "dark" ? p[2] : p[1], border: accent === p[0] ? "2px solid var(--text)" : "2px solid var(--border)", padding: 0, flex: "none" }} />
              ))}
            </div>
          </div>
        )}
        <button onClick={() => setPrefs(!prefs)} style={{ display: "flex", alignItems: "center", gap: 10, width: "100%", background: prefs ? "var(--mute-tint)" : "transparent", border: "1px solid " + (prefs ? "var(--border)" : "transparent"), borderRadius: 10, padding: "7px 9px", cursor: "pointer" }}>
          <div style={{ width: 32, height: 32, borderRadius: "50%", background: "var(--accent)", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 700, flex: "none" }}>JK</div>
          <div style={{ minWidth: 0, flex: 1, textAlign: "left" }}>
            <div style={{ fontSize: 13, fontWeight: 600, color: "var(--text)" }}>Joao Kraemer</div>
            <div style={{ fontSize: 11, color: "var(--muted)" }}>Administrador</div>
          </div>
          <span style={{ fontSize: 14, color: "var(--muted)", flex: "none", transform: prefs ? "rotate(0deg)" : "rotate(180deg)" }}>⌃</span>
        </button>
      </div>
    </aside>
  );
}

/* ---------------- Topbar ---------------- */
function FoxeTopbar({ crumb, title, onNew }) {
  const btn = (bg, color, border) => ({ border: border || "none", background: bg, color, font: "600 13px/1 " + UI, padding: border ? "9px 15px" : "10px 17px", borderRadius: 8, cursor: "pointer", display: "flex", alignItems: "center", gap: 7 });
  return (
    <header style={{ height: 66, flex: "none", background: "var(--card)", borderBottom: "1px solid var(--border)", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 30px", position: "sticky", top: 0, zIndex: 5 }}>
      <div>
        <div style={{ font: "600 11px/1 " + MONO, letterSpacing: ".1em", textTransform: "uppercase", color: "var(--accent)" }}>{crumb}</div>
        <h1 style={{ margin: "6px 0 0", fontSize: 20, fontWeight: 700, letterSpacing: "-.01em", color: "var(--text)" }}>{title}</h1>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <button style={btn("var(--card)", "var(--text-2)", "1px solid var(--border)")}>Atualizar</button>
        <button onClick={onNew} style={btn("var(--accent)", "#fff")}><span style={{ fontSize: 15, lineHeight: 1 }}>+</span>Nova captação</button>
      </div>
    </header>
  );
}

/* ---------------- Card shell ---------------- */
function FCard({ eyebrow, eyebrowColor, title, children, pad, right }) {
  return (
    <div style={{ background: "var(--card)", border: "1px solid var(--border)", borderRadius: 14, overflow: "hidden" }}>
      {(eyebrow || title) && (
        <div style={{ padding: "18px 22px", borderBottom: "1px solid var(--border-soft)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div>
            {eyebrow && FX_eyebrow(eyebrow, eyebrowColor)}
            {title && <div style={{ marginTop: 5, fontSize: 16, fontWeight: 700, color: "var(--text)" }}>{title}</div>}
          </div>
          {right}
        </div>
      )}
      <div style={pad === false ? undefined : { padding: 22 }}>{children}</div>
    </div>
  );
}

/* ---------------- Stepper ---------------- */
function Stepper({ screen }) {
  const active = FOXE_STEP_MAP[screen] || 0;
  if (!active) return null;
  return (
    <div style={{ background: "var(--card)", border: "1px solid var(--border)", borderRadius: 14, padding: "20px 22px" }}>
      <div style={{ marginBottom: 16 }}>
        {FX_eyebrow("FOXEN-AI · Governança")}
        <div style={{ fontSize: 16, fontWeight: 700, marginTop: 5, color: "var(--text)" }}>Fluxo de capacitação do modelo</div>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(7,1fr)", gap: 10 }}>
        {FOXE_STEPS.map((d) => {
          const on = +d[0] === active;
          return (
            <div key={d[0]} style={{ border: on ? "1px solid var(--accent)" : "1px solid var(--border-soft)", background: on ? "var(--accent-tint)" : "var(--step-bg)", borderRadius: 11, padding: "13px 14px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                <span style={{ fontFamily: MONO, fontSize: 11, fontWeight: 700, color: "#fff", background: on ? "var(--accent)" : "var(--dot-mute)", borderRadius: 6, padding: "3px 6px", lineHeight: 1 }}>{d[0]}</span>
                <span style={{ fontSize: 13, fontWeight: 700, color: "var(--text)" }}>{d[1]}</span>
              </div>
              <div style={{ fontSize: 11.5, lineHeight: 1.4, color: "var(--muted)" }}>{d[2]}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

const infoBanner = (
  <div style={{ display: "flex", alignItems: "flex-start", gap: 12, background: "var(--accent-tint)", border: "1px solid var(--accent-line)", borderRadius: 10, padding: "13px 16px" }}>
    <span style={{ width: 20, height: 20, borderRadius: "50%", background: "var(--accent)", color: "#fff", fontSize: 12, fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center", flex: "none", marginTop: 1 }}>i</span>
    <p style={{ margin: 0, fontSize: 13, lineHeight: 1.5, color: "var(--text-2)" }}>A inferência automática conta fotos novas em <strong>raw</strong>. Correção humana, promoção de dataset, treino e publicação de modelo <strong>exigem ação humana</strong>.</p>
  </div>
);

/* ---------------- Screens ---------------- */
function FoxeInicio({ onNav }) {
  const dotColor = { go: "var(--accent)", warn: "var(--warn)", crit: "var(--crit)", mute: "var(--dot-mute)" };
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 18 }}>
        {FOXE_DATA.kpis.map((k, i) => (
          <div key={i} style={{ background: "var(--card)", border: "1px solid var(--border)", borderRadius: 14, padding: "18px 20px" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <span style={{ font: "600 10px/1 " + MONO, letterSpacing: ".1em", textTransform: "uppercase", color: "var(--muted)" }}>{k.label}</span>
              <span style={{ width: 9, height: 9, borderRadius: "50%", background: dotColor[k.tone], display: "inline-block" }} />
            </div>
            <div style={{ marginTop: 12, fontSize: 34, fontWeight: 800, fontFamily: MONO, lineHeight: 1, color: "var(--text)" }}>{k.value}</div>
            <div style={{ marginTop: 7, fontSize: 12, color: "var(--muted)" }}>{k.note}</div>
          </div>
        ))}
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 360px", gap: 22, alignItems: "start" }}>
        <div style={{ background: "var(--card)", border: "1px solid var(--border)", borderRadius: 14, overflow: "hidden" }}>
          <div style={{ padding: "18px 22px", borderBottom: "1px solid var(--border-soft)" }}>{FX_eyebrow("Missões processadas")}<div style={{ marginTop: 5, fontSize: 16, fontWeight: 700, color: "var(--text)" }}>Resumo por missão</div></div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 90px 90px 110px", gap: 12, padding: "11px 22px", font: "600 10px/1 " + MONO, letterSpacing: ".06em", textTransform: "uppercase", color: "var(--muted)", borderBottom: "1px solid var(--border-soft)" }}>
            <span>Missão</span><span style={{ textAlign: "right" }}>Process.</span><span style={{ textAlign: "right" }}>Pendentes</span><span style={{ textAlign: "right" }}>Status</span>
          </div>
          {FOXE_DATA.inicioMissions.map((m, i) => (
            <div key={i} style={{ display: "grid", gridTemplateColumns: "1fr 90px 90px 110px", gap: 12, padding: "14px 22px", borderBottom: "1px solid var(--border-soft)", alignItems: "center" }}>
              <div><div style={{ fontSize: 13, fontWeight: 600, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", color: "var(--text)" }}>{m.name}</div><div style={{ font: "500 11px/1 " + MONO, color: "var(--muted)", marginTop: 4 }}>{m.curral}</div></div>
              <div style={{ textAlign: "right", fontFamily: MONO, fontWeight: 600, fontSize: 13, color: "var(--text)" }}>{m.proc}</div>
              <div style={{ textAlign: "right", fontFamily: MONO, fontWeight: 600, fontSize: 13, color: "var(--warn-ink)" }}>{m.pend}</div>
              <div style={{ textAlign: "right" }}>{FX_pill(m.pill[0], m.pill[1])}</div>
            </div>
          ))}
        </div>
        <div style={{ background: "var(--card)", border: "1px solid var(--border)", borderRadius: 14, padding: "18px 20px" }}>
          {FX_eyebrow("Requer atenção", "var(--warn-ink)")}
          <div style={{ marginTop: 5, fontSize: 16, fontWeight: 700, marginBottom: 14, color: "var(--text)" }}>Próximas ações</div>
          {FOXE_DATA.attention.map((a, i) => (
            <div key={i} style={{ display: "flex", gap: 12, padding: "12px 0", borderTop: "1px solid var(--border-soft)" }}>
              <div style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--warn)", marginTop: 5, flex: "none" }} />
              <div><div style={{ fontSize: 13, fontWeight: 600, color: "var(--text)" }}>{a.title}</div><div style={{ fontSize: 12, color: "var(--muted)", marginTop: 3, lineHeight: 1.4 }}>{a.desc}</div></div>
            </div>
          ))}
          <button onClick={() => onNav("revisao")} style={{ marginTop: 14, width: "100%", border: "none", background: "var(--warn-tint)", color: "var(--warn-ink)", font: "600 13px/1 " + UI, padding: 11, borderRadius: 9, cursor: "pointer" }}>Abrir fila de revisão →</button>
        </div>
      </div>
    </div>
  );
}

function FoxeContagens() {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 396px", gap: 22, alignItems: "start" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
        <FCard eyebrow="Captações na fila" title="Arquivos aguardando contagem" pad={false}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px 22px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 13 }}>
              <div style={{ width: 38, height: 38, borderRadius: 9, background: "var(--border-soft)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16 }}>🛰️</div>
              <div><div style={{ font: "600 13px/1 " + MONO, color: "var(--text)" }}>0008_CP_FSTAMON_C_FABRICA_POR-A</div><div style={{ fontSize: 12, color: "var(--muted)", marginTop: 4 }}>5 arquivos · 5 currais</div></div>
            </div>
            <span style={{ background: "var(--warn-tint)", color: "var(--warn-ink)", fontWeight: 700, fontSize: 13, borderRadius: 20, padding: "7px 14px", fontFamily: MONO }}>5 pendentes</span>
          </div>
        </FCard>
        <div style={{ background: "var(--card)", border: "1px solid var(--border)", borderRadius: 14, overflow: "hidden" }}>
          <div style={{ padding: "18px 22px", borderBottom: "1px solid var(--border-soft)" }}>{FX_eyebrow("Auditoria operacional")}<div style={{ marginTop: 5, fontSize: 16, fontWeight: 700, color: "var(--text)" }}>Job, foto e resultado</div></div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 80px 90px 70px", gap: 12, padding: "11px 22px", font: "600 10px/1 " + MONO, letterSpacing: ".06em", textTransform: "uppercase", color: "var(--muted)", borderBottom: "1px solid var(--border-soft)" }}><span>Foto · Curral</span><span style={{ textAlign: "right" }}>IA</span><span style={{ textAlign: "right" }}>Status</span><span style={{ textAlign: "right" }}>Job</span></div>
          {FOXE_DATA.contagensAudit.map((r, i) => (
            <div key={i} style={{ display: "grid", gridTemplateColumns: "1fr 80px 90px 70px", gap: 12, padding: "13px 22px", borderBottom: "1px solid var(--border-soft)", alignItems: "center" }}>
              <div><div style={{ font: "600 12px/1.3 " + MONO, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", color: "var(--text)" }}>{r.foto}</div><div style={{ fontSize: 11, color: "var(--muted)", marginTop: 3 }}>{r.curral}</div></div>
              <div style={{ textAlign: "right", fontFamily: MONO, fontWeight: 700, fontSize: 14, color: r.ia === "—" ? "var(--muted)" : "var(--text)" }}>{r.ia}</div>
              <div style={{ textAlign: "right" }}>{FX_pill(r.pill[0], r.pill[1])}</div>
              <div style={{ textAlign: "right", fontFamily: MONO, fontSize: 12, color: "var(--muted)" }}>{r.job}</div>
            </div>
          ))}
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 12 }}>
          {FOXE_DATA.contagensStats.map((c, i) => (
            <div key={i} style={{ background: "var(--card)", border: "1px solid var(--border)", borderRadius: 12, padding: "14px 16px" }}><div style={{ font: "600 10px/1 " + MONO, letterSpacing: ".08em", textTransform: "uppercase", color: "var(--muted)" }}>{c.label}</div><div style={{ marginTop: 8, fontSize: 24, fontWeight: 800, fontFamily: MONO, color: c.color }}>{c.value}</div></div>
          ))}
        </div>
        <div style={{ background: "var(--card)", border: "1px solid var(--border)", borderRadius: 14, overflow: "hidden" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "15px 18px", borderBottom: "1px solid var(--border-soft)" }}>{FX_eyebrow("Job concluído")}<div style={{ display: "flex", alignItems: "center", gap: 6, font: "600 11px/1 " + UI, color: "var(--ok-ink)" }}><span style={{ width: 7, height: 7, borderRadius: "50%", background: "var(--accent)" }} />Concluído</div></div>
          <div style={{ position: "relative", aspectRatio: "4/3", background: "repeating-linear-gradient(118deg,#2a322b 0 14px,#313a31 14px 28px)" }}>
            <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", font: "500 11px/1 " + MONO, color: "rgba(255,255,255,.3)", letterSpacing: ".08em" }}>▢ FOTO DO DRONE · CF-028</div>
            {[[20, 12, 14, 22, "0.98"], [44, 38, 12, 20, null], [30, 62, 13, 19, "0.97"], [58, 22, 11, 17, null], [52, 72, 12, 19, null]].map((b, i) => (
              <div key={i} style={{ position: "absolute", top: b[0] + "%", left: b[1] + "%", width: b[2] + "%", height: b[3] + "%", border: "2px solid #4cd07d", borderRadius: 2 }}>{b[4] && <span style={{ position: "absolute", top: -15, left: -2, background: "#4cd07d", color: "#0c2417", font: "600 8px/1 " + MONO, padding: "2px 4px", borderRadius: 2 }}>{b[4]}</span>}</div>
            ))}
            <div style={{ position: "absolute", left: 14, bottom: 14, background: "rgba(12,18,13,.8)", backdropFilter: "blur(6px)", borderRadius: 9, padding: "11px 16px" }}><div style={{ font: "600 10px/1 " + MONO, color: "#8fe0ad", letterSpacing: ".1em", textTransform: "uppercase" }}>Resultado IA</div><div style={{ marginTop: 5, fontSize: 30, fontWeight: 800, color: "#fff", lineHeight: 1, fontFamily: MONO }}>132</div></div>
          </div>
          <div style={{ padding: "16px 18px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 13, fontSize: 12 }}>
              <div><div style={{ font: "600 9px/1 " + MONO, letterSpacing: ".08em", textTransform: "uppercase", color: "var(--muted)" }}>Engine</div><div style={{ marginTop: 5, fontWeight: 600, fontFamily: MONO, fontSize: 11, color: "var(--text)" }}>prototype-local-deterministic</div></div>
              <div><div style={{ font: "600 9px/1 " + MONO, letterSpacing: ".08em", textTransform: "uppercase", color: "var(--muted)" }}>Status revisão</div><div style={{ marginTop: 5 }}>{FX_pill("needs_review", "warn")}</div></div>
            </div>
            <button style={{ marginTop: 15, width: "100%", border: "1px solid var(--border)", background: "var(--card)", color: "var(--text-2)", font: "600 13px/1 " + UI, padding: 11, borderRadius: 9, cursor: "pointer" }}>Reprocessar explicitamente</button>
          </div>
        </div>
      </div>
    </div>
  );
}

function FoxeRevisao({ onCorrect }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 396px", gap: 22, alignItems: "start" }}>
        <FCard eyebrow="Captações na fila" title="Arquivos aguardando correção" pad={false}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px 22px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 13 }}>
              <div style={{ width: 38, height: 38, borderRadius: 9, background: "var(--border-soft)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16 }}>🛰️</div>
              <div><div style={{ font: "600 13px/1 " + MONO, color: "var(--text)" }}>0008_CP_FSTAMON_C_FABRICA_POR-A</div><div style={{ fontSize: 12, color: "var(--muted)", marginTop: 4 }}>6 arquivos · 6 currais</div></div>
            </div>
            <span style={{ background: "var(--warn-tint)", color: "var(--warn-ink)", fontWeight: 700, fontSize: 13, borderRadius: 20, padding: "7px 14px", fontFamily: MONO }}>6 pendentes</span>
          </div>
        </FCard>
        <div style={{ background: "var(--card)", border: "1px solid var(--border)", borderRadius: 14, overflow: "hidden" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "15px 18px", borderBottom: "1px solid var(--border-soft)" }}>
            <div>{FX_eyebrow("Imagem auditada")}<div style={{ marginTop: 5, fontSize: 16, fontWeight: 700, fontFamily: MONO, color: "var(--text)" }}>CF-033</div></div>
            <div style={{ display: "flex", gap: 8 }}>
              <button style={{ border: "1px solid var(--ok-border)", background: "var(--ok-tint)", color: "var(--ok-ink)", font: "600 12px/1 " + UI, padding: "8px 13px", borderRadius: 8, cursor: "pointer" }}>Aprovar</button>
              <button onClick={onCorrect} style={{ border: "none", background: "var(--accent)", color: "#fff", font: "600 12px/1 " + UI, padding: "8px 13px", borderRadius: 8, cursor: "pointer" }}>Corrigir</button>
            </div>
          </div>
          <div style={{ position: "relative", aspectRatio: "4/3", background: "repeating-linear-gradient(118deg,#5a4636 0 16px,#63503e 16px 32px)" }}><div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", font: "500 11px/1 " + MONO, color: "rgba(255,255,255,.35)" }}>▢ FOTO AÉREA · CURRAL CF-033</div></div>
          <div style={{ padding: "14px 18px", display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 12, fontSize: 12 }}><div><div style={{ font: "600 9px/1 " + MONO, letterSpacing: ".08em", textTransform: "uppercase", color: "var(--muted)" }}>Resultado IA</div><div style={{ marginTop: 5, fontSize: 18, fontWeight: 700, fontFamily: MONO, color: "var(--text)" }}>119</div></div><div><div style={{ font: "600 9px/1 " + MONO, letterSpacing: ".08em", textTransform: "uppercase", color: "var(--muted)" }}>Status</div><div style={{ marginTop: 7 }}>{FX_pill("needs_review", "warn")}</div></div></div>
        </div>
      </div>
      <div style={{ background: "var(--card)", border: "1px solid var(--border)", borderRadius: 14, overflow: "hidden" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "18px 22px", borderBottom: "1px solid var(--border-soft)" }}>
          <div>{FX_eyebrow("Fila de revisão")}<div style={{ marginTop: 5, fontSize: 16, fontWeight: 700, color: "var(--text)" }}>Fotos contadas para aprovar ou corrigir</div></div>
          <div style={{ display: "flex", gap: 6, background: "var(--border-soft)", padding: 4, borderRadius: 9 }}>
            <span style={{ background: "var(--card)", color: "var(--text)", font: "600 12px/1 " + UI, padding: "7px 13px", borderRadius: 6, boxShadow: "0 1px 2px rgba(0,0,0,.06)" }}>Pendentes</span>
            <span style={{ color: "var(--muted)", font: "600 12px/1 " + UI, padding: "7px 13px" }}>Divergências</span>
            <span style={{ color: "var(--muted)", font: "600 12px/1 " + UI, padding: "7px 13px" }}>Conferidas</span>
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 90px 80px 80px 80px 120px", gap: 12, padding: "11px 22px", font: "600 10px/1 " + MONO, letterSpacing: ".06em", textTransform: "uppercase", color: "var(--muted)", borderBottom: "1px solid var(--border-soft)" }}><span>Foto</span><span>Curral</span><span style={{ textAlign: "right" }}>IA</span><span style={{ textAlign: "right" }}>Monit.</span><span style={{ textAlign: "right" }}>Dif.</span><span style={{ textAlign: "right" }}>Status</span></div>
        {FOXE_DATA.revRows.map((r, i) => (
          <div key={i} style={{ display: "grid", gridTemplateColumns: "1fr 90px 80px 80px 80px 120px", gap: 12, padding: "13px 22px", borderBottom: "1px solid var(--border-soft)", alignItems: "center" }}>
            <div style={{ font: "600 12px/1 " + MONO, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", color: "var(--text)" }}>{r.foto}</div>
            <div style={{ font: "500 12px/1 " + MONO, color: "var(--text-2)" }}>{r.curral}</div>
            <div style={{ textAlign: "right", fontFamily: MONO, fontWeight: 700, fontSize: 13, color: "var(--text)" }}>{r.ia}</div>
            <div style={{ textAlign: "right", fontFamily: MONO, fontSize: 13, color: "var(--text-2)" }}>{r.monit}</div>
            <div style={{ textAlign: "right", fontFamily: MONO, fontWeight: 700, fontSize: 13, color: "var(--warn-ink)" }}>{r.dif}</div>
            <div style={{ textAlign: "right" }}>{FX_pill(r.pill[0], r.pill[1])}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function FoxeUsuarios() {
  const inputS = { display: "block", width: "100%", marginTop: 7, border: "1px solid var(--border)", background: "var(--input)", borderRadius: 9, padding: "11px 13px", font: "500 13px/1 " + UI, color: "var(--text)" };
  const lbl = { font: "600 10px/1 " + MONO, letterSpacing: ".06em", textTransform: "uppercase", color: "var(--muted)" };
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 360px", gap: 22, alignItems: "start" }}>
        <FCard eyebrow="Controle de acesso" title="Criar usuário">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            <div><label style={lbl}>Nome</label><input style={inputS} placeholder="Nome completo" /></div>
            <div><label style={lbl}>E-mail</label><input style={inputS} placeholder="email@finpec.com" /></div>
          </div>
          <div style={{ marginTop: 16 }}><label style={lbl}>Status</label><select style={inputS}><option>Ativo</option><option>Inativo</option></select></div>
          <div style={{ display: "flex", gap: 12, marginTop: 16 }}>
            <label style={{ flex: 1, display: "flex", alignItems: "center", gap: 9, border: "1px solid var(--border)", borderRadius: 9, padding: "12px 14px", cursor: "pointer" }}><input type="checkbox" /><span style={{ fontSize: 13, fontWeight: 600, color: "var(--text)" }}>Administrador</span></label>
            <label style={{ flex: 1, display: "flex", alignItems: "center", gap: 9, border: "1px solid var(--ok-border)", background: "var(--accent-tint)", borderRadius: 9, padding: "12px 14px", cursor: "pointer" }}><input type="checkbox" defaultChecked /><span style={{ fontSize: 13, fontWeight: 600, color: "var(--text)" }}>Analista</span></label>
          </div>
          <button style={{ marginTop: 20, border: "none", background: "var(--accent)", color: "#fff", font: "600 13px/1 " + UI, padding: "12px 22px", borderRadius: 9, cursor: "pointer" }}>Criar usuário</button>
        </FCard>
        <FCard eyebrow="Segurança de login" eyebrowColor="var(--warn-ink)" title="Bloqueio por senha errada">
          <label style={lbl}>Tentativas antes do bloqueio</label>
          <input style={{ ...inputS, font: "600 14px/1 " + MONO }} defaultValue="10" />
          <div style={{ fontSize: 12, color: "var(--muted)", marginTop: 10 }}>Valor atual: 10</div>
          <button style={{ marginTop: 16, width: "100%", border: "none", background: "var(--accent)", color: "#fff", font: "600 13px/1 " + UI, padding: 11, borderRadius: 9, cursor: "pointer" }}>Salvar</button>
        </FCard>
      </div>
      <div style={{ background: "var(--card)", border: "1px solid var(--border)", borderRadius: 14, overflow: "hidden" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "18px 22px", borderBottom: "1px solid var(--border-soft)" }}>
          <div>{FX_eyebrow("Usuários cadastrados")}<div style={{ marginTop: 5, fontSize: 16, fontWeight: 700, color: "var(--text)" }}>Gestão administrativa</div></div>
          <input style={{ border: "1px solid var(--border)", background: "var(--input)", borderRadius: 9, padding: "9px 13px", font: "500 13px/1 " + UI, width: 220, color: "var(--text)" }} placeholder="Filtrar por e-mail" />
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr 90px 120px 150px 200px", gap: 12, padding: "11px 22px", font: "600 10px/1 " + MONO, letterSpacing: ".06em", textTransform: "uppercase", color: "var(--muted)", borderBottom: "1px solid var(--border-soft)" }}><span>Nome</span><span>E-mail</span><span>Status</span><span>Perfil</span><span>Último login</span><span style={{ textAlign: "right" }}>Ações</span></div>
        {FOXE_DATA.usuarios.map((u, i) => (
          <div key={i} style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr 90px 120px 150px 200px", gap: 12, padding: "14px 22px", borderBottom: "1px solid var(--border-soft)", alignItems: "center" }}>
            <div style={{ fontSize: 13, fontWeight: 600, color: "var(--text)" }}>{u.nome}</div>
            <div style={{ font: "500 12px/1 " + MONO, color: "var(--text-2)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{u.email}</div>
            <div>{FX_pill(u.pill[0], u.pill[1])}</div>
            <div style={{ fontSize: 13, color: "var(--text-2)" }}>{u.perfil}</div>
            <div style={{ font: "500 12px/1 " + MONO, color: "var(--muted)" }}>{u.login}</div>
            <div style={{ display: "flex", gap: 6, justifyContent: "flex-end" }}>
              <button style={{ border: "1px solid var(--border)", background: "var(--card)", color: "var(--text-2)", font: "600 11px/1 " + UI, padding: "7px 11px", borderRadius: 7, cursor: "pointer" }}>Editar</button>
              <button style={{ border: "1px solid var(--crit-border)", background: "var(--card)", color: "var(--crit-ink)", font: "600 11px/1 " + UI, padding: "7px 11px", borderRadius: 7, cursor: "pointer" }}>Deletar</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function FoxeModal({ onClose }) {
  const lbl = (c) => ({ font: "600 10px/1 " + MONO, letterSpacing: ".06em", textTransform: "uppercase", color: c || "var(--muted)" });
  return (
    <div onClick={onClose} style={{ position: "fixed", inset: 0, background: "rgba(20,28,22,.45)", backdropFilter: "blur(2px)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 50, fontFamily: UI }}>
      <div onClick={(e) => e.stopPropagation()} style={{ background: "var(--card)", borderRadius: 16, width: 480, maxWidth: "92vw", boxShadow: "0 24px 60px rgba(0,0,0,.25)", overflow: "hidden" }}>
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", padding: "22px 24px 0" }}>
          <div>{FX_eyebrow("Correção humana")}<div style={{ marginTop: 6, fontSize: 22, fontWeight: 800, fontFamily: MONO, color: "var(--text)" }}>CF-006</div></div>
          <button onClick={onClose} style={{ border: "1px solid var(--border)", background: "var(--card)", color: "var(--muted)", width: 32, height: 32, borderRadius: 8, cursor: "pointer", fontSize: 16 }}>×</button>
        </div>
        <div style={{ padding: "20px 24px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            <div><label style={lbl()}>Contagem IA</label><input disabled style={{ display: "block", width: "100%", marginTop: 7, border: "1px solid var(--border)", background: "var(--border-soft)", borderRadius: 9, padding: "11px 13px", font: "700 15px/1 " + MONO, color: "var(--text-2)" }} value="160" readOnly /></div>
            <div><label style={lbl("var(--accent)")}>Contagem corrigida</label><input style={{ display: "block", width: "100%", marginTop: 7, border: "1px solid var(--accent)", background: "var(--accent-tint)", borderRadius: 9, padding: "11px 13px", font: "700 15px/1 " + MONO, color: "var(--accent-ink)" }} defaultValue="164" /></div>
          </div>
          <div style={{ marginTop: 16 }}><label style={lbl()}>Observação</label><textarea style={{ display: "block", width: "100%", marginTop: 7, border: "1px solid var(--border)", background: "var(--input)", borderRadius: 9, padding: "11px 13px", font: "500 13px/1.4 " + UI, color: "var(--text)", minHeight: 84, resize: "vertical" }} defaultValue="Faltaram 4 bois" /></div>
        </div>
        <div style={{ display: "flex", justifyContent: "flex-end", gap: 10, padding: "0 24px 22px" }}>
          <button onClick={onClose} style={{ border: "1px solid var(--border)", background: "var(--card)", color: "var(--text-2)", font: "600 13px/1 " + UI, padding: "11px 18px", borderRadius: 9, cursor: "pointer" }}>Cancelar</button>
          <button onClick={onClose} style={{ border: "none", background: "var(--accent)", color: "#fff", font: "600 13px/1 " + UI, padding: "11px 18px", borderRadius: 9, cursor: "pointer" }}>Salvar correção</button>
        </div>
      </div>
    </div>
  );
}

function FoxePlaceholder({ title }) {
  return (
    <div style={{ background: "var(--card)", border: "1px solid var(--border)", borderRadius: 14, padding: "56px 24px", textAlign: "center" }}>
      <div style={{ fontSize: 16, fontWeight: 700, color: "var(--text)" }}>{title}</div>
      <div style={{ fontSize: 13, color: "var(--muted)", marginTop: 8, maxWidth: 380, marginLeft: "auto", marginRight: "auto", lineHeight: 1.5 }}>Esta área compõe a mesma linguagem do FOXEN-AI — superfícies sóbrias, tipografia monoespaçada e governança humana no loop.</div>
    </div>
  );
}

Object.assign(window, { FoxeSidebar, FoxeTopbar, Stepper, FoxeInicio, FoxeContagens, FoxeRevisao, FoxeUsuarios, FoxeModal, FoxePlaceholder, infoBanner });
