import { LitElement, html, unsafeCSS } from 'lit'
import styles from '@okmtyuta/amatelas-theme/components/list.css?inline'
import { styleSourceRecord } from '@okmtyuta/amatelas-theme'

const classes = styleSourceRecord.list.classes

export class AmatelasList extends LitElement {
  render() {
    return html`
      <ul class=${classes.list}>
        <slot></slot>
      </ul>
    `
  }

  static styles = unsafeCSS(styles)
}

declare global {
  interface HTMLElementTagNameMap {
    'amatelas-list': AmatelasList
  }
}
