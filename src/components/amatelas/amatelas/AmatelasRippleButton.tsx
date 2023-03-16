// import styled, { css, keyframes } from "styled-components";
// import { useRef, useState, memo, ReactNode } from "react";
// import { TelasButton } from "../../telas/TelasButton";
// import { Ama } from "../../types/property";
// import { PseudoAma } from "../../types/property/Ama";
// import { TelasBox } from "../../telas/TelasBox";

// const rippleEffectDuration = 1200;

// const rippleEffect = keyframes`
//   from {
//     transform: scale(1);
//     opacity: 0.45;
//   }
//   to {
//     transform: scale(50);
//     opacity: 0;
//   }
// `;

// interface RippleProps {
//   rippleCenter: {
//     x: number;
//     y: number;
//   };
// }

// const RippleStyled = styled.div<RippleProps>`
//   position: absolute;
//   background-color: white;
//   width: 20px;
//   height: 20px;
//   border-radius: 50%;
//   animation: ${rippleEffect} ${rippleEffectDuration}ms 1;
//   opacity: 0;
//   ${(props) => {
//     return css`
//       top: ${props.rippleCenter.y}px;
//       left: ${props.rippleCenter.x}px;
//     `;
//   }}
// `;

// const TelasRipple = (props: RippleProps) => {
//   return (
//     <TelasBox
//       ama={{
//         position: "absolute",
//         backgroundColor: "white",
//         width: "20px",
//         height: "20px",
//         borderRadius: "50%",
//         animation: {
//           keyframes: rippleEffect,
//           duration: `${rippleEffectDuration}ms`,
//           count: 1,
//         },
//         opacity: "0",
//         top: `${props.rippleCenter.y}px`,
//         left: `${props.rippleCenter.x}px`,
//       }}
//     />
//   );
// };

// const Ripple = memo((props: RippleProps) => {
//   return <TelasRipple rippleCenter={props.rippleCenter} />;
// });

// interface RippleButtonProps {
//   children?: ReactNode;
//   ama?: Ama;
//   pseudoAma?: PseudoAma;
// }

// interface Ripple {
//   center: {
//     x: number;
//     y: number;
//   };
//   key: string;
//   timestamp: Date;
// }

// export const AmatelasRippleButton = (props: RippleButtonProps) => {
//   const rippleButton = useRef<HTMLButtonElement>(null);
//   const [rippleList, setRippleList] = useState<Ripple[]>([]);

//   const addRipple = (
//     event: React.MouseEvent<HTMLButtonElement, MouseEvent>
//   ) => {
//     const key = crypto.randomUUID();
//     const now = new Date();
//     // Ripples will be deleted from rippleList after their animation ends.
//     const inspiredRipple = rippleList.filter((ripple) => {
//       return now.getTime() - ripple.timestamp.getTime() <= rippleEffectDuration;
//     });
//     const rippleButtonX = rippleButton.current?.getBoundingClientRect()?.x;
//     const rippleButtonY = rippleButton.current?.getBoundingClientRect()?.y;

//     if (rippleButtonX && rippleButtonY) {
//       setRippleList([
//         ...inspiredRipple,
//         {
//           center: {
//             x: event.clientX - rippleButtonX - 10,
//             y: event.clientY - rippleButtonY - 10,
//           },
//           key: key,
//           timestamp: new Date(),
//         },
//       ]);
//     }
//   };
//   // React.MouseEvent<HTMLButtonElement, MouseEvent>
//   return (
//     <TelasButton
//       onClick={(event) => {
//         addRipple(event);
//       }}
//       ref={rippleButton}
//       ama={{
//         overflowX: "hidden",
//         overflowY: "hidden",
//         position: "relative",
//         ...props.ama,
//       }}
//       pseudoAma={props.pseudoAma}
//     >
//       {rippleList.map((ripple) => {
//         return <Ripple key={ripple.key} rippleCenter={ripple.center} />;
//       })}
//       {props.children}
//     </TelasButton>
//   );
// };
export {};
