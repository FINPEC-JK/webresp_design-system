import * as React from "react";

export interface EmptyStateProps {
  /** Inline-SVG icon shown in a soft rounded chip. */
  icon?: React.ReactNode;
  /** Headline. */
  title: React.ReactNode;
  /** Supporting message. */
  message?: React.ReactNode;
  /** Optional action button. */
  action?: React.ReactNode;
  className?: string;
}

/** Centered empty / zero-results state for tables and panels. */
export function EmptyState(props: EmptyStateProps): React.ReactElement;
