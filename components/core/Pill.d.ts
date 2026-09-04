import * as React from "react";

export interface PillProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Semantic tone. @default "neutral" */
  tone?: "ok" | "warn" | "danger" | "info" | "neutral" | "accent";
  /** Show a leading status dot. @default false */
  dot?: boolean;
  children?: React.ReactNode;
}

/** Status / state pill — soft tinted chip used in tables, cards and headers. */
export function Pill(props: PillProps): React.ReactElement;
