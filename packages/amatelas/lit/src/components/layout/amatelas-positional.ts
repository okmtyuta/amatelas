import { LitElement, html, unsafeCSS } from 'lit'
import styles from '@okmtyuta/amatelas-theme/styles.css?inline'
import { positional } from '@okmtyuta/amatelas-theme'
import { property } from 'lit/decorators.js'
import clsx from 'clsx'

const classes = positional.classes

export class AmatelasPositional extends LitElement {
  @property()
  position: 'static' | 'relative' | 'fixed' | 'absolute' | 'sticky' = 'static'

  render() {
    return html`
      <div
        part="self"
        class=${clsx(classes.positional, classes[this.position])}
      >
        <slot></slot>
      </div>
    `
  }

  static styles = unsafeCSS(styles)
}

declare global {
  interface HTMLElementTagNameMap {
    'amatelas-positional': AmatelasPositional
  }
}
