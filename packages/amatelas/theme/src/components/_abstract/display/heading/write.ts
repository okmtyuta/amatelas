import fs from 'fs'

import { headingStyles } from './css'

// const __dirname = dirname(new URL(import.meta.url).pathname)
const __dirname = "./dist"

const style = headingStyles().join(' ').replaceAll(/\s+/g, ' ')
const fd = fs.openSync(`${__dirname}/styles.css`, 'w')
fs.writeSync(fd, style)
fs.closeSync(fd)
