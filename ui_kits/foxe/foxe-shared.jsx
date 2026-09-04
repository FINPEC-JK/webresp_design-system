// FOXE UI kit — shared helpers, pill factory, nav model and mock data.
// Recreates the data shape of the FOXE redesign. Exposed on window.

function FX_pill(text, tone) {
  const map = {
    go: ["var(--ok-ink)", "var(--ok-tint)"],
    warn: ["var(--warn-ink)", "var(--warn-tint)"],
    info: ["var(--info-ink)", "var(--info-tint)"],
    mute: ["var(--text-2)", "var(--mute-tint)"],
    crit: ["var(--crit-ink)", "var(--crit-tint)"],
  };
  const c = map[tone] || map.mute;
  return React.createElement(
    "span",
    { style: { display: "inline-block", padding: "3px 9px", borderRadius: "20px", fontSize: "11px", fontWeight: 600, color: c[0], background: c[1], whiteSpace: "nowrap" } },
    text
  );
}

// Mono section label
function FX_eyebrow(text, color) {
  return React.createElement("div", { style: { font: "600 10px/1 'IBM Plex Mono',monospace", letterSpacing: ".1em", textTransform: "uppercase", color: color || "var(--accent)" } }, text);
}

const FOXE_NAV = {
  drones: [
    { id: "upload", n: "01", name: "Upload Drone" },
    { id: "contagens", n: "02", name: "Contagens IA" },
    { id: "revisao", n: "03", name: "Correções de Contagem" },
    { id: "resultados", n: "04", name: "Resultados por Missão" },
    { id: "divergencias", n: "05", name: "Divergências CDZ" },
    { id: "fotos", n: "06", name: "Gestão de Fotos do Drone" },
  ],
  foxe: [{ id: "usuarios", n: "17", name: "Usuários e Perfis" }],
};

const FOXE_META = {
  inicio: ["Visão geral", "Painel operacional"],
  upload: ["Drones / Upload", "Upload Drone"],
  contagens: ["Drones / Contagens", "Contagens IA"],
  revisao: ["FOXEN-AI / Operacional", "Fila de Revisão de Contagens"],
  resultados: ["Drones / Resultados", "Resultados por Missão"],
  divergencias: ["Drones / Divergências", "Divergências CDZ"],
  fotos: ["Drones / Arquivos", "Gestão de Fotos do Drone"],
  usuarios: ["FOXEN-AI / Acesso", "Usuários e Perfis"],
};

const FOXE_STEPS = [
  ["01", "Captação", "Recebe fotos raw e cria lotes rastreáveis."],
  ["02", "Anotação", "Marca área e gado sem promover dados."],
  ["03", "Revisão", "Valida contagens corrigidas e anotações."],
  ["04", "Datasets", "Fecha versões imutáveis para treino."],
  ["05", "Treinos", "Executa quando um usuário inicia a rodada."],
  ["06", "Avaliações", "Compara métricas e exige decisão humana."],
  ["07", "Registry", "Publica modelo aprovado por tipo."],
];
const FOXE_STEP_MAP = { upload: 1, fotos: 1, contagens: 2, revisao: 3, resultados: 3, divergencias: 3 };

const FOXE_DATA = {
  kpis: [
    { label: "Fotos em raw", value: "472", note: "Base monitoramento local", tone: "mute" },
    { label: "Pendentes", value: "8", note: "Fila operacional atual", tone: "warn" },
    { label: "Divergências", value: "1", note: "Com diferença entre fontes", tone: "crit" },
    { label: "Conferidas", value: "6", note: "Resultados já revisados", tone: "go" },
  ],
  inicioMissions: [
    { name: "0008_CP_FSTAMON_C_FABRICA_POR-A", curral: "Curral CF-005 → CF-037", proc: "13/16", pend: "11", pill: ["Em revisão", "warn"] },
    { name: "0007_CP_FSTAMON_C_PASTO_SUL", curral: "Curral PS-001 → PS-020", proc: "20/20", pend: "0", pill: ["Concluída", "go"] },
    { name: "0006_CP_FSTALES_C_NORTE", curral: "Curral CN-001 → CN-014", proc: "14/14", pend: "0", pill: ["Concluída", "go"] },
    { name: "0009_CP_FSTAMON_C_LESTE", curral: "Curral CL-001 → CL-009", proc: "4/9", pend: "5", pill: ["Processando", "info"] },
  ],
  attention: [
    { title: "12 fotos sem contexto CDZ", desc: "Divergências CDZ não conseguem cruzar fonte obrigatória." },
    { title: "CF-006 com diferença +71", desc: "Contagem IA 160 vs monitoramento 89 — revisar." },
    { title: "11 contagens pendentes", desc: "Missão 0008 aguardando aprovação humana." },
  ],
  contagensStats: [
    { label: "Na fila", value: "5", color: "var(--text)" },
    { label: "Executando", value: "0", color: "var(--muted)" },
    { label: "Concluído", value: "11", color: "var(--accent)" },
    { label: "Falhou", value: "0", color: "var(--muted)" },
  ],
  contagensAudit: [
    { foto: "CF-028 · DJI_...0029", curral: "Curral CF-028", ia: "132", job: "#25", pill: ["Concluído", "go"] },
    { foto: "CF-029 · DJI_...0030", curral: "Curral CF-029", ia: "129", job: "#26", pill: ["Concluído", "go"] },
    { foto: "CF-031 · DJI_...0031", curral: "Curral CF-031", ia: "69", job: "#27", pill: ["Concluído", "go"] },
    { foto: "CF-033 · DJI_...0034", curral: "Curral CF-033", ia: "119", job: "#29", pill: ["Concluído", "go"] },
    { foto: "CF-034 · DJI_...0035", curral: "Curral CF-034", ia: "—", job: "—", pill: ["Na fila", "mute"] },
    { foto: "CF-037 · DJI_...0024", curral: "Curral CF-037", ia: "169", job: "#24", pill: ["Concluído", "go"] },
  ],
  revRows: [
    { foto: "CF-006 · DJI_...0007", curral: "CF-006", ia: "160", monit: "89", dif: "+71", pill: ["reviewed", "info"] },
    { foto: "CF-033 · DJI_...0034", curral: "CF-033", ia: "119", monit: "—", dif: "—", pill: ["needs_review", "warn"] },
    { foto: "CF-032 · DJI_...0033", curral: "CF-032", ia: "123", monit: "—", dif: "—", pill: ["needs_review", "warn"] },
    { foto: "CF-031 · DJI_...0032", curral: "CF-031", ia: "69", monit: "—", dif: "—", pill: ["needs_review", "warn"] },
    { foto: "CF-029 · DJI_...0030", curral: "CF-029", ia: "129", monit: "—", dif: "—", pill: ["needs_review", "warn"] },
  ],
  usuarios: [
    { nome: "Lockout Test", email: "codex.lockout@finpec.local", perfil: "Analista", login: "—", pill: ["Ativo", "go"] },
    { nome: "Joao Kraemer", email: "joao.kraemer@finpec.com", perfil: "Administrador", login: "22/06/2026 12:53", pill: ["Ativo", "go"] },
    { nome: "Marina Alves", email: "marina.alves@finpec.com", perfil: "Analista", login: "21/06/2026 18:04", pill: ["Ativo", "go"] },
    { nome: "Carlos Dias", email: "carlos.dias@finpec.com", perfil: "Analista", login: "—", pill: ["Inativo", "mute"] },
  ],
};

Object.assign(window, { FX_pill, FX_eyebrow, FOXE_NAV, FOXE_META, FOXE_STEPS, FOXE_STEP_MAP, FOXE_DATA });
