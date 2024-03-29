import { LitElement, html, unsafeCSS } from 'lit'
import styles from '@okmtyuta/amatelas-theme/components/paragraph.css?inline'
import { styleSourceRecord } from '@okmtyuta/amatelas-theme'

const classes = styleSourceRecord.paragraph.classes

export class AmatelasParagraph extends LitElement {
  render() {
    return html`
      <p class=${classes.paragraph}>
        <slot></slot>
      </p>
    `
  }

  static styles = unsafeCSS(styles)
}

declare global {
  interface HTMLElementTagNameMap {
    'amatelas-paragraph': AmatelasParagraph
  }
}
