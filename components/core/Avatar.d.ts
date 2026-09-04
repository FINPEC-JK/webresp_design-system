import * as React from "react";

export interface AvatarProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Full name — initials are derived when no `src` is given. */
  name?: string;
  /** Optional image URL. */
  src?: string | null;
  /** Diameter in px. @default 36 */
  size?: number;
}

/** Circular avatar — photo, or initials on the FINPEC brand gradient. */
export function Avatar(props: AvatarProps): React.ReactElement;
