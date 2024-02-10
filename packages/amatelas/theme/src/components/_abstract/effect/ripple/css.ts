import { prefixedBy } from '@src/prefixedBy'

const _prefixed = prefixedBy('ripple')

const classes = {
  ripple: _prefixed(),
  effect: _prefixed('effect')
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
  background-color: red;

  animation: ${classes.effect} 1s forwards;
}
`

export const ripple = { classes, styles }
