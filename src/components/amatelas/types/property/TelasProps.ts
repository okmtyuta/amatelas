import { FontSizeType } from "../../configs/font";
import { Ama, PseudoAma } from "./Ama";
import { ConfigurablePseudoProperty } from "./ConfigurablePseudoProperty";

export interface TelasProps {
  fontSizeType?: FontSizeType;
  ama?: Ama;

  pseudoAma?: PseudoAma;
}
