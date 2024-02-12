import { prefixedBy } from '@src/prefixedBy'

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

export const list = { classes, styles }
