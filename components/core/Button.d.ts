import * as React from "react";

/**
 * FINPEC button props.
 */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual intent. @default "primary" */
  variant?: "primary" | "secondary" | "ghost" | "danger";
  /** Control height & density. @default "md" */
  size?: "sm" | "md" | "lg";
  /** Leading icon (an inline SVG element). */
  icon?: React.ReactNode;
  /** Trailing icon (an inline SVG element). */
  iconRight?: React.ReactNode;
  /** Stretch to full container width. @default false */
  block?: boolean;
  children?: React.ReactNode;
}

/**
 * FINPEC button — primary actions, secondary/ghost for lower emphasis,
 * danger for destructive intent. Omit children to render a square icon button.
 */
export function Button(props: ButtonProps): React.ReactElement;
