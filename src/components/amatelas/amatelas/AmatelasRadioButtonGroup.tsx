import { useState } from "react";
import colors from "../configs/color";
import { TelasBox } from "../telas/TelasBox";
import { TelasList } from "../telas/TelasList";
import { TelasListItem } from "../telas/TelasListItem";
import { AmatelasProps } from "./AmatelasProps";
import { AmatelasRadioButton } from "./AmatelasRadioButton";

interface RadioButton {
  label: string;
  checked: boolean;
}

interface AmatelasRadioButtonGroupProps extends AmatelasProps {
  radioButtons: RadioButton[];
  type?: "multiple" | "single";
}

export const AmatelasRadioButtonGroup = (
  props: AmatelasRadioButtonGroupProps
) => {
  const [radioButtons, setRadioButtons] = useState<RadioButton[]>(
    props.radioButtons
  );
  const type = props.type || "single";
  return (
    <TelasList
      ama={{
        display: "flex",
      }}
    >
      {radioButtons.map((currentRadioButton) => {
        return (
          <TelasListItem
            ama={{
              display: "flex",
              alignItems: "center",
              color: currentRadioButton.checked
                ? colors.themeColor
                : colors.charColor,
              gap: "4px",
            }}
            key={currentRadioButton.label}
          >
            <AmatelasRadioButton
              isChecked={currentRadioButton.checked}
              onClick={() => {
                setRadioButtons(
                  radioButtons.map((radioButton) => {
                    if (currentRadioButton.label === radioButton.label) {
                      console.log(radioButton);
                      return {
                        label: radioButton.label,
                        checked: !radioButton.checked,
                      };
                    }

                    return {
                      label: radioButton.label,
                      checked: type === "single" ? false : radioButton.checked,
                    };
                  })
                );
              }}
            >
              {currentRadioButton.label}
            </AmatelasRadioButton>
            <TelasBox>{currentRadioButton.label}</TelasBox>
          </TelasListItem>
        );
      })}
    </TelasList>
  );
};
