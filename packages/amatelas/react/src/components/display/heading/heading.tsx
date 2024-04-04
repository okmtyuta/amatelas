import { ComponentProps } from 'react'
import { styleSourceRecord } from '@okmtyuta/amatelas-theme'
import clsx from 'clsx'

type HeadingTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
type HeadingProps<T extends HeadingTag> = {
  as?: T
} & Omit<ComponentProps<T>, 'tag'>

const { classes } = styleSourceRecord.heading

export const Heading = <T extends HeadingTag = 'h2'>({
  as,
  ...props
}: HeadingProps<T>) => {
  const _Heading = as ?? 'h1'
  return (
    <_Heading {...props} className={clsx(classes.heading, classes[_Heading])} />
  )
}
