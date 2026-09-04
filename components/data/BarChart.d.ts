import * as React from "react";

export interface BarDatum {
  label: React.ReactNode;
  value: number;
}

export interface BarChartProps {
  /** Series data; bars scale to the largest value. */
  data: BarDatum[];
  /** Chart height in px. @default 120 */
  height?: number;
  className?: string;
}

/** Minimal, sober bar chart — soft accent track with solid accent fill. */
export function BarChart(props: BarChartProps): React.ReactElement;
