import styled from "styled-components";
import { composeTelas } from "./factory/composeTelas";
import { TelasProps } from "../types/property/TelasProps";
import colors from "../configs/color";
import { fontFamilies } from "../configs/font";

interface TelasSpanProps extends TelasProps {}

export const TelasSpan = styled.span<TelasSpanProps>`
  color: inherit;
  font-family: ${fontFamilies.default};
  
  ${composeTelas()}
`;
