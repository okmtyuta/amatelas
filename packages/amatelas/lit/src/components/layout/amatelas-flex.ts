import { type CSSValue } from '@okmtyuta/amatelas-lib'
import { flex } from '@okmtyuta/amatelas-theme'
import { LitElement, unsafeCSS } from 'lit'
import { html, unsafeStatic } from 'lit/static-html.js'
import styles from '@okmtyuta/amatelas-theme/components/flex.css?inline'
import { property } from 'lit/decorators.js'
import clsx from 'clsx'

const classes = flex.classes

export class AmatelasFlex extends LitElement {
  @property() element: string = 'div'
  @property() direction: CSSValue['flexDirection'] = 'row'
  @property() wrap: boolean = false
  @property() alignContent: CSSValue['alignContent'] = 'normal'
  @property() justifyContent: CSSValue['justifyContent'] = 'normal'
  @property() alignItems: CSSValue['alignItems'] = 'normal'

  @property() gap: number = 0

  render() {
    return html`
      <${unsafeStatic(this.element)}
        part="self"
        style=${`gap:${this.gap}px`}
        class=${clsx(
          classes.flex,
          classes.direction[this.direction],
          classes.alignContent[this.alignContent],
          classes.justifyContent[this.justifyContent],
          classes.alignItems[this.alignItems],
          { [classes.wrap]: this.wrap }
        )}
      >
        <slot></slot>
      </${unsafeStatic(this.element)}>`
  }

  static styles = unsafeCSS(styles)
}

declare global {
  interface HTMLElementTagNameMap {
    'amatelas-flex': AmatelasFlex
  }
}
