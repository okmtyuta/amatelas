import styled from "styled-components";
import { composeTelas } from "./factory/composeTelas";
import { TelasProps } from "../types/property/TelasProps";
import colors from "../configs/color";

interface TelasListItemProps extends TelasProps {}

export const TelasListItem = styled.li<TelasListItemProps>`
  color: inherit;

  list-style: none;
  ${composeTelas()}
`;
