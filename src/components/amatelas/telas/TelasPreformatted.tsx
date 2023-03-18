import styled from "styled-components";
import { composeTelas } from "./factory/composeTelas";
import { TelasProps } from "../types/property/TelasProps";
import { fontFamily } from "../configs/font";

interface TelasPreformattedProps extends TelasProps {}

export const TelasPreformatted = styled.pre<TelasPreformattedProps>`
  font-family: ${fontFamily.default};

  ${(props) => composeTelas(props)};
`;
