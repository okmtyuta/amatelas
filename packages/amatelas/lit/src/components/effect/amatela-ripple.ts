import { LitElement, html, unsafeCSS } from 'lit'
import styles from '@okmtyuta/amatelas-theme/styles.css?inline'
import { ripple } from '@okmtyuta/amatelas-theme'
import clsx from 'clsx'
import { property } from 'lit/decorators.js'

const classes = ripple.classes

export class AmatelasRipple extends LitElement {
  @property() x: number = 0
  @property() y: number = 0

  render() {
    return html`
      <span
        style=${`top:${15 - 100}px;left:${30 - 100}px;`}
        class=${clsx(classes.ripple)}
      ></span>
    `
  }

  static styles = unsafeCSS(styles)
}

declare global {
  interface HTMLElementTagNameMap {
    'amatelas-ripple': AmatelasRipple
  }
}
