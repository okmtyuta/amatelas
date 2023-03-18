import { ReactNode } from "react";
import { themeColor } from "../configs/color";
import { theming } from "../function/style/opacity";
import { TelasBox } from "../telas/TelasBox";
import { OnClick } from "../types/onEvent";
import { Ama } from "../types/property";
import { AmatelasProps } from "./AmatelasProps";

interface AmatelasRadioButtonProps extends AmatelasProps {
  active?: boolean;
  children?: ReactNode;
  onClick?: OnClick<HTMLDivElement>;
  radius?: number;
  color?: string;
}

const CENTER_BALL_RADIUS_RATE = 0.7;

const generateAmatelasRadioButtonAma = (radius: number, color: string) => {
  const ama: Ama = {
    position: "relative",
    width: `${radius * 2}px`,
    height: `${radius * 2}px`,
    padding: `${radius * 2 * 0.4}px`,
    borderRadius: "50%",
    transition: "0.3s",
  };

  const baseBeforeAma: Ama = {
    content: `""`,
    position: "absolute",
    left: "50%",
    top: "50%",
    width: `${radius * 2}px`,
    height: `${radius * 2}px`,
    margin: `-${radius}px`,
    boxSizing: "border-box",
    borderRadius: "50%",
    transition: "0.2s",
  };
  const baseAfterAma: Ama = {
    content: `""`,
    position: "absolute",
    left: "50%",
    top: "50%",
    transition: "0.2s",
    borderRadius: "50%",
    backgroundColor: color,
  };
  const activeBeforeAma: Ama = {
    ...baseBeforeAma,
    border: `solid 1px ${color}`,
  };
  const inactiveBeforeAma: Ama = {
    ...baseBeforeAma,
    border: `1px solid ${theming(color, "secondary")}`,
  };
  const activeAfterAma: Ama = {
    ...baseAfterAma,
    width: `${radius * CENTER_BALL_RADIUS_RATE}px`,
    height: `${radius * CENTER_BALL_RADIUS_RATE}px`,
    margin: `-${(radius * CENTER_BALL_RADIUS_RATE) / 2}px`,
  };
  const inactiveAfterAma: Ama = {
    ...baseAfterAma,
    width: "0",
    height: "0",
    margin: "0",
  };

  return {
    ama,
    activeBeforeAma,
    inactiveBeforeAma,
    activeAfterAma,
    inactiveAfterAma,
  };
};

export const AmatelasRadioButton = (props: AmatelasRadioButtonProps) => {
  const radius = props.radius || 12;
  const color = props.color || themeColor.primary;
  const {
    ama,
    activeBeforeAma,
    inactiveBeforeAma,
    activeAfterAma,
    inactiveAfterAma,
  } = generateAmatelasRadioButtonAma(radius, color);
  return (
    <TelasBox
      ama={ama}
      pseudoAma={{
        hover: {
          backgroundColor: props.active
            ? "transparent"
            : theming(color, "tertiary"),
        },
        before: props.active ? activeBeforeAma : inactiveBeforeAma,
        after: props.active ? activeAfterAma : inactiveAfterAma,
      }}
      onClick={props.onClick}
    />
  );
};
