import { ReactNode } from "react";
import { TelasBox } from "../telas/TelasBox";
import { Ama } from "../types/property";
import { AmatelasProps } from "./AmatelasProps";

interface AmatelasPaperProps extends AmatelasProps {
  children?: ReactNode;
}

export const AmatelasPaper = (props: AmatelasPaperProps) => {
  const ama: Ama = {
    borderRadius: "4px",
    boxShadow:
      "rgb(0 0 0 / 20%) 0px 2px 1px -1px, rgb(0 0 0 / 14%) 0px 1px 1px 0px, rgb(0 0 0 / 12%) 0px 1px 3px 0px",
    padding: "12px",
    ...props.ama,
  };
  return (
    <TelasBox ama={ama}>
      {props.children}
    </TelasBox>
  );
};
