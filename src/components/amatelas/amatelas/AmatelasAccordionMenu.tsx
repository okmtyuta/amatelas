import { useRef, useState } from "react";
import { TelasBox } from "../telas/TelasBox";
import { TelasList } from "../telas/TelasList";
import { Ama } from "../types/property";
import { AmatelasToggleMnuItem } from "./AmatelasToggleMenuItem";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import colors from "../configs/color";
import { AmatelasFunctionalComponentProps } from "./functional/AmatelasFunctionalComponentProps";

interface MenuItem {
  content: JSX.Element;
  isActive: boolean;
  key: string;
}

interface AmatelasAccordionMenuProps extends AmatelasFunctionalComponentProps {
  content: string;
  menuItems: MenuItem[];
}

export const AmatelasAccordionMenu = (props: AmatelasAccordionMenuProps) => {
  const [isShow, setIsShow] = useState<boolean>(false);
  const [childHeight, setChildHeight] = useState<number>(0);
  const telasList = useRef<HTMLUListElement>(null);
  const ama: Ama = {
    overflowY: "hidden",
    height: isShow ? `${childHeight}px` : "0px",
    transition: "0.3s",
  };
  return (
    <div>
      <TelasBox
        onClick={() => {
          setIsShow((prev) => !prev);
          if (telasList.current?.clientHeight) {
            setChildHeight(telasList.current?.clientHeight);
          }
        }}
        ama={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <TelasBox>{props.content}</TelasBox>
        <ExpandMoreIcon
          htmlColor={themeColor.primary}
          sx={{
            transform: isShow ? "rotate(0eg)" : "rotate(-90deg)",
            transition: "0.3s",
          }}
        />
      </TelasBox>
      <TelasBox
        ama={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <TelasBox ama={ama}>
          <TelasList ref={telasList}>
            {props.menuItems.map((menuItem) => {
              return (
                <AmatelasToggleMnuItem
                  ama={{ padding: "6px 12px", borderRadius: "4px" }}
                  pseudoAma={{
                    hover: {
                      color: "red",
                    },
                  }}
                  isActive={menuItem.isActive}
                  key={menuItem.key}
                >
                  {menuItem.content}
                </AmatelasToggleMnuItem>
              );
            })}
          </TelasList>
        </TelasBox>
      </TelasBox>
    </div>
  );
};
