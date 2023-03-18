import { ReactNode } from "react";
import { OnClick } from "../types/onEvent";
import { AmatelasProps } from "./AmatelasProps";
interface AmatelasRadioButtonProps extends AmatelasProps {
    active?: boolean;
    children?: ReactNode;
    onClick?: OnClick<HTMLDivElement>;
    radius?: number;
    color?: string;
}
export declare const AmatelasRadioButton: (props: AmatelasRadioButtonProps) => JSX.Element;
export {};
//# sourceMappingURL=AmatelasRadioButton.d.ts.map