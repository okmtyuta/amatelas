import {
  frame,
  heading,
  list,
  listItem,
  paragraph
} from '../components/_abstract/display'
import { ripple } from '../components/_abstract/effect/ripple'
import { skeleton } from '../components/_abstract/feedback'
import { nativeButton } from '../components/_abstract/input'
import { flex, positional } from '../components/_abstract/layout'

export const styleSourceRecord = {
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
} as const

