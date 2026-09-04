import * as React from "react";

export interface PagerProps {
  /** Current page, 1-based. @default 1 */
  page?: number;
  /** Total number of pages. @default 1 */
  totalPages?: number;
  /** Left-side caption; defaults to "Página X de Y". */
  label?: React.ReactNode;
  /** Page change handler. */
  onChange?: (page: number) => void;
  className?: string;
}

/** Table pagination control with prev/next and a truncated page list. */
export function Pager(props: PagerProps): React.ReactElement;
