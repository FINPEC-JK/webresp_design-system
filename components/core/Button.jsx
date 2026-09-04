import React from "react";

/**
 * FINPEC primary button. Renders the .fp-btn class layer from the
 * design system stylesheet. Use `variant` for intent and `size`
 * for density; pass an SVG via `icon` to lead with a glyph.
 */
export function Button({
  variant = "primary",
  size = "md",
  icon = null,
  iconRight = null,
  block = false,
  type = "button",
  className = "",
  children,
  ...rest
}) {
  const cls = [
    "fp-btn",
    `fp-btn-${variant}`,
    size === "sm" ? "fp-btn-sm" : size === "lg" ? "fp-btn-lg" : "",
    !children ? "fp-btn-icon" : "",
    block ? "fp-btn-block" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button type={type} className={cls} {...rest}>
      {icon}
      {children}
      {iconRight}
    </button>
  );
}
