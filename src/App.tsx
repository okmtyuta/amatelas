import { useState } from "react";
import { AmatelasAlert } from "./components/amatelas/amatelas/AmatelasAlert";
import { AmatelasToggleMnuItem } from "./components/amatelas/amatelas/AmatelasToggleMenuItem";
import { AmatelasGithubCard } from "./components/amatelas/amatelas/design/AmatelasGithubCard";
import colors from "./components/amatelas/configs/color";
import { TelasBox } from "./components/amatelas/telas/TelasBox";
import { TelasHeading } from "./components/amatelas/telas/TelasHeading";
import { TelasParagraph } from "./components/amatelas/telas/TelasParagraph";
import { AmatelasHighlightSpan } from "./components/amatelas/amatelas/AmatelasHighlightSpan";
import { Header } from "./components/parts/Header";
import { AmatelasSyntaxHighlightCode } from "./components/amatelas/amatelas/design/AmatelasSyntaxHighlightCode";
import { AmatelasMathBlock } from "./components/amatelas/amatelas/functional/AmatelasMathBlock";

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
      <Header />
      <TelasHeading
        ama={{
          padding: "6px 0",
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

      <AmatelasGithubCard
        repository="okmtyuta/AmatelasUI"
        url="https://github.com/okmtyuta/amatelas"
        description="Amatelas UI Library: A flexible components for React.js projects."
        ama={{
          margin: "6px 0",
        }}
      />

      <AmatelasSyntaxHighlightCode>
        console.log("aaa")
      </AmatelasSyntaxHighlightCode>

      <TelasHeading
        ama={{
          padding: "6px 0",
          borderBottom: `solid 1px ${colors.lineGray}`,
        }}
        as="h2"
      >
        Reusable Styling
      </TelasHeading>

      <TelasParagraph>
        <AmatelasHighlightSpan>Amatelas UI</AmatelasHighlightSpan>{" "}
        では一度定義したスタイリングを再利用することが可能です。例えば，上記見出しは次のようなスタイリングが施されています。
      </TelasParagraph>

      <AmatelasSyntaxHighlightCode>
        {String.raw`ama={{
  padding: "6px 0",
  borderBottom: \`solid 1px \${colors.lineGray}\`,
}}`}
      </AmatelasSyntaxHighlightCode>

      <TelasParagraph>
        この<AmatelasHighlightSpan>ama</AmatelasHighlightSpan>
        を再利用することで，スタイリングを使い回すことが可能です。
      </TelasParagraph>

      <TelasParagraph>
        Amatelas UIは<AmatelasHighlightSpan>LaTex</AmatelasHighlightSpan>記法の数式をサポートします。次のように数式の表示が可能です。
      </TelasParagraph>
      <AmatelasMathBlock mathString="写像$f: U\to V$が線型写像であるとは，任意の$x, y \in U$に対して$f(x+y)=f(x) + f(y)$などが成り立つことをいう。" />
    </TelasBox>
  );
}

export default App;
