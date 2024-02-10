import { LitElement, html, unsafeCSS } from 'lit'
import styles from '@okmtyuta/amatelas-theme/styles.css?inline'
import { skeleton } from '@okmtyuta/amatelas-theme'
import { property } from 'lit/decorators.js'
import clsx from 'clsx'

const classes = skeleton.classes

export class AmatelasSkeleton extends LitElement {
  @property()
  variant: 'circle' | 'text' | 'rectangle' | 'rounded' = 'rectangle'

  @property()
  height: number = 256

  render() {
    if (this.variant === 'rectangle' || this.variant === 'rounded') {
      return html`
        <div
          style=${`height:${this.height}px`}
          class=${clsx(classes.skeleton, classes[this.variant])}
        ></div>
      `
    }
    return html`
      <div class=${clsx(classes.skeleton, classes[this.variant])}></div>
    `
  }

  static styles = [unsafeCSS(styles)]
}

declare global {
  interface HTMLElementTagNameMap {
    'amatelas-skeleton': AmatelasSkeleton
  }
}
