import { ReactNode } from "react";
import { AmatelasFunctionalComponentProps } from "./functional/AmatelasFunctionalComponentProps";
interface AmatelasSlideMenuProps extends AmatelasFunctionalComponentProps {
    isShow: boolean;
    setIsShow: React.Dispatch<React.SetStateAction<boolean>>;
    children?: ReactNode;
}
export declare const AmatelasSlideMenu: (props: AmatelasSlideMenuProps) => JSX.Element;
export {};
//# sourceMappingURL=AmatelasSlideMenu.d.ts.map