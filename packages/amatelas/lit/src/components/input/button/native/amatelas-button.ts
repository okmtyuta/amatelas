import { LitElement, unsafeCSS } from 'lit'
import { property } from 'lit/decorators.js'
import { html, unsafeStatic } from 'lit/static-html.js'

import clsx from 'clsx'

import { styleSourceRecord } from '@okmtyuta/amatelas-theme'
import styles from '@okmtyuta/amatelas-theme/components/nativeButton.css?inline'
import { type Color } from '@okmtyuta/amatelas-lib'

const classes = styleSourceRecord.nativeButton.classes

export class AmatelasButton extends LitElement {
  @property()
  element: string = 'button'

  @property()
  color: Color = 'info'

  @property()
  variant: 'standard' | 'filled' | 'outlined' = 'standard'

  render() {
    return html`
      <${unsafeStatic(this.element)}
        class=${clsx(
          classes.nativeButton,
          classes[this.variant],
          classes[this.color]
        )}
      >
        <slot></slot>
      </${unsafeStatic(this.element)}>
    `
  }

  static styles = unsafeCSS(styles)
}

declare global {
  interface HTMLElementTagNameMap {
    'amatelas-button': AmatelasButton
  }
}
