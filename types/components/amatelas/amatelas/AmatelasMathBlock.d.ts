/// <reference types="react" />
import "katex/dist/katex.css";
import "../style/math.css";
import { AmatelasProps } from "./AmatelasProps";
/**
 * LaTex形式の文字列を入力してKaTexをレンダリングするコンポーネントの配列を返す / Input LaTex-style string and return Array of component rendering KaTex
 * @module katexParser
 * @param {string} mathString - LaTex形式の文字列 / LaTex-style string
 * @return {JSX.Element[]} - KaTexをレンダリングするコンポーネントの配列 / Array of component rendering KaTex
 */
export declare const katexParser: (mathString: string) => JSX.Element[];
interface KatexProps {
    equation: string;
    display?: boolean;
}
export declare const Katex: (props: KatexProps) => JSX.Element;
interface AmatelasMathBlockProps extends AmatelasProps {
    mathString: string;
}
export declare const AmatelasMathBlock: (props: AmatelasMathBlockProps) => JSX.Element;
export {};
//# sourceMappingURL=AmatelasMathBlock.d.ts.map