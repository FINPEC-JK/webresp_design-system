import * as React from "react";

export interface FieldProps {
  /** Field label text. */
  label?: React.ReactNode;
  /** Show the accent required mark. @default false */
  required?: boolean;
  /** Helper text below the control. */
  hint?: React.ReactNode;
  /** Associates the label with a control id. */
  htmlFor?: string;
  className?: string;
  children?: React.ReactNode;
}

/** Label + hint wrapper for form controls. */
export function Field(props: FieldProps): React.ReactElement;
