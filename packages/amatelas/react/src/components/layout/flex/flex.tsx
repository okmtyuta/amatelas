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
  direction,
  alignContent,
  justifyContent,
  alignItems,
  ...props
}: FlexProps<T>) => {
  const _Flex = as ?? 'div'

  const directionClass = direction ? classes.direction[direction] : null
  const alignContentClass = alignContent
    ? classes.alignContent[alignContent]
    : null
  const justifyContentClass = justifyContent
    ? classes.justifyContent[justifyContent]
    : null
  const alignItemsClass = alignItems ? classes.alignItems[alignItems] : null

  return (
    <_Flex
      {...props}
      className={clsx(
        classes.flex,
        directionClass,
        alignContentClass,
        justifyContentClass,
        alignItemsClass,
        { [classes.inline]: inline, [classes.wrap]: wrap },
        className
      )}
    />
  )
}
