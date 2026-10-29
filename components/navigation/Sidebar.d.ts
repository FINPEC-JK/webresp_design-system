import * as React from "react";

export interface NavItem {
  /** Unique id, compared against `activeId`. */
  id: string;
  label: React.ReactNode;
  /** Inline-SVG icon (Lucide-style, 20px). */
  icon?: React.ReactNode;
  /** Count / status badge (number or short text). */
  badge?: React.ReactNode;
  /** Tint for badge/dot. "hot" = accent attention, "ok" = green, "info" = blue. */
  tone?: "hot" | "ok" | "info";
  /** Render an attention badge in accent (shorthand for tone="hot"). */
  hot?: boolean;
  /** Show a small status dot instead of a count (when no badge). */
  dot?: boolean;
  /** Sub-items. When present the item becomes an expandable/collapsible parent (click toggles; no navigation). Auto-expands when it contains the active item. Use for ALL settings: e.g. "Configurações" → Cadastros, Criação de acessos, Perfis. */
  children?: NavItem[];
  /** Start expanded. @default false */
  defaultExpanded?: boolean;
}

export interface NavGroup {
  /** Uppercase group label. */
  label?: React.ReactNode;
  items: NavItem[];
}

export interface SidebarUser {
  name: React.ReactNode;
  role: React.ReactNode;
  initials: string;
}

/**
 * Application sidebar with grouped navigation and a footer holding: light/dark
 * toggle + date/time, user avatar (initials) + name + profile + logout, and the release code.
 */
export interface SidebarProps {
  /** Wordmark text. @default "FINPEC" */
  brandWord?: string;
  /** Brand mark image URL. */
  logoSrc?: string;
  groups: NavGroup[];
  /** Currently active item id. */
  activeId?: string | null;
  onNavigate?: (id: string) => void;
  /** Footer user block. */
  user?: SidebarUser | null;
  /** Collapsed (icon-only) mode. @default false */
  collapsed?: boolean;
  /** Toggle handler for the hamburger button. When provided, the button renders. */
  onToggleCollapse?: () => void;
  /** Surface treatment — dark warm chrome, light paper, or bright white (blue-forward). @default "dark" */
  variant?: "dark" | "light" | "white";
  /** Current app theme. Only two modes exist: "light" | "dark" (no "system"). Drives the toggle icon (sun = light, moon = dark). */
  theme?: "light" | "dark" | null;
  /** Theme toggle handler. When provided, the light/dark button renders in the footer. */
  onToggleTheme?: () => void;
  /** Logout handler. When provided (and `user` is set), the "Sair" button renders beside the user. */
  onLogout?: () => void;
  /** Show live date + time in the footer ("28 de out. de 2026 · 23:47"). @default true */
  showClock?: boolean;
  /** Release / version code shown at the foot, mono, e.g. "0.2.0022". */
  release?: string | null;
  className?: string;
}

export function Sidebar(props: SidebarProps): React.ReactElement;
