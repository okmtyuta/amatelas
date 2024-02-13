import { LitElement, css, unsafeCSS } from 'lit'
import { property } from 'lit/decorators.js'
import { html, unsafeStatic } from 'lit/static-html.js'

import clsx from 'clsx'

import { styleSources } from '@okmtyuta/amatelas-theme'
import styles from '@okmtyuta/amatelas-theme/components/nativeButton.css?inline'
import { type Color } from '@okmtyuta/amatelas-lib'

const classes = styleSources.nativeButton.classes

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

  static styles = [
    unsafeCSS(styles),
    css`
      :host {
        display: inline-block;
      }
    `
  ]
}

declare global {
  interface HTMLElementTagNameMap {
    'amatelas-button': AmatelasButton
  }
}
