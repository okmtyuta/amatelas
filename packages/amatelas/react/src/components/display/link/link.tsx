import { styleSourceRecord } from '@okmtyuta/amatelas-theme'
import clsx from 'clsx'
import { ComponentProps } from 'react'

type LinkProps = {
  underline?: 'always' | 'hover'
} & ComponentProps<'a'>

const { classes } = styleSourceRecord.link

export const Link = ({ underline, className, ...props }: LinkProps) => {
  const underlineClass = underline ? classes.underline[underline] : ''
  return (
    <a {...props} className={clsx(classes.link, underlineClass, className)} />
  )
}
