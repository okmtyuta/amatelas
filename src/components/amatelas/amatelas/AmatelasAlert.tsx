import { ReactNode } from "react";
import { TelasBox } from "../telas/TelasBox";
import { Ama } from "../types/property";
import { AmatelasFunctionalComponentProps } from "./functional/AmatelasFunctionalComponentProps";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import colors from "../configs/color";

type AlertType = "error" | "warning" | "info" | "success" | "danger";

type Alert = {
  [type in AlertType]: {
    icon: JSX.Element;
    color: string;
    backgroundColor: string;
  };
};

const alert: Alert = {
  error: {
    icon: <ErrorOutlineIcon htmlColor={colors.errorIconColor} />,
    color: colors.errorColor,
    backgroundColor: colors.errorBackgroundColor,
  },
  warning: {
    icon: <WarningAmberIcon htmlColor={colors.warningIconColor} />,
    color: colors.warningColor,
    backgroundColor: colors.warningBackgroundColor,
  },
  info: {
    icon: <ErrorOutlineIcon htmlColor={colors.infoIconColor} />,
    color: colors.infoColor,
    backgroundColor: colors.infoBackgroundColor,
  },
  success: {
    icon: <CheckOutlinedIcon htmlColor={colors.successIconColor} />,
    color: colors.successColor,
    backgroundColor: colors.successBackgroundColor,
  },
  danger: {
    icon: <LocalFireDepartmentIcon htmlColor={colors.dangerIconColor} />,
    color: colors.dangerColor,
    backgroundColor: colors.dangerBackgroundColor,
  },
};

interface AmatelasAlertProps extends AmatelasFunctionalComponentProps {
  children?: ReactNode;
  alertType?: AlertType;
}

export const AmatelasAlert = (props: AmatelasAlertProps) => {
  const alertType = props.alertType || "warning";
  const alertInfo = alert[alertType];
  const ama: Ama = {
    display: "grid",
    backgroundColor: alertInfo.backgroundColor,
    borderRadius: "8px",
    padding: "24px 12px",
    gridTemplateAreas: [["warn", "content"]],
    gridTemplateColumns: ["1fr", "16fr"],
    gap: "12px",
    margin: "6px 0",
    ...props.ama,
  };
  return (
    <TelasBox ama={ama}>
      <TelasBox
        ama={{
          display: "flex",
          justifyContent: "center",
          color: alertInfo.color,
        }}
      >
        {alertInfo.icon}
      </TelasBox>
      <TelasBox
        ama={{
          color: alertInfo.color,
        }}
      >
        {props.children}
      </TelasBox>
    </TelasBox>
  );
};
