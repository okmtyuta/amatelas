import { css, ThemedStyledProps } from "styled-components";
import { mediaQueriedFontSize } from "../../function/style/mediaQueryableFontSize";
import { mq } from "../../function/style/mq";
import { isMediaQuery } from "../../types/guards";
import { Ama, MediaQueryType } from "../../types/property";
import { ChildAma, PseudoAma } from "../../types/property/Ama";
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
        &: ${pseudo} {
          ${mapEveryPropertyValue(ama)}
        }
      `;
    }
  );

  return mapped;
};

const mapEveryChildPropertyValue = (childAma: ChildAma) => {
  const mapped = (Object.keys(childAma) as string[]).map((child) => {
    const ama = childAma[child];
    if (!ama) {
      return "";
    }

    return css`
      ${child} {
        ${mapEveryPropertyValue(ama)}
      }
    `;
  });

  return mapped;
};

const mapAma = (props: ThemedStyledProps<TelasProps, any>) => {
  const ama = props.ama;
  if (!ama) {
    return "";
  }

  return css`
    ${mapEveryPropertyValue(ama)}
  `;
};

const mapPseudoAma = (props: ThemedStyledProps<TelasProps, any>) => {
  const pseudoAma = props.pseudoAma;
  if (!pseudoAma) {
    return "";
  }

  return css`
    ${mapEveryPseudoPropertyValue(pseudoAma)}
  `;
};

const mapChildAma = (props: ThemedStyledProps<TelasProps, any>) => {
  const childAma = props.childAma;
  if (!childAma) {
    return "";
  }

  return css`
    ${mapEveryChildPropertyValue(childAma)}
  `;
};

const mapFontSizeType = (props: ThemedStyledProps<TelasProps, any>) => {
  if (props.fontSizeType) {
    return css`
      ${mediaQueriedFontSize(props.fontSizeType)}
    `;
  }
};

/**
 * デフォルトのスタイリングを展開する
 * @returns
 */
export const composeTelas = (props: ThemedStyledProps<TelasProps, any>) => {
  return css<TelasProps>`
    ${mapAma(props)}

    ${mapPseudoAma(props)}

    ${mapChildAma(props)}

    ${mapFontSizeType(props)}
  `;
};
