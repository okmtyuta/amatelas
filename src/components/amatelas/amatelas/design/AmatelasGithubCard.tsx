import { ReactNode } from "react";
import colors from "../../configs/color";
import { TelasBox } from "../../telas/TelasBox";
import { TelasHeading } from "../../telas/TelasHeading";
import { TelasImage } from "../../telas/TelasImage";
import { Ama } from "../../types/property";
import { AmatelasDesignComponentProps } from "./AmatelasDesignComponentProps";
import { logoImages } from "../static/logo";
import { TelasParagraph } from "../../telas/TelasParagraph";
import { TelasLink } from "../../telas/TelasLink";
import { PseudoAma } from "../../types/property/Ama";

interface AmatelasGithubCardProps extends AmatelasDesignComponentProps {
  children?: ReactNode;
}

export const AmatelasGithubCard = (props: AmatelasGithubCardProps) => {
  const ama: Ama = {
    outline: `${colors.lineGray} solid 1px`,
    padding: "24px 12px",
    borderRadius: "6px",
    transition: "0.3s",
    ...props.ama,
  };
  const pseudoAma: PseudoAma = {
    hover: {
      backgroundColor: colors.themeColor + "10",
    },
    ...props.pseudoAma,
  };
  return (
    <TelasLink href="https://github.com/coder-ka/vite-ts-lib-starter">
      <TelasBox ama={ama} pseudoAma={pseudoAma}>
        <TelasBox ama={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <TelasBox ama={{ width: "24px", display: "flex" }}>
            <TelasImage ama={{ width: "100%" }} src={logoImages.github} />
          </TelasBox>
          <TelasHeading
            as="h4"
            ama={{ fontWeight: "bold", color: colors.themeColor }}
          >
            okmtyuta/AmatelasUI
          </TelasHeading>
        </TelasBox>
        <TelasParagraph ama={{ color: colors.lightCharColor }}>
          Amatelas UI Library: A flexible components for React.js projects.
        </TelasParagraph>
      </TelasBox>
    </TelasLink>
  );
};
