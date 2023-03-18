import { ReactNode } from "react";
import { AmatelasProps } from "./AmatelasProps";
interface AmatelasGithubCardProps extends AmatelasProps {
    children?: ReactNode;
    repository: string;
    url: string;
    description: string;
}
export declare const AmatelasGithubCard: (props: AmatelasGithubCardProps) => JSX.Element;
export {};
//# sourceMappingURL=AmatelasGithubCard.d.ts.map