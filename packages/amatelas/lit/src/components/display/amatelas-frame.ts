import { LitElement, html, unsafeCSS } from 'lit'
import styles from '@okmtyuta/amatelas-theme/components/frame.css?inline'
import { styleSources } from '@okmtyuta/amatelas-theme'

const classes = styleSources.frame.classes

export class AmatelasFrame extends LitElement {
  render() {
    return html`
      <div class=${classes.frame}>
        <slot></slot>
      </div>
    `
  }

  static styles = unsafeCSS(styles)
}

declare global {
  interface HTMLElementTagNameMap {
    'amatelas-frame': AmatelasFrame
  }
}
