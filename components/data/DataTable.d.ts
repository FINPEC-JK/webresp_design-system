import * as React from "react";

export interface DataColumn<Row = any> {
  /** Unique column key (also the row property read when no `render`). */
  key: string;
  /** Header label. */
  label: React.ReactNode;
  /** Right-align + tabular figures. @default false */
  num?: boolean;
  /** Fixed column width (CSS value). */
  width?: string;
  /** Custom cell renderer — return pills, money cells, actions, etc. */
  render?: (row: Row) => React.ReactNode;
}

/**
 * Column-driven data grid with sticky header and hover rows.
 */
export interface DataTableProps<Row = any> {
  columns: DataColumn<Row>[];
  rows: Row[];
  /** Tighter row padding. @default false */
  dense?: boolean;
  /** Row property used as React key. @default "id" */
  rowKey?: string;
  className?: string;
}

export function DataTable(props: DataTableProps): React.ReactElement;
