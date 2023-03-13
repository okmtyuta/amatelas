import { css } from "styled-components";
import breakPoints from "../../configs/breakPoint";
import { FontSizeType, fontSize } from "../../configs/font";

export const mediaQueriedFontSize = (fontSizeType: FontSizeType) => {
  return css`
    @media screen and (min-width: ${breakPoints.pcMin}px) {
      font-size: ${fontSize[fontSizeType].desktop}px;
    }
    @media screen and (min-width: ${breakPoints.tabMin}px) and (max-width: ${breakPoints.tabMax}px) {
      font-size: ${fontSize[fontSizeType].mobile}px;
    }
    @media (max-width: ${breakPoints.spMax}px) {
      font-size: ${fontSize[fontSizeType].mobile}px;
    }
  `;
};
