import { LitElement, unsafeCSS } from 'lit'
import { property } from 'lit/decorators.js'
import { html, unsafeStatic } from 'lit/static-html.js'
import clsx from 'clsx'

import styles from '@okmtyuta/amatelas-theme/components/heading.css?inline'
import { styleSourceRecord } from '@okmtyuta/amatelas-theme'

const classes = styleSourceRecord.heading.classes

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
