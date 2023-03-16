export const configurablePseudoProperties = [
  "hover",
  "target",
  "active",
  "checked",
  "focus",
  "before",
  "after",
] as const;

export type ConfigurablePseudoProperty =
  typeof configurablePseudoProperties[number];
