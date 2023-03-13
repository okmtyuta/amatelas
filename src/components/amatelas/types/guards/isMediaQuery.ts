import { MediaQueryType } from "../property/MediaQueryable";
import { Guard } from "./Guard";

export type MediaQueryableProperty<T> = {
  [mediaQueryType in MediaQueryType]?: T;
};

export const isMediaQuery: Guard<MediaQueryableProperty<any>> = (
  params: unknown
): params is MediaQueryableProperty<any> => {
  const mediaQueryParams = params as MediaQueryableProperty<any>;

  if (typeof params !== "object") {
    return false;
  }

  return (
    "pc" in mediaQueryParams ||
    "tab" in mediaQueryParams ||
    "sp" in mediaQueryParams
  );
};
