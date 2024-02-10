import {
  AmatelasFrame,
  AmatelasHeading,
  AmatelasParagraph
} from './components/display'

import { AmatelasButton } from './components/input'

import { AmatelasPositional } from './components/layout'

export {
  AmatelasFrame,
  AmatelasHeading,
  AmatelasParagraph,
  AmatelasButton,
  AmatelasPositional
}

export const init = () => {
  // display
  customElements.define('amatelas-frame', AmatelasFrame)
  customElements.define('amatelas-heading', AmatelasHeading)
  customElements.define('amatelas-paragraph', AmatelasParagraph)

  // input
  customElements.define('amatelas-button', AmatelasButton)

  // layout
  customElements.define('amatelas-positional', AmatelasPositional)
}
