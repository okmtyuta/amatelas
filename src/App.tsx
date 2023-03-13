import { useState } from "react";
import { AmatelasAccordionMenu } from "./components/amatelas/amatelas/AmatelasAccordionMenu";
import { AmatelasAlert } from "./components/amatelas/amatelas/AmatelasAlert";
import { AmatelasSlideMenu } from "./components/amatelas/amatelas/AmatelasSlideMenu";
import { AmatelasToggleMnuItem } from "./components/amatelas/amatelas/AmatelasToggleMenuItem";
import { AmatelasGithubCard } from "./components/amatelas/amatelas/design/AmatelasGithubCard";
import colors from "./components/amatelas/configs/color";
import { TelasBox } from "./components/amatelas/telas/TelasBox";
import { TelasHeading } from "./components/amatelas/telas/TelasHeading";
import { TelasParagraph } from "./components/amatelas/telas/TelasParagraph";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { TelasList } from "./components/amatelas/telas/TelasList";
import { TelasListItem } from "./components/amatelas/telas/TelasListItem";
import { fontFamilies } from "./components/amatelas/configs/font";
import { AmatelasHighlightSpan } from "./components/amatelas/amatelas/AmatelasHighlightSpan";

const menuItems1 = [
  {
    content: <div>TypeScriptに対応</div>,
    isActive: true,
    key: "fjalfjalfjkla",
  },
  {
    content: <div>world</div>,
    isActive: false,
    key: "fjalfjfaldkfjkaalfjkla",
  },
  {
    content: <div>and</div>,
    isActive: false,
    key: "fjalfalffjalfjkla",
  },
];
const menuItems2 = [
  {
    element: (
      <AmatelasToggleMnuItem key="fjaklfj;kaj">Item 2-1</AmatelasToggleMnuItem>
    ),
  },
  {
    element: (
      <AmatelasToggleMnuItem key="fjakld; jdakfjakl ">
        Item 2-2
      </AmatelasToggleMnuItem>
    ),
  },
  {
    element: (
      <AmatelasToggleMnuItem key="fjakaej ljfka">
        Item 2-3
      </AmatelasToggleMnuItem>
    ),
  },
];

function App() {
  const [isActive, setIsActive] = useState<boolean>(true);
  const [isShow, setIsShow] = useState<boolean>(false);
  return (
    <TelasBox
      ama={{
        margin: {
          pc: "36px auto",
          sp: "24px",
          tab: "24px",
        },
        maxWidth: {
          pc: "800px",
        },
      }}
    >
      <TelasBox>
        <TelasBox ama={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <MenuOutlinedIcon
            onClick={() => {
              setIsShow(true);
            }}
          />
          <TelasBox
            ama={{
              color: colors.themeColor,
              fontFamily: fontFamilies.anton,
            }}
          >
            AmUI
          </TelasBox>
        </TelasBox>
      </TelasBox>
      <AmatelasSlideMenu setIsShow={setIsShow} isShow={isShow}>
        <TelasBox
          ama={{
            margin: "12px",

            color: colors.themeColor,
          }}
        >
          <TelasBox
            ama={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <TelasHeading ama={{ fontFamily: fontFamilies.anton }} as="h3">
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

      <TelasHeading
        ama={{
          padding: "0 0 6px 0",
          borderBottom: `solid 1px ${colors.lineGray}`,
        }}
        as="h2"
      >
        Amatelas UI - Overview
      </TelasHeading>
      <TelasParagraph ama={{ textAlign: "justify" }}>
        Amatelas
        UIはよりフレキシブルなスタイリングを可能にするコンポーネントライブラリで，より簡単にインラインスタイルを描くことのできる
        <AmatelasHighlightSpan>Telasコンポーネント</AmatelasHighlightSpan>
        と，Telasコンポーネントを拡張してさまざまな機能をもたせた
        <AmatelasHighlightSpan>Amatelasコンポーネント</AmatelasHighlightSpan>
        から構成されます。
        <AmatelasHighlightSpan>Telasコンポーネント</AmatelasHighlightSpan>
        ではプロパティにAmaオブジェクトを追加することでCSSファイルを生成することなくコンポーネントへのスタイルの適用が可能になります。例えば，TelasBoxにama=
        {`{margin: "12px"}`}
        を適用すると，marginが12pxのコンポーネントを生成できます。このように，Telasコンポーネントはより簡便なインラインスタイリングの方法を提供します。
      </TelasParagraph>

      <TelasParagraph ama={{ textAlign: "justify" }}>
        次に，<AmatelasHighlightSpan>Telasコンポーネント</AmatelasHighlightSpan>
        が純粋なHTMLコンポーネントを提供するのに対して，
        <AmatelasHighlightSpan>Amatelasコンポーネント</AmatelasHighlightSpan>
        はWebページにそのまま使えるような機能的にで見栄えのいいコンポーネントを提供します。例えば，
        <AmatelasHighlightSpan>Amatelasコンポーネント</AmatelasHighlightSpan>
        の一つである<AmatelasHighlightSpan>AmatelasAlert</AmatelasHighlightSpan>
        は，次のようなAlertブロックを生成します。
      </TelasParagraph>
      <AmatelasAlert alertType="error">これはErrorブロックです。</AmatelasAlert>

      <AmatelasAlert alertType="info">これはInfoブロックです。</AmatelasAlert>

      <TelasParagraph ama={{ textAlign: "justify" }}>
        現状では，
        <AmatelasHighlightSpan>Telasコンポーネント</AmatelasHighlightSpan>も
        <AmatelasHighlightSpan>Amatelasコンポーネント</AmatelasHighlightSpan>
        もWebアプリケーションのフロントエンド領域に有用なコンポーネントライブラリと言うことはできませんが，今後の継続的な開発によりAmatelas
        UIはエンジニアのフロントエンド開発の労力を大きく削減できると期待しています。Amatelasの開発は以下のリポジトリで行われています。
      </TelasParagraph>

      <AmatelasGithubCard />
    </TelasBox>
  );
}

export default App;
