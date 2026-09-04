import * as React from "react";

export interface RadioCardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Bold title line. */
  title: React.ReactNode;
  /** Optional description below the title. */
  desc?: React.ReactNode;
  /** Selected state. @default false */
  selected?: boolean;
  /** Click / select handler. */
  onSelect?: () => void;
}

/** Radio choice presented as a bordered, explained card. */
export function RadioCard(props: RadioCardProps): React.ReactElement;
