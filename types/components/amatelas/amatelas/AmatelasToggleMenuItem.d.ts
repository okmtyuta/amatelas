import { ReactNode } from "react";
import { OnClick } from "../types/onEvent";
import { AmatelasFunctionalComponentProps } from "./functional/AmatelasFunctionalComponentProps";
interface AmatelasToggleMnuItemProps extends AmatelasFunctionalComponentProps {
    children?: ReactNode;
    isActive?: boolean;
    onClick?: OnClick;
}
export declare const AmatelasToggleMnuItem: (props: AmatelasToggleMnuItemProps) => JSX.Element;
export {};
//# sourceMappingURL=AmatelasToggleMenuItem.d.ts.map