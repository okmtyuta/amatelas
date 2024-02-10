import { LitElement, unsafeCSS } from 'lit'
import { property } from 'lit/decorators.js'
import clsx from 'clsx'

import styles from '@okmtyuta/amatelas-theme/styles.css?inline'
import { heading } from '@okmtyuta/amatelas-theme'
import { html, unsafeStatic } from 'lit/static-html.js'

const classes = heading.classes

export class AmatelasHeading extends LitElement {
  @property()
  element: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' = 'h1'

  render() {
    return html`
      <${unsafeStatic(this.element)} class=${clsx(
      classes.heading,
      classes[this.element]
    )}>
        <slot></slot>
      </${unsafeStatic(this.element)}>
    `
  }

  static styles = unsafeCSS(styles)
}

declare global {
  interface HTMLElementTagNameMap {
    'amatelas-heading': AmatelasHeading
  }
}
