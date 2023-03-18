import styled from "styled-components";
import { composeTelas } from "./factory/composeTelas";
import { TelasProps } from "../types/property/TelasProps";
import { fontFamily } from "../configs/font";

interface TelasFooterProps extends TelasProps {}

export const TelasFooter = styled.footer<TelasFooterProps>`
  text-decoration: none;
  color: inherit;
  font-family: ${fontFamily.default};

  ${(props) => composeTelas(props)};
`;
