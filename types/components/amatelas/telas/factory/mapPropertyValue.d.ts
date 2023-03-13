import { Ama } from "../../types/property/Ama";
import { ConfigurableProperty } from "../../types/property/ConfigurableProperty";
import { Valueof } from "../../types/utils";
/**
 * CSSプロパティ名に値をマッピングして返す
 * @param property ConfigurableCssProperty: マッピングしたいプロパティ名
 * @param propertyValue valueof<MediaQueryableProperties>: 対応する値
 * @returns property: propertyValueのようにCSS形式でマッピングした文字列
 */
export declare const mapPropertyValue: (property: ConfigurableProperty, propertyValue?: Valueof<Ama>) => import("styled-components").FlattenSimpleInterpolation | "" | undefined;
//# sourceMappingURL=mapPropertyValue.d.ts.map