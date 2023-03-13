import { Guard } from "./Guard";

export const isNumber: Guard<number> = (arg: unknown): arg is number => {
  return typeof arg === "number";
};
