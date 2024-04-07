// Refer to https://mui.com/material-ui/react-button/

import { clsx } from 'clsx'
import {
  ComponentPropsWithoutRef,
  ElementType,
  useRef,
  useState,
  MouseEvent,
  RefObject
} from 'react'
import { Color } from '@okmtyuta/amatelas-lib'
import { styleSourceRecord } from '@okmtyuta/amatelas-theme'
import { Ripple } from '@src/components/effect'

// type Width = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full' | 'auto'

type ClickEvent<Element extends HTMLElement> = MouseEvent<
  Element,
  globalThis.MouseEvent
>

export type MaterialButtonProps<T extends ElementType> = {
  as?: T
  variant?: 'standard' | 'filled' | 'outlined'
  color?: Color
} & Omit<ComponentPropsWithoutRef<T>, 'tag'>

type Ripple = {
  x: number
  y: number
  key: string
}

const { classes } = styleSourceRecord.nativeButton

const useRipple = <
  ClickElement extends HTMLElement,
  RefElement extends HTMLElement
>(
  ref: RefObject<RefElement>,
  radius: number
) => {
  const [ripples, setRipples] = useState<Ripple[]>([])

  const onRipple = (event: ClickEvent<ClickElement>) => {
    if (ref.current) {
      const x =
        event.clientX - ref.current.getBoundingClientRect().x - radius / 2
      const y =
        event.clientY - ref.current.getBoundingClientRect().y - radius / 2

      const key = crypto.randomUUID()

      setRipples((current) => [...current, { x, y, key }])

      setTimeout(() => {
        setRipples((current) => {
          return current.filter((ripple) => {
            return ripple.key !== key
          })
        })
      }, 800)
    }
  }

  return {
    ripples,
    setRipples,
    onRipple
  }
}

export const MaterialButton = <T extends ElementType = 'button'>({
  as,
  variant = 'standard',
  color = 'info',
  ...props
}: MaterialButtonProps<T>) => {
  const _Button = as ?? 'button'
  const ref = useRef<HTMLButtonElement>(null)
  const rippleTheme = variant === 'filled' ? 'light' : 'dark'

  const { onRipple, ripples } = useRipple(ref, 200)

  return (
    <_Button
      {...props}
      className={clsx(classes.nativeButton, classes[variant], classes[color])}
      ref={ref}
      onClick={(event) => {
        onRipple(event)
      }}
    >
      {ripples.map((ripple) => (
        <Ripple x={ripple.x} y={ripple.y} key={ripple.key} color={color} theme={rippleTheme} />
      ))}
      {props.children}
    </_Button>
  )
}
