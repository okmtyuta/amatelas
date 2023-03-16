import { ReactNode } from "react";
import colors from "../configs/color";
import { TelasBox } from "../telas/TelasBox";
import { TelasHeading } from "../telas/TelasHeading";
import { TelasImage } from "../telas/TelasImage";
import { Ama } from "../types/property";
import { logoImages } from "./static/logo";
import { TelasParagraph } from "../telas/TelasParagraph";
import { TelasLink } from "../telas/TelasLink";
import { PseudoAma } from "../types/property/Ama";
import { AmatelasProps } from "./AmatelasProps";

interface AmatelasGithubCardProps extends AmatelasProps {
  children?: ReactNode;
  repository: string;
  url: string;
  description: string;
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
    <TelasLink href={props.url}>
      <TelasBox ama={ama} pseudoAma={pseudoAma}>
        <TelasBox ama={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <TelasBox ama={{ width: "24px", display: "flex" }}>
            <TelasImage ama={{ width: "100%" }} src={logoImages.github} />
          </TelasBox>
          <TelasHeading
            as="h4"
            ama={{ fontWeight: "bold", color: colors.themeColor }}
          >
            {props.repository}
          </TelasHeading>
        </TelasBox>
        <TelasParagraph ama={{ color: colors.lightCharColor }}>
          {props.description}
        </TelasParagraph>
      </TelasBox>
    </TelasLink>
  );
};
