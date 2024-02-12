import {
  // display
  frame,
  heading,
  list,
  listItem,
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
import { reset } from './theme'

import { write } from './write'

const source = {
  // display
  frame: frame.styles,
  heading: heading.styles,
  list: list.styles,
  'list-item': listItem.styles,
  paragraph: paragraph.styles,

  // effect
  ripple: ripple.styles,

  //effect
  skeleton: skeleton.styles,

  // input
  'native-button': nativeButton.styles,

  // layout
  flex: flex.styles,
  positional: positional.style,

  // reset
  reset: reset.styles
}

const build = () => {
  write(source)
}

build()
