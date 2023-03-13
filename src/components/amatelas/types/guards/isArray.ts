import { Guard } from "./Guard";

export const isArray: Guard<unknown[]> = (arg: unknown): arg is unknown[] => {
  return Array.isArray(arg);
};