import fs from 'fs'
import { join } from 'path'
import { reset } from './theme'
import { styleSourceRecord } from './style-source/style-source-record'
import { toEntries } from '@okmtyuta/amatelas-lib'

const writeResetStyle = () => {
  fs.mkdirSync('dist', { recursive: true })
  const fd = fs.openSync(join('dist', 'reset.css'), 'w')
  fs.writeSync(fd, reset.style.replaceAll(/\s+/g, ' '))
  fs.closeSync(fd)
}
const writeComponentsStyle = () => {
  toEntries(styleSourceRecord).forEach(([name, styleSource]) => {
    fs.mkdirSync(join('dist', 'components'), { recursive: true })
    const fd = fs.openSync(join('dist', 'components', `${name}.css`), 'w')
    fs.writeSync(fd, styleSource.style.replaceAll(/\s+/g, ' '))
    fs.closeSync(fd)
  })
}
const writeJoinedStyle = () => {
  const styles = toEntries(styleSourceRecord)
    .map(([_, styleSource]) => styleSource.style)
    .join(' ')
  fs.mkdirSync('dist', { recursive: true })
  const fd = fs.openSync(join('dist', 'styles.css'), 'w')
  fs.writeSync(fd, styles.replaceAll(/\s+/g, ' '))
  fs.closeSync(fd)
}

export const write = () => {
  writeResetStyle()
  writeComponentsStyle()
  writeJoinedStyle()
}
