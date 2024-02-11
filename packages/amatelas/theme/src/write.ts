import { strictEntries } from '@okmtyuta/amatelas-lib'
import fs from 'fs'
import { join } from 'path'

type WriteSource = Record<string, string>

export const write = (source: WriteSource) => {
  strictEntries(source).forEach(([name, styles]) => {
    fs.mkdirSync(join('dist', 'components'), { recursive: true })
    const fd = fs.openSync(join('dist', 'components', `${name}.css`), 'w')
    fs.writeSync(fd, styles.replaceAll(/\s+/g, ' '))
    fs.closeSync(fd)
  })

  const styles = Object.values(source).join(' ')
  fs.mkdirSync('dist', { recursive: true })
  const fd = fs.openSync(join('dist', 'styles.css'), 'w')
  fs.writeSync(fd, styles.replaceAll(/\s+/g, ' '))
  fs.closeSync(fd)
}
