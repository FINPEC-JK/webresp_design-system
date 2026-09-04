import * as React from "react";

export interface ImageThumbProps {
  /** Image URL. Omit + loading=true to show the skeleton state. */
  src?: string;
  alt?: string;
  /** Caption shown on hover overlay. */
  caption?: React.ReactNode;
  /** Secondary line under the caption (mono — IDs, filenames). */
  sub?: React.ReactNode;
  /** Corner status pill content, e.g. "needs_review". */
  badge?: React.ReactNode;
  /** Tone for the corner badge. @default "neutral" */
  badgeTone?: "ok" | "warn" | "danger" | "info" | "neutral" | "accent";
  /** Show shimmer skeleton instead of the image. @default false */
  loading?: boolean;
  /** Click handler — typically opens a Lightbox/ImageViewer. */
  onClick?: () => void;
  className?: string;
  style?: React.CSSProperties;
}

/**
 * Fixed-ratio image thumbnail with hover caption, corner status badge and
 * a zoom-in affordance.
 *
 * @startingPoint section="Media" subtitle="Thumbnail crop with hover caption & status badge" viewport="700x260"
 */
export function ImageThumb(props: ImageThumbProps): React.ReactElement;

export interface ImageThumbGridProps {
  children?: React.ReactNode;
  className?: string;
}

/** Responsive auto-fill grid for ImageThumb cards (min 150px per cell). */
export function ImageThumbGrid(props: ImageThumbGridProps): React.ReactElement;
