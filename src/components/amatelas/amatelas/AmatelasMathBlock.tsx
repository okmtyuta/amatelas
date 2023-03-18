import { useEffect, useRef } from "react";
import katex from "katex";
import "katex/dist/katex.css";
import "../style/math.css";
import colors, { themeColor } from "../configs/color";
import { TelasBox } from "../telas/TelasBox";
import { AmatelasProps } from "./AmatelasProps";

const DISPLAY_ENVIRONMENTS = ["align", "equation"];
const BEGIN_AND_END_MATCHER: RegExp = /(\\begin\{\w+\}[\s\S]*?\\end\{\w+\})/g;
const DOLLAR_MATCHER: RegExp = /\$([\s\S]*?)\$/g;
const ENVIRONMENTAL_MATCHER: RegExp = /\\begin\{(\w+?)\}[\s\S]*?\\end\{(\w+)\}/;

/**
 * LaTex形式の文字列を入力してKaTexをレンダリングするコンポーネントの配列を返す / Input LaTex-style string and return Array of component rendering KaTex
 * @module katexParser
 * @param {string} mathString - LaTex形式の文字列 / LaTex-style string
 * @return {JSX.Element[]} - KaTexをレンダリングするコンポーネントの配列 / Array of component rendering KaTex
 */
export const katexParser = (mathString: string): JSX.Element[] => {
  const mathSegments: JSX.Element[] = [];
  const splitMathStrings: string[] = mathString.split(DOLLAR_MATCHER);

  for (let i = 0; i < splitMathStrings.length; i++) {
    if (i % 2 === 1) {
      mathSegments.push(
        <Katex key={crypto.randomUUID()} equation={splitMathStrings[i]} />
      );
      continue;
    }

    const beginAndEndMatches = splitMathStrings[i].split(BEGIN_AND_END_MATCHER);
    for (let j = 0; j < beginAndEndMatches.length; j++) {
      const environmentMatch = beginAndEndMatches[j].match(
        ENVIRONMENTAL_MATCHER
      );

      if (!environmentMatch) {
        mathSegments.push(
          <span key={crypto.randomUUID()}>{beginAndEndMatches[j]}</span>
        );
        continue;
      }

      const beginEnvironment = environmentMatch[1];
      const endEnvironment = environmentMatch[2];

      if (beginEnvironment !== endEnvironment) {
        console.error(
          `ENVIRONMENTAL ERROR: ${beginEnvironment} and ${endEnvironment} is not consistent.`
        );
        mathSegments.push(
          <Katex
            key={crypto.randomUUID()}
            equation={beginAndEndMatches[j]}
            display={false}
          />
        );
        continue;
      }

      const environment = beginEnvironment;

      mathSegments.push(
        <Katex
          key={crypto.randomUUID()}
          equation={beginAndEndMatches[j]}
          display={DISPLAY_ENVIRONMENTS.includes(environment)}
        />
      );
    }
  }

  return mathSegments;
};

interface KatexProps {
  equation: string;
  display?: boolean;
}

export const Katex = (props: KatexProps) => {
  const katexElementRef = useRef(null);

  useEffect(() => {
    const katexElement = katexElementRef.current;

    if (katexElement !== null) {
      katex.render(props.equation, katexElement, {
        displayMode: props.display,
        errorColor: themeColor.primary,
        output: "html",
        strict: "warn",
        throwOnError: false,
        trust: false,
      });
    }
  }, [props.equation]);
  return <span ref={katexElementRef} />;
};

interface AmatelasMathBlockProps extends AmatelasProps {
  mathString: string; // LaTex形式の文字列 / LaTex-style string
}

export const AmatelasMathBlock = (props: AmatelasMathBlockProps) => {
  const mathSegments = katexParser(props.mathString);
  return (
    <TelasBox ama={props.ama}>
      {mathSegments.map((mathSegment) => {
        return mathSegment;
      })}
    </TelasBox>
  );
};
