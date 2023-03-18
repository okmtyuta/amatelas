import styled from "styled-components";
import { composeTelas } from "./factory/composeTelas";
import { TelasProps } from "../types/property/TelasProps";
import colors from "../configs/color";
import { fontFamily } from "../configs/font";

interface TelasSpanProps extends TelasProps {}

export const TelasSpan = styled.span<TelasSpanProps>`
  color: inherit;
  font-family: ${fontFamily.default};

  ${(props) => composeTelas(props)};
`;
