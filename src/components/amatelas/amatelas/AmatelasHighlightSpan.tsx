import { ReactNode } from "react";
import { Ama } from "../types/property";
import { TelasSpan } from "../telas/TelasSpan";
import colors, { themeColor } from "../configs/color";
import { AmatelasProps } from "./AmatelasProps";

interface AmatelasWarningBoxProps extends AmatelasProps {
  children?: ReactNode;
  type?: "marker" | "underline";
}

export const AmatelasHighlightSpan = (props: AmatelasWarningBoxProps) => {
  const type = props.type || "marker";
  const ama: Ama =
    type === "marker"
      ? {
          backgroundColor: themeColor.primary + "1F",
          color: themeColor.primary,
          padding: "0 4px",
          borderRadius: "4px",
          ...props.ama,
        }
      : type === "underline"
      ? {
          textDecoration: "underline",
          color: themeColor.primary,
          textDecorationColor: themeColor.primary,
          ...props.ama,
        }
      : {
          ...props.ama,
        };
  return <TelasSpan ama={ama}>{props.children}</TelasSpan>;
};
