import { styleSourceRecord } from '@okmtyuta/amatelas-theme'
import clsx from 'clsx'
import { ComponentProps, ElementType } from 'react'

type FrameProps<T extends ElementType> = {
  as?: T
} & Omit<ComponentProps<T>, 'tag'>

const { classes } = styleSourceRecord.frame

export const Frame = <T extends ElementType = 'div'>({
  as,
  ...props
}: FrameProps<T>) => {
  const _Frame = as ?? 'div'
  return <_Frame {...props} className={clsx(props.className, classes.frame)} />
}
