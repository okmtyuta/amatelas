import { useState } from "react";
import { themeColor } from "../configs/color";
import { theming } from "../function/style/opacity";
import { TelasBox } from "../telas/TelasBox";
import { OnClick } from "../types/onEvent";
import { Ama } from "../types/property";
import { AmatelasProps } from "./AmatelasProps";

interface AmatelasSwitchProps extends AmatelasProps {
  active: boolean;
  color?: string;
  onClick?: OnClick<HTMLDivElement>;
}

const generateAmatelasSwitchAma = (
  width: number,
  height: number,
  color: string
) => {
  const ballRadius = (height * 1.3) / 2;
  const baseBeforeAma: Ama = {
    position: "absolute",
    top: "50%",
    boxShadow:
      "rgb(0 0 0 / 20%) 0px 2px 1px -1px, rgb(0 0 0 / 14%) 0px 1px 1px 0px, rgb(0 0 0 / 12%) 0px 1px 3px 0px;",
    content: `""`,
    height: `${ballRadius * 2}px`,
    width: `${ballRadius * 2}px`,
    borderRadius: "50%",
    backgroundColor: "white",
  };
  const baseAma: Ama = {
    position: "relative",
    height: `${height}px`,
    width: `${width}px`,
    borderRadius: `${height}px`,
  };

  const activeBeforeAma: Ama = {
    ...baseBeforeAma,
    margin: `-${ballRadius}px ${ballRadius}px`,
    transform: `translateX(${width - ballRadius * 2}px)`,
    transition: "0.5s",
  };
  const inactiveBeforeAma: Ama = {
    ...baseBeforeAma,
    margin: `-${ballRadius}px -${ballRadius}px`,
    transform: "translateX(0px)",
    transition: "0.5s",
  };
  const activeAma: Ama = {
    ...baseAma,
    backgroundColor: color,
    transition: "0.5s",
  };
  const inactiveAma: Ama = {
    ...baseAma,
    backgroundColor: theming(color, "secondary"),
    transition: "0.5s",
  };

  return {
    activeAma,
    inactiveAma,
    activeBeforeAma,
    inactiveBeforeAma,
  };
};

export const AmatelasSwitch = (props: AmatelasSwitchProps) => {
  const [active, setActive] = useState<boolean>(props.active);
  const color = props.color || themeColor.primary;

  const { activeAma, inactiveAma, activeBeforeAma, inactiveBeforeAma } =
    generateAmatelasSwitchAma(500, 20, color);
  const ama: Ama = active ? activeAma : inactiveAma;
  const beforeAma: Ama = active ? activeBeforeAma : inactiveBeforeAma;

  return (
    <TelasBox
      ama={ama}
      pseudoAma={{
        before: beforeAma,
      }}
      onClick={() => {
        setActive((prev) => !prev);
      }}
    />
  );
};
