import { ReactNode } from "react";
import { AmatelasProps } from "./AmatelasProps";
interface AmatelasWarningBoxProps extends AmatelasProps {
    children?: ReactNode;
    type?: "marker" | "underline";
}
export declare const AmatelasHighlightSpan: (props: AmatelasWarningBoxProps) => JSX.Element;
export {};
//# sourceMappingURL=AmatelasHighlightSpan.d.ts.map