import { prefixedBy } from '@src/prefixedBy'
import { StyleSource } from '@src/types'

const _prefixed = prefixedBy('paragraph')

const classes = {
  paragraph: _prefixed()
}

const styles = /* css */ `
.${classes.paragraph} {
  line-height: 1.7;
  margin-top: 12px;
  margin-bottom: 12px;
}
`

export const paragraph: StyleSource<typeof classes> = { classes, styles }
