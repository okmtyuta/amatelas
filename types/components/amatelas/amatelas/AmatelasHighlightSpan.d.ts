import { ReactNode } from "react";
import { AmatelasFunctionalComponentProps } from "./functional/AmatelasFunctionalComponentProps";
interface AmatelasWarningBoxProps extends AmatelasFunctionalComponentProps {
    children?: ReactNode;
    type?: "marker" | "underline";
}
export declare const AmatelasHighlightSpan: (props: AmatelasWarningBoxProps) => JSX.Element;
export {};
//# sourceMappingURL=AmatelasHighlightSpan.d.ts.map