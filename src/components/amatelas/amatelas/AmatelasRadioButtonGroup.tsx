import { useState } from "react";
import { TelasList } from "../telas/TelasList";
import { AmatelasProps } from "./AmatelasProps";
import { AmatelasRadioButton } from "./AmatelasRadioButton";

interface RadioButton {
  label: string;
  checked: boolean;
}

interface AmatelasRadioButtonGroupProps extends AmatelasProps {
  radioButtons: RadioButton[];
}

export const AmatelasRadioButtonGroup = (
  props: AmatelasRadioButtonGroupProps
) => {
  const [radioButtons, setRadioButtons] = useState<RadioButton[]>(
    props.radioButtons
  );
  return (
    <TelasList
      ama={{
        display: "flex",
      }}
    >
      {radioButtons.map((currentRadioButton) => {
        return (
          <AmatelasRadioButton
            key={currentRadioButton.label}
            isChecked={currentRadioButton.checked}
            onClick={() => {
              setRadioButtons(
                radioButtons.map((radioButton) => {
                  if (currentRadioButton.label === radioButton.label) {
                    return {
                      label: radioButton.label,
                      checked: true,
                    };
                  }

                  return {
                    label: radioButton.label,
                    checked: false,
                  };
                })
              );
            }}
          >
            {currentRadioButton.label}
          </AmatelasRadioButton>
        );
      })}
    </TelasList>
  );
};
