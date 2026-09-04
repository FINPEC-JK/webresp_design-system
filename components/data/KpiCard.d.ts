import * as React from "react";

export interface KpiTrend {
  /** Direction — colors the value green/red. */
  dir: "up" | "down";
  /** Short trend label, e.g. "+8,2%". */
  label: React.ReactNode;
}

/**
 * Dashboard KPI stat card.
 */
export interface KpiCardProps {
  /** Metric name. */
  label: React.ReactNode;
  /** The figure (string or number). */
  value: React.ReactNode;
  /** Currency prefix rendered tight before the value, e.g. "R$". */
  prefix?: React.ReactNode;
  /** Optional unit suffix, e.g. "bi" — rendered with a gap after the value. */
  unit?: React.ReactNode;
  /** Optional inline-SVG icon (tinted by tone). */
  icon?: React.ReactNode;
  /** Icon tint. @default "primary" */
  tone?: "primary" | "accent" | "info" | "ok" | "warn" | "danger" | "neutral";
  /** Footer trend chip. */
  trend?: KpiTrend;
  /** Footer caption after the trend. */
  foot?: React.ReactNode;
  className?: string;
}

export function KpiCard(props: KpiCardProps): React.ReactElement;
