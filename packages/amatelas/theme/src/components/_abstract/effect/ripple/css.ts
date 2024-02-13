import { Color, Hex, color, strictEntries } from '@okmtyuta/amatelas-lib'
import { prefixedBy } from '@src/prefixedBy'

const _prefixed = prefixedBy('ripple')

const classes = {
  ripple: _prefixed(),
  effect: _prefixed('effect'),
  light: _prefixed('light'),
  dark: _prefixed('dark'),
  color: (color: Color) => {
    return _prefixed(color)
  }
}

const styles = /* css */ `
@keyframes ${classes.effect} {
  0% {
    transform: scale(0);
    opacity: 1;
  }
  100% {
    transform: scale(1);
    opacity: 0;
  }
}
.${classes.ripple} {
  position: absolute;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  animation: ${classes.effect} 1s forwards;
}
`

const colorStyles = strictEntries(color)
  .map(([key, code]) => {
    const hex = new Hex(code)

    const style = /* css */ `
    .${classes.ripple}.${classes.color(key)}.${classes.light} {
      background-color: ${hex.lighten(0.9).hexString};
    }
    .${classes.ripple}.${classes.color(key)}.${classes.dark} {
      background-color: ${hex.lighten(0.5).hexString};
    }
    `
    return style
  })
  .join(' ')

export const ripple = { classes, styles: [styles, colorStyles].join(' ') }
