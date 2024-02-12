import { strictEntries } from '@okmtyuta/amatelas-lib'
import fs from 'fs'
import { join } from 'path'
import { reset } from './theme'

type WriteSource = Record<string, string>

const writeResetStyles = () => {
  fs.mkdirSync('dist', { recursive: true })
  const fd = fs.openSync(join('dist', 'reset.css'), 'w')
  fs.writeSync(fd, reset.styles.replaceAll(/\s+/g, ' '))
  fs.closeSync(fd)
}
const writeComponentsStyles = (source: WriteSource) => {
  strictEntries(source).forEach(([name, styles]) => {
    fs.mkdirSync(join('dist', 'components'), { recursive: true })
    const fd = fs.openSync(join('dist', 'components', `${name}.css`), 'w')
    fs.writeSync(fd, styles.replaceAll(/\s+/g, ' '))
    fs.closeSync(fd)
  })
}
const writeStyles = (source: WriteSource) => {
  const styles = Object.values(source).join(' ')
  fs.mkdirSync('dist', { recursive: true })
  const fd = fs.openSync(join('dist', 'styles.css'), 'w')
  fs.writeSync(fd, styles.replaceAll(/\s+/g, ' '))
  fs.closeSync(fd)
}

export const write = (source: WriteSource) => {
  writeResetStyles()
  writeComponentsStyles(source)
  writeStyles(source)
}
