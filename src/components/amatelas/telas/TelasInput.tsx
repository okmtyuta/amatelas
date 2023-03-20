import styled from "styled-components";
import { composeTelas } from "./factory/composeTelas";
import { TelasProps } from "../types/property/TelasProps";
import { fontFamily } from "../configs/font";
import colors from "../configs/color";

interface TelasInputProps extends TelasProps {}

export const TelasInput = styled.input<TelasInputProps>`
  color: inherit;
  font-family: ${fontFamily.default};
  &:focus {
    outline: none;
  }
  ${(props) => composeTelas(props)};
`;
