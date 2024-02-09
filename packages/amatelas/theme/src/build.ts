import { frame, heading, paragraph, positional } from '.'

import { write } from './write'

const build = () => {
  write(frame.styles, heading.styles, paragraph.styles, positional.style)
}

build()
