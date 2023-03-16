import { ReactNode } from "react";
import { keyframes } from "styled-components";
import colors from "../configs/color";
import { TelasBox } from "../telas/TelasBox";
import { OnClick } from "../types/onEvent";
import { AmatelasProps } from "./AmatelasProps";

const rippleEffect1 = keyframes`
  from {
    width: 0;
    height: 0;
    margin: 0;
  }
  to {
    width: 10px;
    height: 10px;
    margin: -5px;
  }
`;
const rippleEffect2 = keyframes`
  from {
    scale(1)
  }
  to {
    scale(0)
  }
`;

const animation1 = {
  keyframes: rippleEffect1,
  duration: "0.3s",
  count: 1,
  fillMode: "forwards",
};

interface AmatelasRadioButtonProps extends AmatelasProps {
  isChecked?: boolean;
  children?: ReactNode;
  onClick?: OnClick<HTMLDivElement>;
  width?: number;
}

export const AmatelasRadioButton = (props: AmatelasRadioButtonProps) => {
  const width = props.width || 24;
  return (
    <TelasBox
      ama={{
        position: "relative",
        width: `${width}px`,
        height: `${width}px`,
        padding: `${width * 0.4}px`,
        borderRadius: "50%",
        transition: "0.3s",
      }}
      pseudoAma={{
        hover: {
          backgroundColor: colors.themeColor + "10",
        },
        before: {
          content: `""`,
          position: "absolute",
          left: "50%",
          top: "50%",
          width: `${width}px`,
          height: `${width}px`,
          margin: `-${width / 2}px`,
          boxSizing: "border-box",
          borderRadius: "50%",
          border: props.isChecked
            ? `solid 1px ${colors.themeColor}`
            : `1px solid ${colors.themeColor + "52"}`,
          transition: "0.2s",
        },
        after: {
          content: `""`,
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: props.isChecked ? "scale(1)" : "scale(0)",
          transition: "0.2s",
          borderRadius: "50%",
          backgroundColor: colors.themeColor,
          animation: animation1,
        },
      }}
      onClick={props.onClick}
    ></TelasBox>
  );
};
