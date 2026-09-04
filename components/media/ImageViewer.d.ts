import * as React from "react";

export interface ViewerBox {
  /** Left offset, percent of image width (0-100). */
  x: number;
  /** Top offset, percent of image height (0-100). */
  y: number;
  /** Width, percent of image width. */
  w: number;
  /** Height, percent of image height. */
  h: number;
  /** Small tag rendered above the box, e.g. a count or id. */
  label?: React.ReactNode;
}

export interface ImageViewerProps {
  src: string;
  alt?: string;
  /** Bounding-box overlays (percent-based) — annotation/audit review. */
  boxes?: ViewerBox[];
  /** Status pill shown top-left, e.g. "Concluído". */
  badge?: React.ReactNode;
  badgeTone?: "ok" | "warn" | "danger" | "info" | "neutral" | "accent";
  /** Viewer height in px. @default 420 */
  height?: number;
  minZoom?: number;
  maxZoom?: number;
  /** Shows a close button top-right when provided (viewer used standalone, not in a Lightbox). */
  onClose?: () => void;
  className?: string;
}

/**
 * Pan & zoom image viewer with wheel-zoom, drag-to-pan, a +/-/reset
 * toolbar, and optional percent-based bounding-box overlays.
 *
 * @startingPoint section="Media" subtitle="Pan/zoom viewer with bounding-box overlay" viewport="700x420"
 */
export function ImageViewer(props: ImageViewerProps): React.ReactElement;
