import styled from "styled-components";
import { composeTelas } from "./factory/composeTelas";
import { TelasProps } from "../types/property/TelasProps";
import colors from "../configs/color";

interface TelasImageProps extends TelasProps {}

export const TelasImage = styled.img<TelasImageProps>`
  ${composeTelas()}
`;
