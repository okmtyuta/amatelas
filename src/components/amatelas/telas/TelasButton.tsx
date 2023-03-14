import styled from "styled-components";
import { composeTelas } from "./factory/composeTelas";
import { TelasProps } from "../types/property/TelasProps";
import colors from "../configs/color";
import { fontFamilies } from "../configs/font";

interface TelasButtonProps extends TelasProps {}

export const TelasButton = styled.button<TelasButtonProps>`
  background-color: transparent;
  color: inherit;
  font-family: ${fontFamilies.default};

  ${composeTelas()}
`;
