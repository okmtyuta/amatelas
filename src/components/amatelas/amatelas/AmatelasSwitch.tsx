import { useState } from "react";
import colors, { themeColor } from "../configs/color";
import { TelasBox } from "../telas/TelasBox";
import { OnClick } from "../types/onEvent";
import { Ama } from "../types/property";
import { AmatelasProps } from "./AmatelasProps";

interface AmatelasSwitchProps extends AmatelasProps {
  active: boolean;
  color?: string;
  onClick?: OnClick<HTMLDivElement>;
  width?: number;
  height?: number;
}

const BALL_RADIUS_RATIO = 1.3

const generateAmatelasSwitchAma = (
  width: number,
  height: number,
  color: string
) => {
  const ballRadius = (height * BALL_RADIUS_RATIO) / 2;
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
    backgroundColor: colors.gray,
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
  const width = props.width || 50;
  const height = props.height || 20;

  const { activeAma, inactiveAma, activeBeforeAma, inactiveBeforeAma } =
    generateAmatelasSwitchAma(width, height, color);
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
