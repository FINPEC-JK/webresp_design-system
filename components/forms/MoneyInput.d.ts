import * as React from "react";

export interface MoneyInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "value" | "defaultValue" | "onChange"> {
  /** Mask kind. "currency" → R$0,00 · "percent" → 0,00%. @default "currency" */
  mask?: "currency" | "percent";
  /** Decimal places kept. @default 2 */
  decimals?: number;
  /** Seed value (a number) for uncontrolled use. */
  defaultValue?: number | null;
  /** Controlled numeric value. */
  value?: number;
  /** Fires with the parsed numeric value on every edit. */
  onValueChange?: (value: number) => void;
  className?: string;
}

/**
 * Masked numeric input for monetary and percentage fields — digits fill
 * right-to-left, decimals always respected, mask visible when empty.
 */
export function MoneyInput(props: MoneyInputProps): React.ReactElement;
