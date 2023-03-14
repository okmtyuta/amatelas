import styled from "styled-components";
import { composeTelas } from "./factory/composeTelas";
import { TelasProps } from "../types/property/TelasProps";

interface TelasPreformattedProps extends TelasProps {}

export const TelasPreformatted = styled.pre<TelasPreformattedProps>`
  ${composeTelas()}
`;
