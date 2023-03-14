import colors from "../amatelas/configs/color";
import { TelasFooter } from "../amatelas/telas/TelasFooter";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";
import { TelasBox } from "../amatelas";
import { useState } from "react";

export const Footer = () => {
  const [review, setReview] = useState<"good" | "bad" | "none">("none");
  return (
    <TelasFooter
      ama={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: colors.lightCharColor,
        borderTop: `solid 1px ${colors.lineGray}`,
        margin: "72px 0 0 0",
        padding: "24px 0",
        gap: "12px",
      }}
    >
      <TelasBox>
        {review !== "none"
          ? "Thank you for your feedback!"
          : "Was this page helpful?"}
      </TelasBox>
      <TelasBox
        ama={{
          color: review === "good" ? colors.themeColor : colors.lightCharColor,
          transition: "color 0.3s",
        }}
      >
        <ThumbUpAltIcon
          onClick={() => {
            setReview("good");
          }}
        />
      </TelasBox>

      <TelasBox
        ama={{
          color: review === "bad" ? colors.themeColor : colors.lightCharColor,
          transition: "color 0.3s",
        }}
      >
        <ThumbDownAltIcon
          onClick={() => {
            setReview("bad");
          }}
        />
      </TelasBox>
    </TelasFooter>
  );
};
