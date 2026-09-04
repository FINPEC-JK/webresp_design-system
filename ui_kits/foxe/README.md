# UI Kit · FOXEN-AI

Recriação navegável da plataforma **FOXEN-AI** — visão computacional para contagem de gado por imagens de drone, com governança humana no loop.

## Telas

| Tela | Arquivo / função | Conteúdo |
|---|---|---|
| **Início** | `FoxeInicio` | KPIs operacionais (raw, pendentes, divergências, conferidas), resumo por missão, fila "Requer atenção" |
| **Contagens IA** | `FoxeContagens` | Fila de captações, auditoria operacional (job/foto/resultado), viewport com bounding boxes e resultado IA |
| **Correções de Contagem** | `FoxeRevisao` | Imagem auditada, fila de revisão (aprovar/corrigir), modal de correção humana |
| **Usuários e Perfis** | `FoxeUsuarios` | Criar usuário, segurança de login, tabela de gestão administrativa |
| *demais itens* | `FoxePlaceholder` | Upload, Resultados, Divergências, Fotos — stubs sóbrios |

A `FoxeSidebar` traz a navegação numerada (DRONES / FOXEN-AI), os seletores de contexto e o **menu de aparência** (tema claro/escuro + 4 cores de marca: verde, âmbar, azul, terra). O `Stepper` de governança aparece nas telas operacionais.

## Arquivos

- `index.html` — app completo, wireado (estado de tela, tema, accent, modal).
- `foxe-theme.js` — gerador de variáveis CSS (claro/escuro × 4 accents), portado do redesign original.
- `foxe-shared.jsx` — pill factory, modelo de navegação, dados mock.
- `foxe-screens.jsx` — chrome (sidebar/topbar) + telas.

## Linguagem visual

O FOXE mantém capacidade própria de **tema escuro** e uso pesado de **IBM Plex Mono** para números, IDs de arquivo (`CF-028 · DJI_...0029`) e códigos de missão. As superfícies neutras e o accent foram **unificados** com o Painel — papel creme quente e o laranja-queimado da marca como cor padrão — mas o kit ainda oferece accents alternativos (verde, âmbar, azul, terra) e o modo escuro, controlados pelo menu de aparência da sidebar.

**Fonte-verdade:** `uploads/Foxe IA - Redesign.dc.html`.
