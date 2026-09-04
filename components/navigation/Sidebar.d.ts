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
 * Dark application sidebar with grouped navigation and user footer.
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
  className?: string;
}

export function Sidebar(props: SidebarProps): React.ReactElement;
