import { ReactNode } from "react";
import { AmatelasFunctionalComponentProps } from "./functional/AmatelasFunctionalComponentProps";
type AlertType = "error" | "warning" | "info" | "success";
interface AmatelasAlertProps extends AmatelasFunctionalComponentProps {
    children?: ReactNode;
    alertType?: AlertType;
}
export declare const AmatelasAlert: (props: AmatelasAlertProps) => JSX.Element;
export {};
//# sourceMappingURL=AmatelasAlert.d.ts.map