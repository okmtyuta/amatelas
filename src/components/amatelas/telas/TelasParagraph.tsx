import styled from "styled-components";
import { composeTelas } from "./factory/composeTelas";
import { TelasProps } from "../types/property/TelasProps";
import colors from "../configs/color";

interface TelasParagraphProps extends TelasProps {}

export const TelasParagraph = styled.p<TelasParagraphProps>`
  line-height: 1.7;
  margin: 6px 0;
  color: inherit;

  ${composeTelas()}
`;
