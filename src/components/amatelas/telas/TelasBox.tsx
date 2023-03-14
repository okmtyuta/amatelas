import styled from "styled-components";
import { composeTelas } from "./factory/composeTelas";
import { TelasProps } from "../types/property/TelasProps";
import colors from "../configs/color";
import { fontFamilies } from "../configs/font";

interface TelasBoxProps extends TelasProps {}

export const TelasBox = styled.div<TelasBoxProps>`
  color: inherit;
  font-family: ${fontFamilies.default};

  ${composeTelas()}
`;
