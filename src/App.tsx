import { useState } from "react";
import { AmatelasAlert } from "./components/amatelas/amatelas/AmatelasAlert";
import { AmatelasToggleMnuItem } from "./components/amatelas/amatelas/AmatelasToggleMenuItem";
import { AmatelasGithubCard } from "./components/amatelas/amatelas/AmatelasGithubCard";
import colors, { themeColor } from "./components/amatelas/configs/color";
import { TelasBox } from "./components/amatelas/telas/TelasBox";
import { TelasHeading } from "./components/amatelas/telas/TelasHeading";
import { TelasParagraph } from "./components/amatelas/telas/TelasParagraph";
import { AmatelasHighlightSpan } from "./components/amatelas/amatelas/AmatelasHighlightSpan";
import { Header } from "./components/parts/Header";
import { AmatelasSyntaxHighlightCode } from "./components/amatelas/amatelas/AmatelasSyntaxHighlightCode";
import { AmatelasMathBlock } from "./components/amatelas/amatelas/AmatelasMathBlock";
import { Footer } from "./components/parts/Footer";
import { AmatelasRadioButtonGroup } from "./components/amatelas/amatelas/AmatelasRadioButtonGroup";
import { fontFamily } from "./components/amatelas/configs/font";
import { AmatelasSwitch } from "./components/amatelas/amatelas/AmatelasSwitch";

const radioButtons = [
  { key: "first", active: true },
  { key: "second", active: false },
  { key: "third", active: false },
];

function App() {
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
        fontFamily: fontFamily.sansSerifJa,
      }}
    >
      <Header />
      <AmatelasSwitch
        onClick={() => {
          console.log("clidk");
        }}
        active={true}
        color={themeColor.tertiary}
      />
      <TelasHeading
        ama={{
          padding: "6px 0",
          borderBottom: `solid 1px ${colors.lineGray}`,
        }}
        as="h2"
      >
        Amatelas UI - Overview
      </TelasHeading>

      <AmatelasRadioButtonGroup
        color={themeColor.secondary}
        multiple={false}
        radioButtons={radioButtons}
      />
      <TelasParagraph ama={{ textAlign: "justify" }}>
        <AmatelasHighlightSpan>Amatelas UI</AmatelasHighlightSpan> is a
        component library for React projects, which enables you to style your
        web pages with more flexible ways. The Amatelas UI has two types of
        component,
        <AmatelasHighlightSpan>Telas Component</AmatelasHighlightSpan> and
        <AmatelasHighlightSpan>Amatelas Component</AmatelasHighlightSpan>.
        Former components help your writing inline-style css, and with
        <AmatelasHighlightSpan>Telas Component</AmatelasHighlightSpan>, you may
        never write .css file because you can write almost all of styling
        property on react props.
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

      <AmatelasAlert alertType="warning">
        これはWarningブロックです。
      </AmatelasAlert>

      <AmatelasAlert alertType="success">
        これはSuccessブロックです。
      </AmatelasAlert>

      <AmatelasAlert alertType="danger">
        これはDangerブロックです。
      </AmatelasAlert>

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
        {String.raw`ama = {{
  padding: "6px 0",
  borderBottom: \`solid 1px \${colors.lineGray}\`,
}}`}
      </AmatelasSyntaxHighlightCode>

      <TelasParagraph>
        この<AmatelasHighlightSpan>ama</AmatelasHighlightSpan>
        を再利用することで，スタイリングを使い回すことが可能です。
      </TelasParagraph>

      <TelasHeading
        ama={{
          padding: "6px 0",
          borderBottom: `solid 1px ${colors.lineGray}`,
        }}
        as="h2"
      >
        Equations
      </TelasHeading>

      <TelasParagraph>
        Amatelas UIは<AmatelasHighlightSpan>LaTex</AmatelasHighlightSpan>
        記法の数式をサポートします。次のように数式の表示が可能です。
      </TelasParagraph>
      <AmatelasMathBlock mathString="写像$f: U\to V$が線型写像であるとは，任意の$x, y \in U$に対して$f(x+y)=f(x) + f(y)$などが成り立つことをいう。次の公式は有名である。\begin{align}S_n = \sum_{k=1}^n k = \frac{1}{2}n(n+1)\end{align}" />

      <TelasHeading
        ama={{
          padding: "6px 0",
          borderBottom: `solid 1px ${colors.lineGray}`,
        }}
        as="h2"
      >
        Next Actions
      </TelasHeading>

      <TelasParagraph>
        今後の開発では，シンタックスハイライト可能なコードブロックの実装が計画されています。
      </TelasParagraph>

      <Footer />
    </TelasBox>
  );
}

export default App;
