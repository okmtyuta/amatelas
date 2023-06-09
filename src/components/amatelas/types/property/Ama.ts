import { MediaQueryable } from "./MediaQueryable";
import {
  DisplayProperty,
  FlexDirectionProperty,
  GridAutoFlowProperty,
  AlignContentProperty,
  JustifyContentProperty,
  AlignItemsProperty,
  CursorProperty,
  PositionProperty,
  AnimationProperty,
  OverflowProperty,
  BoxSizingProperty,
} from "./CssProperty";
import { ConfigurablePseudoProperty } from "./ConfigurablePseudoProperty";

export interface Ama {
  display?: MediaQueryable<DisplayProperty>;
  flexDirection?: MediaQueryable<FlexDirectionProperty>;
  gridAutoFlow?: MediaQueryable<GridAutoFlowProperty>;
  gridTemplateAreas?: MediaQueryable<string[][]>;
  gridTemplateColumns?: MediaQueryable<string[] | string>;
  gridTemplateRows?: MediaQueryable<string[] | string>;
  gridArea?: MediaQueryable<string>;
  alignContent?: MediaQueryable<AlignContentProperty>;
  justifyContent?: MediaQueryable<JustifyContentProperty>;
  alignItems?: MediaQueryable<AlignItemsProperty>;
  gap?: MediaQueryable<string>;
  margin?: MediaQueryable<string>;
  padding?: MediaQueryable<string>;
  width?: MediaQueryable<string>;
  maxWidth?: MediaQueryable<string>;
  minWidth?: MediaQueryable<string>;
  height?: MediaQueryable<string>;
  minHeight?: MediaQueryable<string>;
  maxHeight?: MediaQueryable<string>;
  fontSize?: MediaQueryable<string>;
  fontFamily?: MediaQueryable<string>;
  fontWeight?: MediaQueryable<string>;
  color?: MediaQueryable<string>;
  backgroundColor?: MediaQueryable<string>;
  borderRadius?: MediaQueryable<string>;
  border?: MediaQueryable<string>;
  borderTop?: MediaQueryable<string>;
  borderRight?: MediaQueryable<string>;
  borderBottom?: MediaQueryable<string>;
  borderLeft?: MediaQueryable<string>;
  outline?: MediaQueryable<string>;
  transition?: MediaQueryable<string>;
  textDecoration?: MediaQueryable<string>;
  textDecorationColor?: MediaQueryable<string>;
  listStyle?: MediaQueryable<string>;
  textAlign?: MediaQueryable<string>;
  cursor?: MediaQueryable<CursorProperty>;
  position?: MediaQueryable<PositionProperty>;
  top?: MediaQueryable<string>;
  right?: MediaQueryable<string>;
  bottom?: MediaQueryable<string>;
  left?: MediaQueryable<string>;
  zIndex?: MediaQueryable<string>;
  overflowX?: MediaQueryable<OverflowProperty>;
  overflowY?: MediaQueryable<OverflowProperty>;
  transform?: MediaQueryable<string>;
  visibility?: MediaQueryable<string>;
  opacity?: MediaQueryable<string>;
  filter?: MediaQueryable<string>;
  backdropFilter?: MediaQueryable<string>;
  boxShadow?: MediaQueryable<string>;
  animation?: MediaQueryable<AnimationProperty>;
  content?: MediaQueryable<string>;
  boxSizing?: MediaQueryable<BoxSizingProperty>;
}

export type PseudoAma = {
  [key in ConfigurablePseudoProperty]?: Ama;
};

export type ChildAma = {
  [key in string]?: Ama
};
