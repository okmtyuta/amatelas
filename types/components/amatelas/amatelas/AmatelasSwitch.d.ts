/// <reference types="react" />
import { OnClick } from "../types/onEvent";
import { AmatelasProps } from "./AmatelasProps";
interface AmatelasSwitchProps extends AmatelasProps {
    active: boolean;
    color?: string;
    onClick?: OnClick<HTMLDivElement>;
}
export declare const AmatelasSwitch: (props: AmatelasSwitchProps) => JSX.Element;
export {};
//# sourceMappingURL=AmatelasSwitch.d.ts.map