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
.${classes.nativeButton}.${classes.filled} {
  outline: none;
  position: relative;
  overflow: hidden;
  padding: 12px 20px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  box-sizing: border-box;
  cursor: pointer;
}
.${classes.nativeButton}.${classes.filled}:disabled {
  color: ${new Hex(color.neutral).getDarken(0.95).getHexString()};
  background-color: ${new Hex(color.neutral).getLighten(0.9).getHexString()};
  border: solid 1px ${new Hex(color.neutral).getLighten(0.9).getHexString()};
  cursor: not-allowed;
}

.${classes.nativeButton}.${classes.outlined} {
  outline: none;
  position: relative;
  overflow: hidden;
  padding: 12px 20px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  box-sizing: border-box;
  cursor: pointer;
}
.${classes.nativeButton}.${classes.outlined}:disabled {
  color: ${new Hex(color.neutral).getDarken(0.95).getHexString()};
  background-color: ${new Hex(color.neutral).getLighten(0.9).getHexString()};
  cursor: not-allowed;
  border: ${new Hex(color.neutral).getDarken(0.95).getHexString()} 1px solid;
}

.${classes.nativeButton}.${classes.standard} {
  outline: none;
  position: relative;
  overflow: hidden;
  padding: 12px 20px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  box-sizing: border-box;
  cursor: pointer;
}
.${classes.nativeButton}.${classes.standard}:disabled {
  color: ${new Hex(color.neutral).getDarken(0.95).getHexString()};
  background-color: ${new Hex(color.neutral).getLighten(0.9).getHexString()};
  border: solid 1px ${new Hex(color.neutral).getLighten(0.9).getHexString()};
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
        background-color: ${hex.getHexString()};
        border: solid 1px ${hex.getHexString()};
      }
      .${classes.nativeButton}.${classes.filled}.${classes.color(
      key
    )}:not(:disabled):hover {
        background-color: ${hex.getLighten(0.1).getHexString()};
      }

      .${classes.nativeButton}.${classes.outlined}.${classes.color(
      key
    )}:not(:disabled) {
        color: ${hex.getHexString()};
        border: ${hex.getHexString()} solid 1px;
        background-color: inherit;
      }
      .${classes.nativeButton}.${classes.outlined}.${classes.color(
      key
    )}:not(:disabled):hover {
        background-color: ${hex.getLighten(0.95).getHexString()};
      }

      .${classes.nativeButton}.${classes.standard}.${classes.color(
      key
    )}:not(:disabled) {
        border: none;
        color: ${hex.getHexString()};
        background-color: transparent;
        border: solid 1px transparent;
      }
      .${classes.nativeButton}.${classes.standard}.${classes.color(
      key
    )}:not(:disabled):hover {
        background-color: ${hex.getLighten(0.95).getHexString()};
        border: solid 1px ${hex.getLighten(0.95).getHexString()};
      }
    `
    return style
  })
  .join(' ')

export const nativeButton = { classes, styles, colorStyles }
