import {
  AmatelasFrame,
  AmatelasHeading,
  AmatelasList,
  AmatelasListItem,
  AmatelasParagraph
} from './components/display'
import { AmatelasRipple } from './components/effect'
import { AmatelasSkeleton } from './components/feedback/skeleton/amatelas-skeleton'
import { AmatelasButton, AmatelasMaterialButton } from './components/input'
import { AmatelasFlex, AmatelasPositional } from './components/layout'

import { AmatelasCheckedSVG, AmatelasDiscSVG } from './svg'

export {
  // display
  AmatelasFrame,
  AmatelasHeading,
  AmatelasList,
  AmatelasListItem,
  AmatelasParagraph,

  // effect
  AmatelasRipple,

  // feedback
  AmatelasSkeleton,

  // input
  AmatelasButton,
  AmatelasMaterialButton,

  // layout
  AmatelasFlex,
  AmatelasPositional,

  // svg
  AmatelasCheckedSVG,
  AmatelasDiscSVG
}

export const init = () => {
  // display
  customElements.define('amatelas-frame', AmatelasFrame)
  customElements.define('amatelas-heading', AmatelasHeading)
  customElements.define('amatelas-list', AmatelasList)
  customElements.define('amatelas-list-item', AmatelasListItem)
  customElements.define('amatelas-paragraph', AmatelasParagraph)

  // effect
  customElements.define('amatelas-ripple', AmatelasRipple)

  // feedback
  customElements.define('amatelas-skeleton', AmatelasSkeleton)

  // input
  customElements.define('amatelas-button', AmatelasButton)
  customElements.define('amatelas-material-button', AmatelasMaterialButton)

  // layout
  customElements.define('amatelas-flex', AmatelasFlex)
  customElements.define('amatelas-positional', AmatelasPositional)

  // svg
  customElements.define('amatelas-checked-svg', AmatelasCheckedSVG)
  customElements.define('amatelas-disc-svg', AmatelasDiscSVG)
}
