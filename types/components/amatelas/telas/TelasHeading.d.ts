import { TelasProps } from "../types/property/TelasProps";
import { ReactNode } from "react";
import { Ama } from "../types/property";
type Heading = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
interface TelasHeadingProps extends TelasProps {
    children?: ReactNode;
    as?: Heading;
    ama?: Ama;
}
export declare const TelasHeading: (props: TelasHeadingProps) => JSX.Element;
export {};
//# sourceMappingURL=TelasHeading.d.ts.map