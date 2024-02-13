import { strictEntries } from '@okmtyuta/amatelas-lib'
import { writeComponentsStyles, writeStyles } from './write'
import { styleSources } from '.'

const build = () => {
  const _styles: string[] = []
  strictEntries(styleSources).forEach(([name, source]) => {
    writeComponentsStyles(name, source.styles)
    _styles.push(source.styles)
  })
  writeStyles(_styles.join(' '))
}

build()
