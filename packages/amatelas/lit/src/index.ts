import {
  AmatelasFrame,
  AmatelasHeading,
  AmatelasParagraph
} from './components/display'

import { AmatelasRipple } from './components/effect'

import { AmatelasButton, AmatelasMaterialButton } from './components/input'

import { AmatelasPositional } from './components/layout'

export {
  // display
  AmatelasFrame,
  AmatelasHeading,
  AmatelasParagraph,

  // effect
  AmatelasRipple,

  // input
  AmatelasButton,
  AmatelasMaterialButton,

  // layout
  AmatelasPositional
}

export const init = () => {
  // display
  customElements.define('amatelas-frame', AmatelasFrame)
  customElements.define('amatelas-heading', AmatelasHeading)
  customElements.define('amatelas-paragraph', AmatelasParagraph)

  // effect
  customElements.define('amatelas-ripple', AmatelasRipple)

  // input
  customElements.define('amatelas-button', AmatelasButton)
  customElements.define('amatelas-material-button', AmatelasMaterialButton)

  // layout
  customElements.define('amatelas-positional', AmatelasPositional)
}
