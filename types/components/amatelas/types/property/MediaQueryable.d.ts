export declare const mediaQueryTypes: readonly ["pc", "tab", "sp"];
export type MediaQueryType = typeof mediaQueryTypes[number];
export type MediaQueryableProperty<T> = {
    [mediaQueryType in MediaQueryType]?: T;
};
export type MediaQueryable<T> = T | MediaQueryableProperty<T>;
//# sourceMappingURL=MediaQueryable.d.ts.map