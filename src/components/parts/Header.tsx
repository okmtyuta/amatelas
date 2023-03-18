import { useState } from "react";
import { AmatelasSlideMenu } from "../amatelas/amatelas/AmatelasSlideMenu";
import colors, { themeColor } from "../amatelas/configs/color";
import { TelasBox } from "../amatelas/telas/TelasBox";
import { TelasHeading } from "../amatelas/telas/TelasHeading";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { TelasList } from "../amatelas/telas/TelasList";
import { TelasListItem } from "../amatelas/telas/TelasListItem";
import { fontFamily } from "../amatelas/configs/font";

export const Header = () => {
  const [isShow, setIsShow] = useState<boolean>(false);
  return (
    <TelasBox>
      <TelasBox ama={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <MenuOutlinedIcon
          onClick={() => {
            setIsShow(true);
          }}
        />
        <TelasBox
          ama={{
            color: themeColor.primary,
            fontFamily: fontFamily.anton,
          }}
        >
          AmUI
        </TelasBox>
      </TelasBox>
      <AmatelasSlideMenu setIsShow={setIsShow} isShow={isShow}>
        <TelasBox
          ama={{
            margin: "12px",

            color: themeColor.primary,
          }}
        >
          <TelasBox
            ama={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <TelasHeading ama={{ fontFamily: fontFamily.anton }} as="h3">
              Amatelas UI
            </TelasHeading>
          </TelasBox>
          <TelasList>
            <TelasListItem
              ama={{
                padding: "12px 6px",
                borderBottom: `solid 1px ${colors.lineGray}`,
                color: colors.charColor,
              }}
            >
              Overview
            </TelasListItem>
            <TelasListItem
              ama={{
                padding: "12px 6px",
                borderBottom: `solid 1px ${colors.lineGray}`,
                color: colors.charColor,
              }}
            >
              Installation
            </TelasListItem>
            <TelasListItem
              ama={{
                padding: "12px 6px",
                borderBottom: `solid 1px ${colors.lineGray}`,
                color: colors.charColor,
              }}
            >
              Usage
            </TelasListItem>
          </TelasList>
        </TelasBox>
      </AmatelasSlideMenu>
    </TelasBox>
  );
};
