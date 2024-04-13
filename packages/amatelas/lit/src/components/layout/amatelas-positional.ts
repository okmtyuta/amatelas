import { LitElement, unsafeCSS } from 'lit'
import { html, unsafeStatic } from 'lit/static-html.js'
import { property } from 'lit/decorators.js'

import { CSSValue } from '@okmtyuta/amatelas-lib'
import { styleSourceRecord } from '@okmtyuta/amatelas-theme'
import styles from '@okmtyuta/amatelas-theme/components/positional.css?inline'

import clsx from 'clsx'

const classes = styleSourceRecord.positional.classes

export class AmatelasPositional extends LitElement {
  @property()
  element: string = 'div'

  @property()
  position: CSSValue['position'] = 'static'

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
