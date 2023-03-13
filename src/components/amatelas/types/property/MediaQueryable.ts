export const mediaQueryTypes = ["pc", "tab", "sp"] as const;
export type MediaQueryType = typeof mediaQueryTypes[number];
export type MediaQueryableProperty<T> = {
  [mediaQueryType in MediaQueryType]?: T;
};
export type MediaQueryable<T> = T | MediaQueryableProperty<T>;
