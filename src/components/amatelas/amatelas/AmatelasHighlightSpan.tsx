import { ReactNode } from "react";
import { Ama } from "../types/property";
import { TelasSpan } from "../telas/TelasSpan";
import colors from "../configs/color";
import { AmatelasFunctionalComponentProps } from "./functional/AmatelasFunctionalComponentProps";

interface AmatelasWarningBoxProps extends AmatelasFunctionalComponentProps {
  children?: ReactNode;
  type?: "marker" | "underline";
}

export const AmatelasHighlightSpan = (props: AmatelasWarningBoxProps) => {
  const type = props.type || "marker";
  const ama: Ama =
    type === "marker"
      ? {
          backgroundColor: colors.themeColor + "1F",
          color: colors.themeColor,
          padding: "0 4px",
          borderRadius: "4px",
          ...props.ama,
        }
      : type === "underline"
      ? {
          textDecoration: "underline",
          color: colors.themeColor,
          textDecorationColor: colors.themeColor,
          ...props.ama,
        }
      : {
          ...props.ama,
        };
  return <TelasSpan ama={ama}>{props.children}</TelasSpan>;
};
