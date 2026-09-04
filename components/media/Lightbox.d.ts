import * as React from "react";

export interface ViewerBox {
  x: number;
  y: number;
  w: number;
  h: number;
  label?: React.ReactNode;
}

export interface LightboxProps {
  src: string;
  title?: React.ReactNode;
  sub?: React.ReactNode;
  boxes?: ViewerBox[];
  badge?: React.ReactNode;
  badgeTone?: "ok" | "warn" | "danger" | "info" | "neutral" | "accent";
  onClose: () => void;
  /** Show prev/next arrows when browsing a set. */
  onPrev?: (() => void) | null;
  onNext?: (() => void) | null;
}

/**
 * Fullscreen lightbox — dark scrim, header with title/subtitle, embeds
 * ImageViewer (zoom/pan + bounding boxes), prev/next across a set,
 * closes on scrim click / close button / Escape.
 *
 * @startingPoint section="Media" subtitle="Fullscreen lightbox with zoom & prev/next" viewport="900x600"
 */
export function Lightbox(props: LightboxProps): React.ReactElement;
