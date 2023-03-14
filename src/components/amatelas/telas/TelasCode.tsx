import { TelasProps } from "../types/property/TelasProps";
import { ReactNode, useEffect } from "react";
import styled from "styled-components";
import { composeTelas } from "./factory/composeTelas";
import { fontFamilies } from "../configs/font";

interface TelasCodeProps extends TelasProps {}

export const TelasCode = styled.code`
  font-family: ${fontFamilies.code};
  ${composeTelas()};
`;
