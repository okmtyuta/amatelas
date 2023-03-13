import { css } from "styled-components";
import { mediaQueriedFontSize } from "../../function/style/mediaQueryableFontSize";
import { mq } from "../../function/style/mq";
import { isMediaQuery } from "../../types/guards";
import { Ama, MediaQueryType } from "../../types/property";
import { PseudoAma } from "../../types/property/Ama";
import { ConfigurableProperty } from "../../types/property/ConfigurableProperty";
import { ConfigurablePseudoProperty } from "../../types/property/ConfigurablePseudoProperty";
import { TelasProps } from "../../types/property/TelasProps";
import { mapPropertyValue } from "./mapPropertyValue";

const mapEveryPropertyValue = (ama: Ama) => {
  const mapped = (Object.keys(ama) as ConfigurableProperty[]).map((key) => {
    const propertyValue = ama[key];

    if (isMediaQuery(propertyValue)) {
      const mediaQueryTypes = Object.keys(propertyValue) as MediaQueryType[];
      return css`
        ${mediaQueryTypes.map((mediaQueryType) => {
          return mq[mediaQueryType]`
            ${mapPropertyValue(key, propertyValue[mediaQueryType])};
          `;
        })}
      `;
    }

    return mapPropertyValue(key, propertyValue);
  });

  return mapped;
};

const mapEveryPseudoPropertyValue = (pseudoAma: PseudoAma) => {
  const mapped = (Object.keys(pseudoAma) as ConfigurablePseudoProperty[]).map(
    (pseudo) => {
      const ama = pseudoAma[pseudo];
      if (!ama) {
        return "";
      }

      return css`
        :${pseudo} {
          ${mapEveryPropertyValue(ama)}
        }
      `;
    }
  );

  return mapped;
};

/**
 * デフォルトのスタイリングを展開する
 * @returns
 */
export const composeTelas = () => {
  return css<TelasProps>`
    ${(props) => {
      const ama = props.ama;
      if (!ama) {
        return "";
      }

      return css`
        ${mapEveryPropertyValue(ama)}
      `;
    }}

    ${(props) => {
      const pseudoAma = props.pseudoAma;
      if (!pseudoAma) {
        return "";
      }

      return css`
        ${mapEveryPseudoPropertyValue(pseudoAma)}
      `;
    }}

    ${(props) => {
      if (props.fontSizeType) {
        return css`
          ${mediaQueriedFontSize(props.fontSizeType)}
        `;
      }
    }}
  `;
};
