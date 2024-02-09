import fs from 'fs'
// import { dirname } from 'path'

export const write = (...styles: string[]) => {
  // const currentDir = dirname(new URL(import.meta.url).pathname)
  fs.mkdirSync("./dist", { recursive: true })
  const fd = fs.openSync("./dist/styles.css", 'w')
  fs.writeSync(fd, styles.join(' ').replaceAll(/\s+/g, ' '))
  fs.closeSync(fd)
}
