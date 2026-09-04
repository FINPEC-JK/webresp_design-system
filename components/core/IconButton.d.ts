import * as React from "react";

export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
}

/** Transparent square icon button for chrome — topbar, table toolbars. */
export function IconButton(props: IconButtonProps): React.ReactElement;
