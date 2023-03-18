import { Keyframes } from "styled-components";
export type DisplayProperty = "block" | "grid" | "inline-block" | "flex" | "none";
export type FlexDirectionProperty = "row" | "column";
export type GridAutoFlowProperty = "row" | "column";
export type AlignContentProperty = "center" | "flexStart" | "flexEnd" | "spaceAround" | "spaceBetween" | "stretch";
export type JustifyContentProperty = "center" | "flex-start" | "flex-end" | "space-around" | "space-between" | "space-evenly";
export type AlignItemsProperty = "center" | "flexStart" | "flexEnd" | "stretch" | "baseline";
export type CursorProperty = "pointer" | "help" | "wait" | "crosshair" | "not-allowed" | "zoom-in" | "grab";
export type PositionProperty = "relative" | "absolute" | "fixed";
export type OverflowProperty = "scroll" | "hidden" | "visible" | "auto";
export type AnimationProperty = {
    keyframes: Keyframes;
    duration: string;
    count: number;
    fillMode: string;
};
export type BoxSizingProperty = "content-box" | "border-box";
export declare const isAnimationProperty: (arg: unknown) => arg is AnimationProperty;
//# sourceMappingURL=CssProperty.d.ts.map