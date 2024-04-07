import type { CSSValue } from '@okmtyuta/amatelas-lib'
import { styleSourceRecord } from '@okmtyuta/amatelas-theme'
import clsx from 'clsx'
import { ComponentProps, ElementType } from 'react'

type FlexProps<T extends ElementType> = {
  as?: T
  inline?: boolean
  wrap?: boolean
  direction?: CSSValue['flexDirection']
  alignContent?: CSSValue['alignContent']
  justifyContent?: CSSValue['justifyContent']
  alignItems?: CSSValue['alignItems']
} & Omit<ComponentProps<T>, 'tag'>

const { classes } = styleSourceRecord.flex

export const Flex = <T extends ElementType = 'div'>({
  as,
  className,
  wrap,
  inline,
  direction = 'row',
  alignContent = 'normal',
  justifyContent = 'normal',
  alignItems = 'normal',
  ...props
}: FlexProps<T>) => {
  const _Flex = as ?? 'div'

  return (
    <_Flex
      {...props}
      className={clsx(
        classes.flex,
        classes.direction[direction],
        classes.alignContent[alignContent],
        classes.justifyContent[justifyContent],
        classes.alignItems[alignItems],
        { [classes.inline]: inline, [classes.wrap]: wrap },
        className
      )}
    />
  )
}
