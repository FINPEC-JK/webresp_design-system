import * as React from "react";

/**
 * Bordered content card with optional header.
 */
export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Header title. Omit to render a bare surface with no header. */
  title?: React.ReactNode;
  /** Count badge shown next to the title. */
  count?: React.ReactNode;
  /** Right-aligned header controls (buttons, segmented control, etc). */
  actions?: React.ReactNode;
  /** Skip the padded body wrapper — use for full-bleed tables. @default false */
  bodyless?: boolean;
  children?: React.ReactNode;
}

export function Card(props: CardProps): React.ReactElement;
