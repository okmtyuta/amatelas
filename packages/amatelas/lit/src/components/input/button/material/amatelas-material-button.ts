import { LitElement, unsafeCSS } from 'lit'
import { property } from 'lit/decorators.js'
import { html, unsafeStatic } from 'lit/static-html.js'

import clsx from 'clsx'

import { styleSourceRecord } from '@okmtyuta/amatelas-theme'
import styles from '@okmtyuta/amatelas-theme/components/nativeButton.css?inline'
import { type Color } from '@okmtyuta/amatelas-lib'
import { repeat } from 'lit/directives/repeat.js'

type Ripple = {
  x: number
  y: number
  key: string
}
const classes = styleSourceRecord.nativeButton.classes

export class AmatelasMaterialButton extends LitElement {
  @property() element: string = 'button'
  @property() color: Color = 'info'
  @property() variant: 'standard' | 'filled' | 'outlined' = 'standard'
  @property() ripples: Ripple[] = []

  rippleTheme = this.variant === 'filled' ? 'light' : 'dark'

  handleClick = (e: MouseEvent) => {
    const button = this.shadowRoot?.querySelector('#self')
    if (button) {
      const x = e.clientX - button.getBoundingClientRect().x - 100
      const y = e.clientY - button.getBoundingClientRect().y - 100
      const key = crypto.randomUUID()
      this.ripples = [...this.ripples, { x, y, key }]

      setTimeout(() => {
        this.ripples = this.ripples.filter((ripple) => ripple.key !== key)
      }, 1000)
    }
  }

  constructor() {
    super()
    this.addEventListener('click', this.handleClick)
  }

  render() {
    return html`
      <${unsafeStatic(this.element)}
        part="self"
        id="self"
        class=${clsx(
          classes.nativeButton,
          classes[this.variant],
          classes[this.color]
        )}
      >
      ${repeat(
        this.ripples,
        (ripple) => ripple.key,
        (ripple) => html`
          <amatelas-ripple
            color=${this.color}
            x=${ripple.x}
            y=${ripple.y}
            theme=${this.rippleTheme}
          ></amatelas-ripple>
        `
      )}
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
