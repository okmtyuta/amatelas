/// <reference types="react" />
import { AmatelasProps } from "./AmatelasProps";
interface MenuItem {
    content: JSX.Element;
    isActive: boolean;
    key: string;
}
interface AmatelasAccordionMenuProps extends AmatelasProps {
    content: string;
    menuItems: MenuItem[];
}
export declare const AmatelasAccordionMenu: (props: AmatelasAccordionMenuProps) => JSX.Element;
export {};
//# sourceMappingURL=AmatelasAccordionMenu.d.ts.map