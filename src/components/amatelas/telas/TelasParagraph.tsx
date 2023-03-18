import styled from "styled-components";
import { composeTelas } from "./factory/composeTelas";
import { TelasProps } from "../types/property/TelasProps";
import colors from "../configs/color";
import { fontFamily } from "../configs/font";

interface TelasParagraphProps extends TelasProps {}

export const TelasParagraph = styled.p<TelasParagraphProps>`
  line-height: 1.7;
  margin: 6px 0;
  color: inherit;
  font-family: ${fontFamily.default};

  ${(props) => composeTelas(props)};
`;
