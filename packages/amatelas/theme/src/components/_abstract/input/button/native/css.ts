import { color, Hex, strictEntries, type Color } from '@okmtyuta/amatelas-lib'
import { prefixedBy } from '@src/prefixedBy'

const _prefixed = prefixedBy('native-button')

const classes = {
  nativeButton: _prefixed(),
  standard: _prefixed('standard'),
  filled: _prefixed('filled'),
  outlined: _prefixed('outlined'),

  color: (color: Color) => {
    return _prefixed(color)
  }
}

const styles = /* css */ `
.${classes.nativeButton} {
  height: 48px;
  outline: none;
  position: relative;
  overflow: hidden;
  padding: 12px 20px;
  border-radius: 4px;
  box-sizing: border-box;
  cursor: pointer;
  -webkit-tap-highlight-color: rgba(0,0,0,0);
}
.${classes.nativeButton}:disabled {
  color: ${new Hex(color.neutral).darken(0.95).hexString};
  background-color: ${new Hex(color.neutral).lighten(0.9).hexString};
  border: solid 1px ${new Hex(color.neutral).lighten(0.9).hexString};
  cursor: not-allowed;
}

`
// const sizeVariations = () => {
//   const sizes = ['xs', 'sm', 'md', 'lg', 'xl', 'full', 'auto']
//   const _sizeVariations: string[] = []

//   for (const size of sizes) {
//     _sizeVariations.push(/* css */ `
//     .${filledButtonPrefixed(size)} {
//       width: var(--AMUI-button-size-${size})
//     }
//     `)
//   }
//   return _sizeVariations
// }

const colorStyles = strictEntries(color)
  .map(([key, code]) => {
    const hex = new Hex(code)

    const style = /* css */ `
    .${classes.nativeButton}.${classes.filled}.${classes.color(
      key
    )}:not(:disabled) {
      border: none;
      color: white;
      background-color: ${hex.hexString};
    }
    .${classes.nativeButton}.${classes.filled}.${classes.color(
      key
    )}:not(:disabled):hover {
      background-color: ${hex.lighten(0.1).hexString};
    }

    .${classes.nativeButton}.${classes.outlined}.${classes.color(
      key
    )}:not(:disabled) {
      color: ${hex.hexString};
      border: ${hex.hexString} solid 1px;
      background-color: inherit;
    }
    .${classes.nativeButton}.${classes.outlined}.${classes.color(
      key
    )}:not(:disabled):hover {
      background-color: ${hex.lighten(0.95).hexString};
    }

    .${classes.nativeButton}.${classes.standard}.${classes.color(
      key
    )}:not(:disabled) {
      border: none;
      color: ${hex.hexString};
      background-color: transparent;
    }
    .${classes.nativeButton}.${classes.standard}.${classes.color(
      key
    )}:not(:disabled):hover {
      background-color: ${hex.lighten(0.95).hexString};
    }
    `
    return style
  })
  .join(' ')

export const nativeButton = { classes, styles: [styles, colorStyles].join(' ') }
