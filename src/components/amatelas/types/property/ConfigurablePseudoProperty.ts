export const configurablePseudoProperties = [
  "hover",
  "target",
  "active",
  "checked",
  "focus",
] as const;

export type ConfigurablePseudoProperty =
  typeof configurablePseudoProperties[number];