import { AmatelasFrame, AmatelasHeading, AmatelasParagraph } from './components'

export { AmatelasFrame, AmatelasHeading, AmatelasParagraph }
export const init = () => {
  // display
  customElements.define('amatelas-frame', AmatelasFrame)
  customElements.define('amatelas-heading', AmatelasHeading)
  customElements.define('amatelas-paragraph', AmatelasParagraph)
}
