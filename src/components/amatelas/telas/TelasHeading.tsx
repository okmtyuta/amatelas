import styled from "styled-components";
import { composeTelas } from "./factory/composeTelas";
import { TelasProps } from "../types/property/TelasProps";
import { mediaQueriedFontSize } from "../function/style/mediaQueryableFontSize";
import { ReactNode } from "react";
import { Ama } from "../types/property";
import { TelasBox } from "./TelasBox";
import colors from "../configs/color";
import { fontFamilies } from "../configs/font";

type Heading = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

interface TelasHeadingProps extends TelasProps {
  children?: ReactNode;
  as?: Heading;
  ama?: Ama;
}

export const TelasHeading = (props: TelasHeadingProps) => {
  const ama: Ama = {
    color: "inherit",
    fontFamily: fontFamilies.default,
    ...props.ama,
  };
  return (
    <TelasBox as={props.as || "h3"} ama={props.ama} fontSizeType={props.as}>
      {props.children}
    </TelasBox>
  );
};
