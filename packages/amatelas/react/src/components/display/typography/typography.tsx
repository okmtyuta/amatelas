import { styleSourceRecord } from '@okmtyuta/amatelas-theme'
import type { Color, FontWeightType } from '@okmtyuta/amatelas-lib'
import type { FontSizeType } from '@okmtyuta/amatelas-lib'
import { ComponentProps } from 'react'
import clsx from 'clsx'

type TypographyProps = {
  color?: Color
  size?: FontSizeType
  weight?: FontWeightType
} & ComponentProps<'span'>

const { classes } = styleSourceRecord.typography

export const Typography = ({
  color,
  size,
  weight,
  ...props
}: TypographyProps) => {
  const colorClass = color ? classes[color] : ''
  const sizeClass = size ? classes.size[size] : ''
  const weightClass = weight ? classes.weight[weight] : ''

  return (
    <span
      {...props}
      className={clsx(classes.typography, colorClass, sizeClass, weightClass)}
    />
  )
}
