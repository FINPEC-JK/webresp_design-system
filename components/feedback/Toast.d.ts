import * as React from "react";

export interface ToastProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Icon tint. @default "default" */
  tone?: "default" | "ok" | "danger";
  /** Optional leading inline-SVG icon. */
  icon?: React.ReactNode;
  children?: React.ReactNode;
}

/** Dark-ink toast notification. Position fixed bottom-center in your app shell. */
export function Toast(props: ToastProps): React.ReactElement;
