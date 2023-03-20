import { useRef, useState } from "react";
import { themeColor } from "../../configs/color";
import { theming } from "../../function/style/opacity";
import { TelasBox } from "../../telas/TelasBox";
import { AmatelasProps } from "../AmatelasProps";

interface AmatelasSliderProps extends AmatelasProps {
  width?: number;
  height?: number;
  color?: string;
}

export const AmatelasSlider = (props: AmatelasSliderProps) => {
  const [value, setValue] = useState(50); // 初期値は50
  const [isDragging, setIsDragging] = useState(false);

  function handleMouseDown() {
    setIsDragging(true);
  }

  function handleMouseUp() {
    setIsDragging(false);
  }

  function handleMouseMove(event: any) {
    if (isDragging) {
      const newValue = calculateNewValue(event);
      setValue(newValue);
    }
  }
  function handleTouchStart() {
    setIsDragging(true);
  }

  function handleTouchEnd() {
    setIsDragging(false);
  }

  function handleTouchMove(event: any) {
    if (isDragging) {
      const newValue = calculateNewValue(event.touches[0]);
      setValue(newValue);
    }
  }

  function calculateNewValue(event: any) {
    const slider = event.target;
    const minValue = 0;
    const maxValue = 100;
    const range = maxValue - minValue;
    console.log(event.clientX);
    const percent =
      (event.clientX -
        (sliderRef.current?.getBoundingClientRect()?.left || 0)) /
      width;
    const newValue = minValue + range * percent;
    return Math.round(newValue);
  }

  const width = props.width || 256;
  const height = props.height || 6;
  const color = props.color || themeColor.primary;
  const percent = value / 100 >= 1 ? 1 : value / 100 <= 0 ? 0 : value / 100;
  const BALL_RADIUS_RATIO = 3;
  const ballRadius = (height * BALL_RADIUS_RATIO) / 2;
  const sliderRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <TelasBox
        ama={{
          width: `${width}px`,
          height: `${height}px`,
          position: "relative",
        }}
        ref={sliderRef}
      >
        <TelasBox
          ama={{
            position: "absolute",
            top: "50%",
            boxShadow:
              "rgb(0 0 0 / 20%) 0px 2px 1px -1px, rgb(0 0 0 / 14%) 0px 1px 1px 0px, rgb(0 0 0 / 12%) 0px 1px 3px 0px",
            height: `${ballRadius * 2}px`,
            width: `${ballRadius * 2}px`,
            borderRadius: "50%",
            backgroundColor: color,
            margin: `-${ballRadius}px ${ballRadius}px`,
            transform: `translateX(${width * percent - ballRadius * 2}px)`,
            zIndex: "2",
          }}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onTouchMove={handleTouchMove}
        />
        <TelasBox
          ama={{
            position: "absolute",
            width: `${width * percent}px`,
            height: `${height}px`,
            borderRadius: `${height}px 0 0 ${height}px`,
            top: "0",
            left: "0",
            backgroundColor: color,
            zIndex: "1",
          }}
        />
        <TelasBox
          ama={{
            position: "absolute",
            width: `${width * (1 - percent)}px`,
            height: `${height}px`,
            borderRadius: `0 ${height}px ${height}px 0`,
            top: "0",
            left: `${width * percent}px`,
            backgroundColor: theming(color, "tertiary"),
            zIndex: "1",
          }}
        />
      </TelasBox>
    </>
  );
};
