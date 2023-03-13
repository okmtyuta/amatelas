import styled from "styled-components";
import { composeTelas } from "./factory/composeTelas";
import { TelasProps } from "../types/property/TelasProps";
import colors from "../configs/color";

interface TelasButtonProps extends TelasProps {}

export const TelasButton = styled.button<TelasButtonProps>`
  background-color: transparent;
  color: inherit;

  ${composeTelas()}
`;
