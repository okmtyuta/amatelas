import styled from "styled-components";
import { composeTelas } from "./factory/composeTelas";
import { TelasProps } from "../types/property/TelasProps";
import { fontFamily } from "../configs/font";
import colors from "../configs/color";

interface TelasLabelProps extends TelasProps {}

export const TelasLabel = styled.label<TelasLabelProps>`
  color: inherit;
  font-family: ${fontFamily.default};

  ${(props) => composeTelas(props)};
`;
