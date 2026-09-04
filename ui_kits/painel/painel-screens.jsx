// FINPEC Painel — product screens. Recreations of the real investor/admin
// views, composed from the design-system components on the global namespace.

const DS = window.FINPECDesignSystem_ccaa11;
const { Button, IconButton, Card, Pill, Tag, Avatar, KpiCard, DataTable, BarChart, Pager, Field, Input, Select, Checkbox, RadioCard, EmptyState, MoneyInput } = DS;

/* ---------------- Login ---------------- */
function Login({ onEnter }) {
  const [keep, setKeep] = React.useState(true);
  return (
    <div className="login-wrap" style={{ display: "grid", gridTemplateColumns: "1fr 1.05fr", height: "100%", background: "var(--surface)" }}>
      <div style={{ display: "grid", placeItems: "center", padding: 40 }}>
        <div style={{ width: "100%", maxWidth: 372 }} className="fp-fade-in">
          <div style={{ display: "flex", alignItems: "center", gap: 11, marginBottom: 36 }}>
            <img src="../../assets/finpec-mark.png" alt="" style={{ height: 38 }} />
            <span style={{ font: "var(--fw-bold) 20px/1 var(--font-display)", letterSpacing: "var(--ls-brand)", color: "var(--ink)" }}>FINPEC</span>
          </div>
          <h1 style={{ font: "var(--fw-bold) 26px/1.1 var(--font-display)", letterSpacing: "-0.01em", color: "var(--ink)", margin: "0 0 6px" }}>Painel Administrativo</h1>
          <p style={{ color: "var(--muted)", fontSize: 14, margin: "0 0 28px" }}>Acesse a operação de crédito rural.</p>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <Field label="E-mail"><Input type="email" defaultValue="joao.kraemer@finpec.com" /></Field>
            <Field label="Senha"><Input type="password" defaultValue="senha-segura" /></Field>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <Checkbox checked={keep} onChange={(e) => setKeep(e.target.checked)}>Manter conectado</Checkbox>
              <a className="link" style={{ color: "var(--accent)", fontWeight: 600, fontSize: 13, textDecoration: "none" }}>Esqueci a senha</a>
            </div>
            <Button variant="primary" block size="lg" onClick={onEnter}>Entrar no painel</Button>
          </div>
        </div>
      </div>
      <div style={{ background: "var(--side)", position: "relative", overflow: "hidden", display: "grid", placeItems: "center" }}>
        <div style={{ textAlign: "center" }}>
          <img src="../../assets/finpec-mark.png" alt="" style={{ height: 96, opacity: 0.96 }} />
          <div style={{ font: "var(--fw-bold) 30px/1 var(--font-display)", letterSpacing: "var(--ls-brand)", color: "#fff", marginTop: 22 }}>FINPEC</div>
          <div style={{ color: "var(--side-text-dim)", fontSize: 14, marginTop: 12, maxWidth: 320, lineHeight: 1.5 }}>Crédito rural com lastro em CPR, integrado à B3 e aos indicadores do agronegócio.</div>
        </div>
      </div>
    </div>
  );
}

/* ---------------- Page head ---------------- */
function PageHead({ title, sub, actions }) {
  return (
    <div className="fp-page-head">
      <div>
        <h1 className="fp-page-title">{title}</h1>
        {sub && <p className="fp-page-sub">{sub}</p>}
      </div>
      {actions && <div className="fp-page-actions">{actions}</div>}
    </div>
  );
}

