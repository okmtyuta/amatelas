import { Guard } from "./Guard";

export const isArrayOf: Guard<Element[]> = <Element>(
  arg: unknown,
  ...guards: Guard<Element>[]
): arg is Element[] => {
  const array = arg as unknown[];
  if (
    array.every((item) => {
      const isElement = guards.some((guard) => {
        return guard(item);
      });

      return isElement;
    })
  ) {
    return true;
  }
  return false;
};
