import { ReactNode } from "react";
import { OnClick } from "../types/onEvent";
import { AmatelasProps } from "./AmatelasProps";
interface AmatelasToggleMnuItemProps extends AmatelasProps {
    children?: ReactNode;
    isActive?: boolean;
    onClick?: OnClick<HTMLLIElement>;
}
export declare const AmatelasToggleMnuItem: (props: AmatelasToggleMnuItemProps) => JSX.Element;
export {};
//# sourceMappingURL=AmatelasToggleMenuItem.d.ts.map