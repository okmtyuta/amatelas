import styled from "styled-components";
import { composeTelas } from "./factory/composeTelas";
import { TelasProps } from "../types/property/TelasProps";
import { fontFamily } from "../configs/font";

interface TelasBoxProps extends TelasProps {}

export const TelasBox = styled.div<TelasBoxProps>`
  color: inherit;
  font-family: ${fontFamily.default};

  ${(props) => composeTelas(props)};
`;
