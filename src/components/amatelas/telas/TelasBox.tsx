import styled from "styled-components";
import { composeTelas } from "./factory/composeTelas";
import { TelasProps } from "../types/property/TelasProps";
import colors from "../configs/color";

interface TelasBoxProps extends TelasProps {}

export const TelasBox = styled.div<TelasBoxProps>`
  color: inherit;

  ${composeTelas()}
`;
