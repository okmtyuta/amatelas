/// <reference types="react" />
import { AmatelasFunctionalComponentProps } from "./functional/AmatelasFunctionalComponentProps";
interface MenuItem {
    content: JSX.Element;
    isActive: boolean;
    key: string;
}
interface AmatelasAccordionMenuProps extends AmatelasFunctionalComponentProps {
    content: string;
    menuItems: MenuItem[];
}
export declare const AmatelasAccordionMenu: (props: AmatelasAccordionMenuProps) => JSX.Element;
export {};
//# sourceMappingURL=AmatelasAccordionMenu.d.ts.map