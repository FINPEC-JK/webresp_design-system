import * as React from "react";

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  children?: React.ReactNode;
}

/** Styled native select with the brand chevron and focus ring. */
export function Select(props: SelectProps): React.ReactElement;
