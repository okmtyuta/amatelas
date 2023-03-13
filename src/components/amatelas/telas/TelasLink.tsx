import styled from "styled-components";
import { composeTelas } from "./factory/composeTelas";
import { TelasProps } from "../types/property/TelasProps";
import colors from "../configs/color";

interface TelasLinkProps extends TelasProps {}

export const TelasLink = styled.a<TelasLinkProps>`
  text-decoration: none;
  color: inherit;

  ${composeTelas()};
`;
