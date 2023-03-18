import { AlertType } from "../types/property/components/Alert";
type AlertColor = {
    [alertType in AlertType]: {
        icon: string;
        color: string;
        backgroundColor: string;
    };
};
export declare const alertColor: AlertColor;
export declare const themeColor: {
    primary: string;
    secondary: string;
    tertiary: string;
};
declare const colors: {
    themeColor: string;
    charColor: string;
    lightCharColor: string;
    captionCharColor: string;
    backgroundLightGray: string;
    lineGray: string;
    white: string;
    black: string;
    code: {
        operator: string;
        string: string;
        number: string;
        variable: string;
    };
};
export default colors;
//# sourceMappingURL=color.d.ts.map