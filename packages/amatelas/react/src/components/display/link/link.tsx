import { styleSourceRecord } from '@okmtyuta/amatelas-theme'
import clsx from 'clsx'
import { ComponentProps, ElementType } from 'react'

type LinkProps<T extends ElementType> = {
  as?: T
  underline?: 'always' | 'hover'
} & Omit<ComponentProps<T>, 'tag'>

const { classes } = styleSourceRecord.link

export const Link = <T extends ElementType = 'a'>({
  as,
  underline,
  className,
  ...props
}: LinkProps<T>) => {
  const _Link = as ?? 'a'
  const underlineClass = underline ? classes.underline[underline] : ''
  return (
    <_Link
      {...props}
      className={clsx(classes.link, underlineClass, className)}
    />
  )
}
