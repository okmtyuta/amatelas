import { ReactNode } from "react";
import { AmatelasProps } from "./AmatelasProps";
interface AmatelasSlideMenuProps extends AmatelasProps {
    isShow: boolean;
    setIsShow: React.Dispatch<React.SetStateAction<boolean>>;
    children?: ReactNode;
}
export declare const AmatelasSlideMenu: (props: AmatelasSlideMenuProps) => JSX.Element;
export {};
//# sourceMappingURL=AmatelasSlideMenu.d.ts.map