import { Guard } from "./Guard";

export const isString: Guard<string> = (arg: unknown): arg is string => {
  return typeof arg === "string";
};