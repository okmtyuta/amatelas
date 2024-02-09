import {
  AmatelasFrame,
  AmatelasHeading,
  AmatelasParagraph
} from './components/display'
import { AmatelasPositional } from './components/layout'

export { AmatelasFrame, AmatelasHeading, AmatelasParagraph, AmatelasPositional }

export const init = () => {
  // display
  customElements.define('amatelas-frame', AmatelasFrame)
  customElements.define('amatelas-heading', AmatelasHeading)
  customElements.define('amatelas-paragraph', AmatelasParagraph)

  // layout
  customElements.define('amatelas-positional', AmatelasPositional)
}
