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

const source = {
  // display
  frame: frame.styles,
  heading: heading.styles,
  paragraph: paragraph.styles,

  // effect
  ripple: ripple.styles,

  //effect
  skeleton: skeleton.styles,

  // input
  "native-button": nativeButton.styles,

  // layout
  flex: flex.styles,
  positional: positional.style
}

const build = () => {
  write(source)
}

build()
