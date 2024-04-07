import { type Color } from '@okmtyuta/amatelas-lib'
import { styleSourceRecord } from '@okmtyuta/amatelas-theme'
import clsx from 'clsx'
import { ComponentProps } from 'react'

type RippleProps = {
  x?: number
  y?: number
  color?: Color
  theme?: 'light' | 'dark'
} & ComponentProps<'span'>

const { classes } = styleSourceRecord.ripple

export const Ripple = ({
  x = 0,
  y = 0,
  color = 'info',
  theme = 'light',
  ...props
}: RippleProps) => {
  return (
    <span
      {...props}
      style={{ top: y, left: x }}
      className={clsx(classes.ripple, classes[color], classes[theme])}
    >
      <slot />
    </span>
  )
}
