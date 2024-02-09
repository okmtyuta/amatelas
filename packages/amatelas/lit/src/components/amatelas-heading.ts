import { LitElement, html, unsafeCSS } from 'lit'
import { property } from 'lit/decorators.js'
import clsx from 'clsx'

import styles from '@okmtyuta/amatelas-theme/styles.css?inline'
import { heading } from '@okmtyuta/amatelas-theme'

const classes = heading.classes

export class AmatelasHeading extends LitElement {
  @property()
  element: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' = 'h1'

  render() {
    switch (this.element) {
      case 'h1':
        return html`
          <h1 class=${clsx(classes.heading, classes[this.element])}>
            <slot></slot>
          </h1>
        `
      case 'h2':
        return html`
          <h2 class=${clsx(classes.heading, classes[this.element])}>
            <slot></slot>
          </h2>
        `
      case 'h3':
        return html`
          <h3 class=${clsx(classes.heading, classes[this.element])}>
            <slot></slot>
          </h3>
        `
      case 'h4':
        return html`
          <h4 class=${clsx(classes.heading, classes[this.element])}>
            <slot></slot>
          </h4>
        `
      case 'h5':
        return html`
          <h5 class=${clsx(classes.heading, classes[this.element])}>
            <slot></slot>
          </h5>
        `
      case 'h6':
        return html`
          <h6 class=${clsx(classes.heading, classes[this.element])}>
            <slot></slot>
          </h6>
        `
    }
  }

  static styles = unsafeCSS(styles)
}

declare global {
  interface HTMLElementTagNameMap {
    'amatelas-heading': AmatelasHeading
  }
}
