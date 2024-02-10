import { positional } from '@okmtyuta/amatelas-theme'
import { LitElement, unsafeCSS } from 'lit'
import { html, unsafeStatic } from 'lit/static-html.js'
import styles from '@okmtyuta/amatelas-theme/styles.css?inline'
import { property } from 'lit/decorators.js'
import clsx from 'clsx'

const classes = positional.classes

export class AmatelasPositional extends LitElement {
  @property()
  element: string = 'div'

  @property()
  position: 'static' | 'relative' | 'fixed' | 'absolute' | 'sticky' = 'static'

  render() {
    return html`
      <${unsafeStatic(this.element)} part="self" class=${clsx(
      classes.positional,
      classes[this.position]
    )} >
        <slot></slot>
      </${unsafeStatic(this.element)}>`
  }

  static styles = unsafeCSS(styles)
}

declare global {
  interface HTMLElementTagNameMap {
    'amatelas-positional': AmatelasPositional
  }
}
