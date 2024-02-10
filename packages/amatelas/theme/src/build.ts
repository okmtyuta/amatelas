import {
  frame,
  heading,
  nativeButton,
  paragraph,
  positional,
  ripple,
  skeleton
} from '.'

import { write } from './write'

const build = () => {
  write(
    // display
    frame.styles,
    heading.styles,
    paragraph.styles,

    // effect
    ripple.styles,
    ripple.colorStyles,

    //effect
    skeleton.styles,

    // input
    nativeButton.styles,
    nativeButton.colorStyles,

    // layout
    positional.style
  )
}

build()
