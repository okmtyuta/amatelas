import { ReactNode } from "react";
import colors, { themeColor } from "../configs/color";
import { TelasListItem } from "../telas/TelasListItem";
import { OnClick } from "../types/onEvent";
import { Ama } from "../types/property";
import { PseudoAma } from "../types/property/Ama";
import { AmatelasProps } from "./AmatelasProps";

interface AmatelasToggleMnuItemProps extends AmatelasProps {
  children?: ReactNode;
  isActive?: boolean;
  onClick?: OnClick<HTMLLIElement>;
}

export const AmatelasToggleMnuItem = (props: AmatelasToggleMnuItemProps) => {
  const isActive = props.isActive || false;
  const ama: Ama = isActive
    ? {
        backgroundColor: themeColor.primary + "1F",
        color: themeColor.primary,
        transition: "0.5s",
        ...props.ama,
      }
    : {
        transition: "0.5s",
        ...props.ama,
      };
  const pseudoAma: PseudoAma = {
    hover: {
      backgroundColor: colors.charColor + "1F",
    },
    ...props.pseudoAma,
  };
  return (
    <TelasListItem onClick={props.onClick} ama={ama} pseudoAma={pseudoAma}>
      {props.children}
    </TelasListItem>
  );
};
