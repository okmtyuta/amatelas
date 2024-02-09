import { frame, heading, paragraph } from '.'

import { write } from './write'

const build = () => {
  write(frame.styles, heading.styles, paragraph.styles)
}

build()
