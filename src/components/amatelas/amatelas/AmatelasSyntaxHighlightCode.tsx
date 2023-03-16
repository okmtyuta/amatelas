import { ReactNode } from "react";
import { TelasCode } from "../telas/TelasCode";
import { TelasPreformatted } from "../telas/TelasPreformatted";
import { AmatelasProps } from "./AmatelasProps";

interface ParsedCode {
  codeSegment: string;
  color: string;
}

interface CodeSegment {
  token: string;
  type: string;
}

class CodeSegments {
  codeSegments: CodeSegment[];
  lastToken: string;
  lastType: string;

  constructor() {
    this.codeSegments = [];
    this.lastToken = "";
    this.lastType = "none";
  }

  add(type: string, token: string) {
    this.codeSegments.push({
      token: token,
      type: type,
    });
    this.lastType = type;
    this.lastToken = token;
  }
}

const TOKEN = /^[A-Za-z_$][0-9A-Za-z_$]*/;

interface AmatelasSyntaxHighlightCodeProps
  extends AmatelasProps {
  children?: ReactNode;
}

const codeLineParser = (codeLine: string): ParsedCode[] => {
  const parsedCodes: ParsedCode[] = [];
  let parsedCodeLine = codeLine;
  // while (parsedCodeLine.length > 0) {
  //   if (parsedCodeLine)
  // }
  return parsedCodes;
};

const codeParser = (code: string) => {
  const codeLines = code.split("\n");
  const codeLine = 'console.log("Hello")';
  codeLineParser(codeLine);
};

export const AmatelasSyntaxHighlightCode = (
  props: AmatelasSyntaxHighlightCodeProps
) => {
  const code = String.raw`console.log("Hello");
console.log("This is code parser");`;
  codeParser(code);
  return (
    <TelasPreformatted
      ama={{
        backgroundColor: "black",
        color: "white",
        padding: "12px 24px",
        borderRadius: "6px",
        overflowX: "scroll",
      }}
    >
      <TelasCode>{props.children}</TelasCode>
    </TelasPreformatted>
  );
};
