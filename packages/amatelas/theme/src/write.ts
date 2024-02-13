import fs from 'fs'
import { join } from 'path'
import { reset } from './theme'

export const writeResetStyles = () => {
  fs.mkdirSync('dist', { recursive: true })
  const fd = fs.openSync(join('dist', 'reset.css'), 'w')
  fs.writeSync(fd, reset.styles.replaceAll(/\s+/g, ' '))
  fs.closeSync(fd)
}
export const writeComponentsStyles = (name: string, styles: string) => {
  fs.mkdirSync(join('dist', 'components'), { recursive: true })
  const fd = fs.openSync(join('dist', 'components', `${name}.css`), 'w')
  fs.writeSync(fd, styles.replaceAll(/\s+/g, ' '))
  fs.closeSync(fd)
}
export const writeStyles = (styles: string) => {
  fs.mkdirSync('dist', { recursive: true })
  const fd = fs.openSync(join('dist', 'styles.css'), 'w')
  fs.writeSync(fd, styles.replaceAll(/\s+/g, ' '))
  fs.closeSync(fd)
}
