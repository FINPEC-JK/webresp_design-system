import * as React from "react";

export interface TopbarProps {
  /** Breadcrumb trail; the final item renders as the current page. */
  crumbs?: React.ReactNode[];
  /** Show the global search field. @default true */
  search?: boolean;
  searchPlaceholder?: string;
  /** Right-side action buttons / icon buttons. */
  actions?: React.ReactNode;
  /** Leading slot (e.g. a collapse toggle). */
  leading?: React.ReactNode;
  className?: string;
}

/** Application topbar with breadcrumb, global search and action slot. */
export function Topbar(props: TopbarProps): React.ReactElement;
