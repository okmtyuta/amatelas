import colors, { themeColor } from "../../configs/color";
import { TelasInput } from "../../telas/TelasInput";
import { TelasBox } from "../../telas/TelasBox";
import { AmatelasBaseProps } from "./AmatelasBaseProps";
import { TelasLabel } from "../../telas/TelasLabel";
import { useRef, useState } from "react";

type InputType = "text" | "password";
interface ValidationRule {
  rule: RegExp;
  alert: string;
}

interface AmatelasBaseTextfield extends AmatelasBaseProps {
  placeholder?: string;
  type?: InputType;
  color?: string;
  defaultValue?: string;
  explanation?: string;
  validationRules?: ValidationRule[];
}

const INPUT_PADDING = 12;

export const AmatelasBaseTextfield = (props: AmatelasBaseTextfield) => {
  const height = props.ama?.height || "48px";
  const width = props.ama?.width || "256px";
  const validationRules = props.validationRules || [];
  const [alerts, setAlerts] = useState<string[]>([]);
  const [isFocus, setIsFocus] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>(
    props.defaultValue || ""
  );
  const inputRef = useRef<HTMLInputElement>(null);
  const isInput = inputValue.length > 0;
  const inputType = props.type || "text";
  const color = props.color || themeColor.primary;
  const isError = alerts.length > 0;

  const getLabelCharColor = (
    isError: boolean,
    isFocus: boolean,
    isInput: boolean,
    errorColor: string,
    color: string,
    charColor: string
  ) => {
    if (isError) {
      return errorColor;
    }
    if (isFocus || isInput) {
      return color;
    }
    return charColor;
  };

  return (
    <TelasBox>
      <TelasBox
        ama={{
          position: "relative",
          height: height,
          width: width,
          zIndex: "0",
          outline: isError
            ? `solid 1px ${colors.error}`
            : isFocus
            ? `solid 1px ${color}`
            : `solid 1px ${colors.gray}`,
          borderRadius: "4px",
          margin: "10px",
        }}
      >
        <TelasLabel
          ama={{
            transform:
              isFocus || isInput
                ? `translate(${INPUT_PADDING}px, -150%)`
                : `translate(${INPUT_PADDING}px, -50%)`,
            position: "absolute",
            top: "50%",
            color: getLabelCharColor(
              isError,
              isFocus,
              isInput,
              colors.error,
              color,
              colors.charColor
            ),
            zIndex: "1",
            transition: "0.2s",
            fontSize: isFocus || isInput ? "12px" : "14px",
            backgroundColor: "white",
            padding: "4px",
          }}
        >
          {(isFocus || isInput) && props.explanation
            ? props.explanation
            : props.placeholder}
        </TelasLabel>
        <TelasInput
          type={inputType}
          defaultValue={props.defaultValue}
          ama={{
            position: "absolute",
            borderRadius: "4px",
            height: "100%",
            width: "100%",
            zIndex: "2",
            backgroundColor: "transparent",
            padding: `0 ${INPUT_PADDING}px`,
            boxSizing: "border-box",
            color: colors.charColor,
          }}
          pseudoAma={{
            focus: {
              borderRadius: "4px",
            },
          }}
          onFocus={() => {
            setIsFocus(true);
          }}
          onBlur={() => {
            setIsFocus(false);
          }}
          ref={inputRef}
          onChange={() => {
            setInputValue(inputRef.current?.value || "");
            setAlerts(
              validationRules
                .filter((rule) => {
                  return !(inputRef.current?.value || "").match(rule.rule);
                })
                .map((rule) => {
                  return rule.alert;
                })
            );
          }}
        />
      </TelasBox>
      <TelasBox
        ama={{
          margin: "10px",
          color: colors.error,
        }}
      >
        {alerts.map((alert) => {
          return <TelasBox key={alert}>{alert}</TelasBox>;
        })}
      </TelasBox>
    </TelasBox>
  );
};
