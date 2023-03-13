import { Guard } from "./Guard";
import { isString } from "./isString";

export const isStringArray: Guard<string[]> = (
  arg: unknown
): arg is string[] => {
  const stringArray = arg as string[];
  return Array.isArray(stringArray) && stringArray.every(isString);
};
