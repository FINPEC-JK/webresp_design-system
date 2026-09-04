import * as React from "react";

export interface CheckboxProps {
  /** Checked state (controlled). @default false */
  checked?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  className?: string;
  /** Label content. */
  children?: React.ReactNode;
}

/** Accent-filled checkbox with inline label. */
export function Checkbox(props: CheckboxProps): React.ReactElement;
