// Shared icons (Lucide-style) + mock data for the FINPEC Painel UI kit.
// Exposed on window so the screen files and index.html can share them.

const icon = (paths, sw = 1.9) => (props = {}) =>
  React.createElement(
    "svg",
    {
      width: props.size || 18,
      height: props.size || 18,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: sw,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      dangerouslySetInnerHTML: { __html: paths },
    }
  );

const Icons = {
  home: icon('<path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M9 22V12h6v10"/>'),
  file: icon('<path d="M4 4h11l5 5v11a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1Z"/><path d="M14 4v5h5"/><path d="M8 13h7M8 17h5"/>'),
  pen: icon('<path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z"/>'),
  trend: icon('<path d="M3 17l6-6 4 4 8-8"/><path d="M21 7v6h-6"/>'),
  bank: icon('<path d="m3 9 9-5 9 5"/><path d="M4 10v8M9 10v8M15 10v8M20 10v8"/><path d="M2 21h20"/>'),
  wallet: icon('<path d="M3 7a2 2 0 0 1 2-2h13v4M3 7v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-3M3 7h16"/><circle cx="17" cy="13" r="1.4"/>'),
  bell: icon('<path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/>'),
  plus: icon('<path d="M12 5v14M5 12h14"/>', 2),
  download: icon('<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="M7 10l5 5 5-5"/><path d="M12 15V3"/>', 2),
  users: icon('<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>'),
  chart: icon('<path d="M3 3v18h18"/><path d="M7 16v-5M12 16V8M17 16v-9"/>'),
  building: icon('<path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/><path d="M10 6h4M10 10h4M10 14h4M10 18h4"/>'),
  bell2: icon('<path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/><path d="M3.26 17a13 13 0 0 0 17.48 0"/><path d="M18 8a6 6 0 0 0-12 0c0 5-2 6-2 6h16s-2-1-2-6"/>'),
  doc: icon('<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v5h5"/>'),
  cow: icon('<path d="M3 6c0 2 2 3 2 3M21 6c0 2-2 3-2 3"/><path d="M7 9a5 5 0 0 0 10 0"/><circle cx="9.5" cy="13.5" r=".6"/><circle cx="14.5" cy="13.5" r=".6"/><path d="M9 17c1 1 5 1 6 0"/>'),
  alert: icon('<path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z"/><path d="M12 9v4M12 17h.01"/>'),
  check: icon('<path d="M20 6 9 17l-5-5"/>', 2.4),
  clock: icon('<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>'),
  arrowUp: icon('<path d="M12 19V5M5 12l7-7 7 7"/>', 2.4),
  arrowDown: icon('<path d="M12 5v14M5 12l7 7 7-7"/>', 2.4),
};

const PAINEL = {
  user: { name: "João Kraemer", role: "Administrador", initials: "JK" },
  nav: [
    { label: "Geral", items: [{ id: "dashboard", label: "Visão Geral", icon: Icons.home() }] },
    {
      label: "CPRFs",
      items: [
        { id: "ativas", label: "Ativas", icon: Icons.file(), badge: "1.318", tone: "info" },
        { id: "assinatura", label: "Pendentes de assinatura", icon: Icons.pen(), badge: "14", hot: true },
        { id: "nova", label: "Nova CPRF", icon: Icons.plus() },
      ],
    },
    {
      label: "B3 & Indicadores",
      items: [
        { id: "b3", label: "Acompanhamento B3", icon: Icons.bank(), badge: "71", tone: "info" },
        { id: "boi", label: "Boi Gordo", icon: Icons.cow(), dot: true, tone: "ok" },
      ],
    },
    {
      label: "Gestão",
      items: [
        { id: "clientes", label: "Clientes", icon: Icons.users() },
        { id: "filiais", label: "Filiais", icon: Icons.building() },
        { id: "documentos", label: "Documentos", icon: Icons.doc(), dot: true, tone: "hot" },
      ],
    },
  ],
  kpis: [
    { label: "Capital sob gestão", value: "1,84", prefix: "R$", unit: "bi", tone: "primary", icon: Icons.wallet(), trend: { dir: "up", label: "+8,2%" }, foot: "vs. mês anterior" },
    { label: "CPRFs ativas", value: "1.318", tone: "info", icon: Icons.file(), trend: { dir: "up", label: "+42" }, foot: "novas este mês" },
    { label: "Pendentes de assinatura", value: "14", tone: "warn", icon: Icons.pen(), trend: { dir: "down", label: "5 em alerta" }, foot: "prazo crítico" },
    { label: "Aguardando registro B3", value: "71", tone: "neutral", icon: Icons.bank(), trend: { dir: "up", label: "+71" }, foot: "a registrar" },
  ],
  captacao: [
    { label: "Jul", value: 62 }, { label: "Ago", value: 48 }, { label: "Set", value: 74 },
    { label: "Out", value: 58 }, { label: "Nov", value: 83 }, { label: "Dez", value: 69 },
    { label: "Jan", value: 91 }, { label: "Fev", value: 77 }, { label: "Mar", value: 64 },
    { label: "Abr", value: 88 }, { label: "Mai", value: 95 }, { label: "Jun", value: 72 },
  ],
  atencao: [
    { tone: "danger", title: "5 CPRFs com prazo crítico", desc: "Assinatura vence em menos de 48h." },
    { tone: "warn", title: "71 contratos a registrar na B3", desc: "Lote pronto para envio ao registro." },
    { tone: "info", title: "Renovação pendente · Pasto Sul", desc: "Cliente aguardando proposta de renovação." },
  ],
  cprfs: [
    { id: "#2740", produtor: "Fazenda Santa Mônica", filial: "Cara Preta", valor: "R$ 1.240.000", taxa: "CDI + 4,2%", venc: "12/08/2026", status: "Ativa", tone: "ok" },
    { id: "#2739", produtor: "Agropecuária Cara Preta", filial: "Cara Preta", valor: "R$ 880.500", taxa: "CDI + 5,0%", venc: "03/09/2026", status: "Em revisão", tone: "warn" },
    { id: "#2738", produtor: "Pasto Sul Ltda.", filial: "Sul", valor: "R$ 2.105.000", taxa: "IPCA + 7,1%", venc: "21/07/2026", status: "Antecipação", tone: "info" },
    { id: "#2736", produtor: "Fazenda Santa Helena", filial: "Norte", valor: "R$ 540.000", taxa: "CDI + 3,8%", venc: "30/06/2026", status: "Pendente assinatura", tone: "danger" },
    { id: "#2733", produtor: "Confinamento Fábrica", filial: "Cara Preta", valor: "R$ 1.690.000", taxa: "CDI + 4,5%", venc: "15/10/2026", status: "Ativa", tone: "ok" },
    { id: "#2731", produtor: "Agro Leste S.A.", filial: "Leste", valor: "R$ 720.000", taxa: "IPCA + 6,4%", venc: "08/11/2026", status: "Ativa", tone: "ok" },
    { id: "#2728", produtor: "Fazenda Boa Vista", filial: "Norte", valor: "R$ 310.000", taxa: "CDI + 4,0%", venc: "19/09/2026", status: "Resgate confirmado", tone: "neutral" },
  ],
};

Object.assign(window, { Icons, PAINEL });
