/// <reference types="react" />
import { AmatelasProps } from "./AmatelasProps";
interface RequiredToggleItem {
    key: string;
    active: boolean;
}
interface RadioButton extends RequiredToggleItem {
}
interface AmatelasRadioButtonGroupProps extends AmatelasProps {
    radioButtons: RadioButton[];
    multiple: boolean;
    color?: string;
}
export declare const AmatelasRadioButtonGroup: (props: AmatelasRadioButtonGroupProps) => JSX.Element;
export {};
//# sourceMappingURL=AmatelasRadioButtonGroup.d.ts.map