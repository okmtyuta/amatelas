import { MediaQueryType } from "../property/MediaQueryable";
import { Guard } from "./Guard";
export type MediaQueryableProperty<T> = {
    [mediaQueryType in MediaQueryType]?: T;
};
export declare const isMediaQuery: Guard<MediaQueryableProperty<any>>;
//# sourceMappingURL=isMediaQuery.d.ts.map