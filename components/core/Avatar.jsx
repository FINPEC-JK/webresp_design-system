import React from "react";

/**
 * Avatar — gradient initials chip. Pass `src` for a photo, otherwise
 * `name` initials render on the brand gradient. `size` in px.
 */
export function Avatar({ name = "", src = null, size = 36, className = "", ...rest }) {
  const initials = name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
  const style = { width: size, height: size, fontSize: Math.round(size * 0.36) };
  return (
    <span className={["fp-avatar", className].filter(Boolean).join(" ")} style={style} {...rest}>
      {src ? (
        <img src={src} alt={name} style={{ width: "100%", height: "100%", borderRadius: "50%", objectFit: "cover" }} />
      ) : (
        initials
      )}
    </span>
  );
}
