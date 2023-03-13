import { Guard } from "./Guard";
import { isStringArray } from "./isStringArray";

export const isStringMatrix: Guard<string[][]> = (
  arg: unknown
): arg is string[][] => {
  const stringMatrix = arg as string[][];
  return Array.isArray(stringMatrix) && stringMatrix.every(isStringArray);
};
