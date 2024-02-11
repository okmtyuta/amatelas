import { LitElement, html, unsafeCSS } from 'lit'
import styles from '@okmtyuta/amatelas-theme/components/ripple.css?inline'
import { ripple } from '@okmtyuta/amatelas-theme'
import clsx from 'clsx'
import { property } from 'lit/decorators.js'
import { Color } from '@okmtyuta/amatelas-lib'

const classes = ripple.classes

export class AmatelasRipple extends LitElement {
  @property() x: number = 0
  @property() y: number = 0
  @property() color: Color = 'info'
  @property() theme: 'dark' | 'light' = 'light'

  render() {
    return html`
      <span
        style=${`top:${this.y}px;left:${this.x}px;`}
        class=${clsx(
          classes.ripple,
          classes.color(this.color),
          classes[this.theme]
        )}
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
