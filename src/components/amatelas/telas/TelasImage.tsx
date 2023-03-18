import styled from "styled-components";
import { composeTelas } from "./factory/composeTelas";
import { TelasProps } from "../types/property/TelasProps";
import colors from "../configs/color";
import { fontFamily } from "../configs/font";

interface TelasImageProps extends TelasProps {}

export const TelasImage = styled.img<TelasImageProps>`
  font-family: ${fontFamily.default};
  ${(props) => composeTelas(props)};
`;
