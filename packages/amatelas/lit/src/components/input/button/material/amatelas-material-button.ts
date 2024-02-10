import { LitElement, unsafeCSS } from 'lit'
import { property } from 'lit/decorators.js'
import { html, unsafeStatic } from 'lit/static-html.js'

import clsx from 'clsx'

import { nativeButton } from '@okmtyuta/amatelas-theme'
import styles from '@okmtyuta/amatelas-theme/styles.css?inline'
import { type Color } from '@okmtyuta/amatelas-lib'

const classes = nativeButton.classes

export class AmatelasMaterialButton extends LitElement {
  @property()
  element: string = 'button'

  @property()
  color: Color = 'info'

  @property()
  variant: 'standard' | 'filled' | 'outlined' = 'standard'

  render() {
    return html`
      <${unsafeStatic(this.element)}
        part="self"
        id="self"
        class=${clsx(
          classes.nativeButton,
          classes[this.variant],
          classes.color(this.color)
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
    'amatelas-material-button': AmatelasMaterialButton
  }
}
