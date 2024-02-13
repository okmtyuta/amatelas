import { Hex, Recorder, color, colors, strictEntries } from '@okmtyuta/amatelas-lib'
import { prefixedBy } from '@src/prefixedBy'
import { StyleSource } from '@src/types'

const _prefixed = prefixedBy('ripple')

const baseClasses = {
  ripple: _prefixed(),
  effect: _prefixed('effect'),
  light: _prefixed('light'),
  dark: _prefixed('dark')
} as const

const colorRecorder = new Recorder(colors, _prefixed)

const classes = {
  ...colorRecorder.record,
  ...baseClasses
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
    const colorClass = classes[key]

    if (!colorClass) {
      return ''
    }

    const style = /* css */ `
    .${classes.ripple}.${colorClass}.${classes.light} {
      background-color: ${hex.lighten(0.9).hexString};
    }
    .${classes.ripple}.${colorClass}.${classes.dark} {
      background-color: ${hex.lighten(0.5).hexString};
    }
    `
    return style
  })
  .join(' ')

export const ripple: StyleSource<typeof classes> = {
  classes,
  styles: [styles, colorStyles].join(' ')
}
