import * as React from "react";

/**
 * Text input / textarea with FINPEC focus ring.
 */
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement & HTMLTextAreaElement> {
  /** Render a single-line input or a resizable textarea. @default "input" */
  as?: "input" | "textarea";
}

export function Input(props: InputProps): React.ReactElement;
