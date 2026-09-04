import React from "react";

/* ---- Masking helpers (right-to-left, decimal-safe) ---- */
function fmtDigits(digits, decimals) {
  const clean = (digits || "").replace(/\D/g, "");
  const padded = clean.padStart(decimals + 1, "0");
  const cut = padded.length - decimals;
  let intPart = padded.slice(0, cut).replace(/^0+(?=\d)/, "");
  const decPart = decimals > 0 ? padded.slice(cut) : "";
  intPart = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  return decimals > 0 ? intPart + "," + decPart : intPart;
}
function render(digits, mask, decimals) {
  const n = fmtDigits(digits, decimals);
  return mask === "percent" ? n + "%" : "R$" + n;
}
function digitsFromNumber(num, decimals) {
  if (num == null || num === "") return "";
  return String(Math.round(Number(num) * Math.pow(10, decimals)));
}

/**
 * Masked numeric input — currency (R$0,00) or percent (0,00%). Digits fill
 * from the RIGHT, always respecting the decimal places: typing 1 → 8 → 4
 * yields R$0,01 → R$0,18 → R$1,84. The mask is shown even when empty.
 * `onValueChange(number)` reports the parsed numeric value.
 */
export function MoneyInput({
  mask = "currency",
  decimals = 2,
  defaultValue = null,
  value,
  onValueChange,
  className = "",
  ...rest
}) {
  const controlled = value !== undefined;
  const [digits, setDigits] = React.useState(() => digitsFromNumber(defaultValue, decimals));
  const current = controlled ? digitsFromNumber(value, decimals) : digits;

  const handle = (e) => {
    const d = e.target.value.replace(/\D/g, "").replace(/^0+/, "");
    if (!controlled) setDigits(d);
    if (onValueChange) onValueChange(d ? parseInt(d, 10) / Math.pow(10, decimals) : 0);
  };

  return (
    <input
      inputMode="numeric"
      className={["fp-input", "fp-input-num", className].filter(Boolean).join(" ")}
      value={render(current, mask, decimals)}
      onChange={handle}
      {...rest}
    />
  );
}
