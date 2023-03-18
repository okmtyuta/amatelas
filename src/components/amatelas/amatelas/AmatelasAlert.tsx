import { ReactNode } from "react";
import { TelasBox } from "../telas/TelasBox";
import { Ama } from "../types/property";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import colors, { alertColor } from "../configs/color";
import { AlertType } from "../types/property/components/Alert";
import { AmatelasProps } from "./AmatelasProps";

type Alert = {
  [type in AlertType]: {
    icon: JSX.Element;
    color: string;
    backgroundColor: string;
  };
};

const alert: Alert = {
  error: {
    icon: <ErrorOutlineIcon htmlColor={alertColor.error.icon} />,
    color: alertColor.error.color,
    backgroundColor: alertColor.error.backgroundColor,
  },
  warning: {
    icon: <WarningAmberIcon htmlColor={alertColor.warning.icon} />,
    color: alertColor.warning.color,
    backgroundColor: alertColor.warning.backgroundColor,
  },
  info: {
    icon: <ErrorOutlineIcon htmlColor={alertColor.info.icon} />,
    color: alertColor.info.color,
    backgroundColor: alertColor.info.backgroundColor,
  },
  success: {
    icon: <CheckOutlinedIcon htmlColor={alertColor.success.icon} />,
    color: alertColor.success.color,
    backgroundColor: alertColor.success.backgroundColor,
  },
  danger: {
    icon: <LocalFireDepartmentIcon htmlColor={alertColor.danger.icon} />,
    color: alertColor.danger.color,
    backgroundColor: alertColor.danger.backgroundColor,
  },
};

interface AmatelasAlertProps extends AmatelasProps {
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
          color: alertColor[alertType]["color"],
        }}
      >
        {alertInfo.icon}
      </TelasBox>
      <TelasBox
        ama={{
          color: alertColor[alertType]["color"],
        }}
      >
        {props.children}
      </TelasBox>
    </TelasBox>
  );
};
