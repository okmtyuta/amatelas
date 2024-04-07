import type { CSSValue } from '@okmtyuta/amatelas-lib'
import { styleSourceRecord } from '@okmtyuta/amatelas-theme'
import clsx from 'clsx'
import { ComponentProps, ElementType } from 'react'

type PositionalProps<T extends ElementType> = {
  as?: T
  position?: CSSValue['position']
} & Omit<ComponentProps<T>, 'tag'>

const { classes } = styleSourceRecord.positional

export const Positional = <T extends ElementType = 'div'>({
  as,
  position,
  className,
  ...props
}: PositionalProps<T>) => {
  const _Positional = as ?? 'div'
  const positionClass = position ? classes[position] : ''

  return (
    <_Positional
      {...props}
      className={clsx(classes.positional, positionClass, className)}
    />
  )
}
