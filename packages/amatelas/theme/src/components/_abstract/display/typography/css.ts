import {
  color,
  Color,
  colors,
  fromEntries,
  toEntries
} from '@okmtyuta/amatelas-lib'
import { prefixedBy } from '@src/prefixedBy'
import { composeStyleSource } from '@src/style-source'

const _prefixed = prefixedBy('typography')

const baseClasses = {
  typography: _prefixed()
} as const

const colorEntries: [Color, string][] = colors.map((color) => [
  color,
  _prefixed(color)
])
const colorClasses = fromEntries(colorEntries)

const classes = {
  ...baseClasses,
  ...colorClasses
}

const baseStyle = /* css */ ``

const colorStyle = toEntries(color)
  .map(([key, code]) => {
    const colorClass = classes[key]

    if (!colorClass) {
      return ''
    }

    const style = /* css */ `
    .${classes.typography}.${colorClass} {
      color: ${code}
    }
    `
    return style
  })
  .join(' ')

const style = [baseStyle, colorStyle].join(' ')
export const typography = composeStyleSource(classes, style)
