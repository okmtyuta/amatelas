import styled from "styled-components";
import { composeTelas } from "./factory/composeTelas";
import { TelasProps } from "../types/property/TelasProps";
import colors from "../configs/color";
import { fontFamily } from "../configs/font";

interface TelasListProps extends TelasProps {}

export const TelasList = styled.ul<TelasListProps>`
  list-style: none;
  color: inherit;
  font-family: ${fontFamily.default};

  ${(props) => composeTelas(props)};
`;
