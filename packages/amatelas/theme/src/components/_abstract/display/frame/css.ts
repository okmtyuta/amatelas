import { prefixedBy } from '@src/prefixedBy'
import { StyleSource } from '@src/types'

const _prefixed = prefixedBy('frame')

const classes = {
  frame: _prefixed()
}

const styles = /* css */ `
.${classes.frame} {
  max-width: 860px;
  margin: 0 auto;
  padding: 0 24px;
}
`

export const frame: StyleSource<typeof classes> = { classes, styles }
