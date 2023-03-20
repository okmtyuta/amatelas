import { useState } from "react";
import colors, { themeColor } from "../configs/color";
import { TelasBox } from "../telas/TelasBox";
import { TelasList } from "../telas/TelasList";
import { TelasListItem } from "../telas/TelasListItem";
import { OnClick } from "../types/onEvent";
import { AmatelasProps } from "./AmatelasProps";
import { AmatelasRadioButton } from "./AmatelasRadioButton";

interface RequiredToggleItem {
  key: string;
  active: boolean;
}

interface RadioButton extends RequiredToggleItem {}

const updateToggleItem = <ToggleItem extends RequiredToggleItem>(
  currentToggleItem: ToggleItem,
  toggleItems: ToggleItem[],
  acceptMultipleTrue: boolean
) => {
  return toggleItems.map((toggleItem) => {
    if (currentToggleItem.key === toggleItem.key) {
      return {
        ...toggleItem,
        key: toggleItem.key,
        active: !toggleItem.active,
      };
    }

    return {
      ...toggleItem,
      key: toggleItem.key,
      active: acceptMultipleTrue ? toggleItem.active : false,
    };
  });
};

interface AmatelasRadioButtonGroupProps extends AmatelasProps {
  radioButtons: RadioButton[];
  multiple: boolean;
  color?: string;
}

export const AmatelasRadioButtonGroup = (
  props: AmatelasRadioButtonGroupProps
) => {
  const [radioButtons, setRadioButtons] = useState<RadioButton[]>(
    props.radioButtons
  );
  const color = props.color || themeColor.primary;
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
              color: currentRadioButton.active ? color : colors.charColor,
              gap: "4px",
              cursor: "pointer",
            }}
            onClick={() => {
              setRadioButtons(
                updateToggleItem<RadioButton>(
                  currentRadioButton,
                  radioButtons,
                  props.multiple
                )
              );
            }}
            key={currentRadioButton.key}
          >
            <AmatelasRadioButton
              color={color}
              active={currentRadioButton.active}
            >
              {currentRadioButton.key}
            </AmatelasRadioButton>
            <TelasBox>{currentRadioButton.key}</TelasBox>
          </TelasListItem>
        );
      })}
    </TelasList>
  );
};
