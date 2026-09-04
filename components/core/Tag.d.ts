import * as React from "react";

export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Optional leading inline-SVG icon. */
  icon?: React.ReactNode;
  children?: React.ReactNode;
}

/** Outlined metadata tag — categories, filters, attributes. Lower emphasis than Pill. */
export function Tag(props: TagProps): React.ReactElement;
