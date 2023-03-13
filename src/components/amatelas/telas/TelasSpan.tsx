import styled from "styled-components";
import { composeTelas } from "./factory/composeTelas";
import { TelasProps } from "../types/property/TelasProps";
import colors from "../configs/color";

interface TelasSpanProps extends TelasProps {}

export const TelasSpan = styled.span<TelasSpanProps>`
  color: inherit;
  ${composeTelas()}
`;
