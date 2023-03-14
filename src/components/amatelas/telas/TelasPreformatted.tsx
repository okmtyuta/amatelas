import styled from "styled-components";
import { composeTelas } from "./factory/composeTelas";
import { TelasProps } from "../types/property/TelasProps";
import { fontFamilies } from "../configs/font";

interface TelasPreformattedProps extends TelasProps {}

export const TelasPreformatted = styled.pre<TelasPreformattedProps>`
  font-family: ${fontFamilies.default};

  ${composeTelas()}
`;
