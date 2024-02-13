import { prefixedBy } from '@src/prefixedBy'
import { StyleSource } from '@src/types'

const _prefixed = prefixedBy('list')

const classes = {
  list: _prefixed('list')
}

const styles = /* css */ `
.${classes.list} {
  list-style: none;
  text-align: -webkit-match-parent;
  display: flex;
  flex-direction: column;
}
`

export const list: StyleSource<typeof classes> = { classes, styles }
