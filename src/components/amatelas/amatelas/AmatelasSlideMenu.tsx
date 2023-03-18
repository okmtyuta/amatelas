import { ReactNode } from "react";
import { TelasBox } from "../telas/TelasBox";
import { AmatelasProps } from "./AmatelasProps";

interface AmatelasSlideMenuProps extends AmatelasProps {
  isShow: boolean;
  setIsShow: React.Dispatch<React.SetStateAction<boolean>>;
  children?: ReactNode;
}

export const AmatelasSlideMenu = (props: AmatelasSlideMenuProps) => {
  return (
    <TelasBox ama={props.ama}>
      <TelasBox
        ama={{
          backgroundColor: "white",
          position: "fixed",
          top: "0",
          left: {
            pc: "-60%",
            sp: "-80%",
            tab: "-80%",
          },
          overflowX: "hidden",
          transition: "transform 0.7s",
          height: "100vh",
          width: {
            pc: "60%",
            sp: "80%",
            tab: "80%",
          },
          zIndex: "2",
          transform: props.isShow ? "translateX(100%)" : "none",
        }}
      >
        {props.children}
      </TelasBox>
      <TelasBox
        onClick={() => {
          props.setIsShow(false);
        }}
        ama={{
          backgroundColor: props.isShow ? "#000000" + "33" : "#000000" + "00",
          backdropFilter: props.isShow ? "blur(1px)" : "blur(0)",
          position: "fixed",
          zIndex: "1",
          top: "0",
          left: "0",
          overflowX: "hidden",
          height: "100%",
          width: "100%",
          transition: "0.7s",
          visibility: props.isShow ? "visible" : "hidden",
        }}
      />
    </TelasBox>
  );
};
