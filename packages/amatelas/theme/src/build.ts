import {
  // display
  frame,
  heading,
  paragraph,

  // effect
  ripple,

  // feedback
  skeleton,

  // input
  nativeButton,

  // layout
  flex,
  positional
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
    flex.styles,
    positional.style
  )
}

build()
