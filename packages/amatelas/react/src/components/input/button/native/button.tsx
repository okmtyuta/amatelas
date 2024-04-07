import { type Color } from '@okmtyuta/amatelas-lib'
import { styleSourceRecord } from '@okmtyuta/amatelas-theme'
import clsx from 'clsx'
import { ComponentProps, ElementType } from 'react'

type ButtonVariant = 'standard' | 'filled' | 'outlined'
type ButtonProps<T extends ElementType> = {
  as?: T
  color?: Color
  variant?: ButtonVariant
} & Omit<ComponentProps<T>, 'tag'>

const { classes } = styleSourceRecord.nativeButton

export const Button = <T extends ElementType = 'button'>({
  as,
  color = 'info',
  variant = 'standard',
  children,
  ...props
}: ButtonProps<T>) => {
  const _Button = as ?? 'button'

  return (
    <_Button
      {...props}
      className={clsx(classes.nativeButton, classes[variant], classes[color])}
    >
      {children}
    </_Button>
  )
}
