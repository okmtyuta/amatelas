import { LitElement, html, unsafeCSS } from 'lit'
import styles from '@okmtyuta/amatelas-theme/components/list-item.css?inline'
import { listItem } from '@okmtyuta/amatelas-theme'

const classes = listItem.classes

export class AmatelasListItem extends LitElement {
  render() {
    return html`
      <li class=${classes.listItem}>
        <amatelas-disc-svg class=${classes.marker}></amatelas-disc-svg>
        <slot></slot>
      </li>
    `
  }

  static styles = unsafeCSS(styles)
}

declare global {
  interface HTMLElementTagNameMap {
    'amatelas-list-item': AmatelasListItem
  }
}
