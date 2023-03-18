import { ReactNode } from "react";
import { AlertType } from "../types/property/components/Alert";
import { AmatelasProps } from "./AmatelasProps";
interface AmatelasAlertProps extends AmatelasProps {
    children?: ReactNode;
    alertType?: AlertType;
}
export declare const AmatelasAlert: (props: AmatelasAlertProps) => JSX.Element;
export {};
//# sourceMappingURL=AmatelasAlert.d.ts.map