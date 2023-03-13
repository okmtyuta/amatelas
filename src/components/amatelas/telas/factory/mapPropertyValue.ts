import { css, keyframes } from "styled-components";
import {
  isMediaQuery,
  isString,
  isStringArray,
  isStringMatrix,
} from "../../types/guards";
import { MediaQueryType } from "../../types/property";
import { Ama } from "../../types/property/Ama";
import {
  configurableProperty,
  ConfigurableProperty,
} from "../../types/property/ConfigurableProperty";
import { isAnimationProperty } from "../../types/property/CssProperty";
import { Valueof } from "../../types/utils";

/**
 * CSSプロパティ名に値をマッピングして返す
 * @param property ConfigurableCssProperty: マッピングしたいプロパティ名
 * @param propertyValue valueof<MediaQueryableProperties>: 対応する値
 * @returns property: propertyValueのようにCSS形式でマッピングした文字列
 */
export const mapPropertyValue = (
  property: ConfigurableProperty,
  propertyValue?: Valueof<Ama>
) => {
  // stでプロパティの値がセットされていない場合
  if (typeof propertyValue === "undefined") {
    return "";
  }

  // propertyValueの方に応じてマッピングの方法を変える
  if (isString(propertyValue)) {
    return css`
      ${configurableProperty[property]}: ${propertyValue};
    `;
  }
  if (isStringArray(propertyValue)) {
    return css`
      ${configurableProperty[property]}: ${propertyValue.join(" ")};
    `;
  }
  if (isStringMatrix(propertyValue)) {
    return css`
      ${configurableProperty[property]}: ${propertyValue
        .map((array) => `"${array.join(" ")}"`)
        .join(" ")};
    `;
  }

  if (isAnimationProperty(propertyValue)) {
    return css`
      ${property}: ${propertyValue.keyframes} ${propertyValue.duration} ${propertyValue.count};
    `;
  }
};