/* ---------------- Dashboard ---------------- */
function Dashboard({ toast }) {
  const toneDot = { danger: "var(--danger)", warn: "var(--warn)", info: "var(--info)", ok: "var(--ok)" };
  return (
    <div className="fp-fade-in">
      <PageHead
        title="Bem-vindo, João"
        sub="Panorama da operação · terça-feira, 09 jun 2026"
        actions={<>
          <Button variant="secondary" icon={Icons.download()}>Exportar</Button>
          <Button variant="primary" icon={Icons.plus()} onClick={() => toast("Nova CPRF iniciada")}>Nova CPRF</Button>
        </>}
      />
      <div className="fp-kpi-grid">
        {PAINEL.kpis.map((k, i) => <KpiCard key={i} {...k} />)}
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1.6fr 1fr", gap: 16, marginTop: 16 }}>
        <Card title="Captação por mês" actions={<div className="fp-seg"><button className="on">12 meses</button><button>YTD</button></div>}>
          <div style={{ display: "flex", alignItems: "baseline", gap: 12, marginBottom: 18 }}>
            <span style={{ font: "var(--fw-bold) 28px/1 var(--font-display)", letterSpacing: "-0.02em", color: "var(--ink)" }}><span style={{ fontSize: 17, color: "var(--muted)", fontWeight: 700 }}>R$</span>214,7<span style={{ fontSize: 15, color: "var(--muted)", fontWeight: 600, marginLeft: 7 }}>mi</span></span>
            <span className="fp-trend up" style={{ fontSize: 13 }}>{Icons.arrowUp({ size: 13 })} +12,4% no trimestre</span>
          </div>
          <BarChart data={PAINEL.captacao} />
        </Card>
        <Card title="Precisa da sua atenção">
          <div style={{ display: "flex", flexDirection: "column" }}>
            {PAINEL.atencao.map((a, i) => (
              <div key={i} style={{ display: "flex", gap: 12, padding: "12px 0", borderTop: i ? "1px solid var(--border)" : "none" }}>
                <span style={{ width: 8, height: 8, borderRadius: "50%", background: toneDot[a.tone], marginTop: 5, flex: "none" }} />
                <div>
                  <div style={{ font: "var(--fw-semibold) 13.5px/1.3 var(--font-ui)", color: "var(--ink)" }}>{a.title}</div>
                  <div style={{ fontSize: 12.5, color: "var(--muted)", marginTop: 3, lineHeight: 1.4 }}>{a.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}

/* ---------------- CPRF list ---------------- */
function CprfList({ toast }) {
  const [page, setPage] = React.useState(1);
  const [q, setQ] = React.useState("");
  const rows = PAINEL.cprfs.filter((r) => r.produtor.toLowerCase().includes(q.toLowerCase()) || r.id.includes(q));
  const cols = [
    { key: "id", label: "CPRF", render: (r) => <span className="fp-cell-id">{r.id}</span> },
    { key: "produtor", label: "Produtor", render: (r) => <span><span className="fp-cell-strong">{r.produtor}</span><span className="fp-cell-sub">Filial {r.filial}</span></span> },
    { key: "valor", label: "Valor", num: true, render: (r) => <span className="fp-cell-money">{r.valor}</span> },
    { key: "taxa", label: "Taxa", render: (r) => <Tag>{r.taxa}</Tag> },
    { key: "venc", label: "Vencimento", render: (r) => <span style={{ fontFamily: "var(--font-mono)", fontSize: 12.5, color: "var(--ink-2)" }}>{r.venc}</span> },
    { key: "status", label: "Status", render: (r) => <Pill tone={r.tone} dot>{r.status}</Pill> },
    { key: "act", label: "", render: () => <div className="fp-row-actions"><button className="fp-row-act" title="Abrir">{Icons.file({ size: 15 })}</button></div> },
  ];
  return (
    <div className="fp-fade-in">
      <PageHead title="CPRFs Ativas" sub="1.318 cédulas em carteira · R$ 1,84 bi sob gestão"
        actions={<><Button variant="secondary" icon={Icons.download()}>Exportar</Button><Button variant="primary" icon={Icons.plus()} onClick={() => toast("Nova CPRF iniciada")}>Nova CPRF</Button></>} />
      <Card bodyless>
        <div className="fp-table-toolbar">
          <div className="fp-search-field">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="11" cy="11" r="7" /><path d="m21 21-4.3-4.3" /></svg>
            <input placeholder="Filtrar por produtor ou número…" value={q} onChange={(e) => setQ(e.target.value)} />
          </div>
          <div className="fp-seg"><button className="on">Todas</button><button>Ativas</button><button>Pendentes</button></div>
          <Button variant="secondary" size="sm">Filtros</Button>
        </div>
        {rows.length ? <DataTable columns={cols} rows={rows} /> : <EmptyState icon={Icons.file({ size: 24 })} title="Nenhuma CPRF encontrada" message="Ajuste os filtros ou o termo de busca." />}
        <Pager page={page} totalPages={28} label={`${rows.length} de 1.318 cédulas`} onChange={setPage} />
      </Card>
    </div>
  );
}

/* ---------------- New CPRF form ---------------- */
function NewCprf({ toast }) {
  const [indexador, setIndexador] = React.useState("cdi");
  return (
    <div className="fp-fade-in">
      <PageHead title="Nova CPRF" sub="Emissão de cédula de produto rural financeira" />
      <div style={{ display: "grid", gridTemplateColumns: "1fr 340px", gap: 16, alignItems: "start" }}>
        <Card title="Dados da emissão">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18 }}>
            <Field label="Produtor" required><Input placeholder="Razão social ou nome" /></Field>
            <Field label="CPF / CNPJ" required><Input placeholder="000.000.000-00" /></Field>
            <Field label="Filial"><Select><option>Cara Preta</option><option>Sul</option><option>Norte</option><option>Leste</option></Select></Field>
            <Field label="Valor (R$)" required><MoneyInput mask="currency" /></Field>
            <Field label="Vencimento" required><Input type="date" /></Field>
            <Field label="Garantia"><Select><option>Penhor de safra</option><option>Alienação de gado</option><option>Aval</option></Select></Field>
          </div>
          <div style={{ marginTop: 18 }}>
            <div className="fp-section-label" style={{ marginBottom: 12 }}>Indexador</div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
              <RadioCard title="CDI" desc="Pós-fixado, taxa + spread." selected={indexador === "cdi"} onSelect={() => setIndexador("cdi")} />
              <RadioCard title="IPCA" desc="Indexado à inflação." selected={indexador === "ipca"} onSelect={() => setIndexador("ipca")} />
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "flex-end", gap: 10, marginTop: 22 }}>
            <Button variant="ghost">Cancelar</Button>
            <Button variant="primary" onClick={() => toast("CPRF criada e enviada para assinatura")}>Emitir CPRF</Button>
          </div>
        </Card>
        <Card title="Resumo">
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {[["Valor", "R$ 0,00"], ["Indexador", indexador.toUpperCase()], ["Spread sugerido", indexador === "cdi" ? "+4,2%" : "+6,8%"], ["Prazo", "—"], ["Registro B3", "Pendente"]].map(([k, v]) => (
              <div key={k} style={{ display: "flex", justifyContent: "space-between", fontSize: 13.5 }}>
                <span style={{ color: "var(--muted)" }}>{k}</span>
                <span style={{ color: "var(--ink)", fontWeight: 600 }}>{v}</span>
              </div>
            ))}
            <div style={{ height: 1, background: "var(--border)" }} />
            <div style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
              {Icons.alert({ size: 18 })}
              <span style={{ fontSize: 12.5, color: "var(--muted)", lineHeight: 1.45 }}>A cédula segue para assinatura digital antes do registro na B3.</span>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}

/* ---------------- Generic placeholder ---------------- */
function Placeholder({ title }) {
  return (
    <div className="fp-fade-in">
      <PageHead title={title} sub="Visão demonstrativa do design system" />
      <Card bodyless>
        <EmptyState icon={Icons.chart({ size: 24 })} title={`${title} em construção`} message="Esta área compõe os mesmos componentes do design system FINPEC." />
      </Card>
    </div>
  );
}

Object.assign(window, { Login, Dashboard, CprfList, NewCprf, Placeholder, PageHead });
