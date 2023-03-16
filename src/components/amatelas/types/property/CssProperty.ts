import { Keyframes } from "styled-components";

export type DisplayProperty =
  | "block"
  | "grid"
  | "inline-block"
  | "flex"
  | "none";
export type FlexDirectionProperty = "row" | "column";
export type GridAutoFlowProperty = "row" | "column";
export type AlignContentProperty =
  | "center"
  | "flexStart"
  | "flexEnd"
  | "spaceAround"
  | "spaceBetween"
  | "stretch";
export type JustifyContentProperty =
  | "center"
  | "flex-start"
  | "flex-end"
  | "space-around"
  | "space-between"
  | "space-evenly";
export type AlignItemsProperty =
  | "center"
  | "flexStart"
  | "flexEnd"
  | "stretch"
  | "baseline";
export type CursorProperty =
  | "pointer"
  | "help"
  | "wait"
  | "crosshair"
  | "not-allowed"
  | "zoom-in"
  | "grab";
export type PositionProperty = "relative" | "absolute" | "fixed";
export type OverflowProperty = "scroll" | "hidden" | "visible" | "auto";
// type FillMode = "none" | "forwards" | "backwards" | "both";
export type AnimationProperty = {
  keyframes: Keyframes;
  duration: string;
  count: number;
  fillMode: string;
};
export type BoxSizingProperty = "content-box" | "border-box";

export const isAnimationProperty = (arg: unknown): arg is AnimationProperty => {
  if (typeof arg !== "object" || !arg) {
    return false;
  }

  return (
    "keyframes" in arg ||
    "duration" in arg ||
    "count" in arg ||
    "fullMode" in arg
  );
};
