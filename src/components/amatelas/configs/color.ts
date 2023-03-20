import { AlertType } from "../types/property/components/Alert";
import { pallet } from "./pallet";

type AlertColor = {
  [alertType in AlertType]: {
    icon: string;
    color: string;
    backgroundColor: string;
  };
};

export const alertColor: AlertColor = {
  warning: {
    icon: "#D32F2F",
    color: "#5F2120",
    backgroundColor: "#FEEDED",
  },
  error: {
    icon: "#ED6C02",
    color: "#663C00",
    backgroundColor: "#FFF4E5",
  },
  info: {
    icon: "#0288D1",
    color: "#014361",
    backgroundColor: "#E5F6FD",
  },
  success: {
    icon: "#2E7D32",
    color: "#1E4620",
    backgroundColor: "#EDF7ED",
  },
  danger: {
    icon: "#D32F2F",
    color: "#5F2120",
    backgroundColor: "#FEEDED",
  },
};

export const themeColor = {
  primary: pallet.suo,
  secondary: pallet.kompeki,
  tertiary: pallet.moegi,
};

const colors = {
  themeColor: pallet.suo,
  charColor: pallet.yokan,
  lightCharColor: pallet.sumi,
  captionCharColor: pallet.kikyonezu,
  backgroundLightGray: pallet.shironeri,
  lineGray: pallet.murasakisuisho,

  error: "#D32F2F",

  gray: "#cccccc",

  white: pallet.shiro,
  black: pallet.kuro,

  code: {
    operator: pallet.yamabuki,
    string: pallet.kompeki,
    number: pallet.fujimurasaki,
    variable: pallet.moegi,
  },
};

export default colors;
