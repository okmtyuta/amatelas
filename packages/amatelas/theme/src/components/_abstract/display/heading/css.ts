import { prefixedBy } from '@src/prefixedBy'
import { responsiveFontSize, fontWeight } from '@okmtyuta/amatelas-lib'

const _prefixed = prefixedBy('heading')

const heading = _prefixed()
const h1 = _prefixed('h1')
const h2 = _prefixed('h2')
const h3 = _prefixed('h3')
const h4 = _prefixed('h4')
const h5 = _prefixed('h5')
const h6 = _prefixed('h6')

const margin = {
  h1: { top: 64, bottom: 24 },
  h2: { top: 64, bottom: 24 },
  h3: { top: 40, bottom: 24 },
  h4: { top: 40, bottom: 16 },
  h5: { top: 40, bottom: 16 },
  h6: { top: 24, bottom: 16 }
}

const base = /* css */ `
.${heading}.${h1} {
  margin-top: ${margin.h1.top}px;
  margin-bottom: ${margin.h1.bottom}px;
  ${responsiveFontSize('h1')}
  font-weight: ${fontWeight.h1};
}
.${heading}.${h2} {
  margin-top: ${margin.h2.top}px;
  margin-bottom: ${margin.h2.bottom}px;
  ${responsiveFontSize('h2')}
  font-weight:  ${fontWeight.h2};
}
.${heading}.${h3} {
  margin-top: ${margin.h3.top}px;
  margin-bottom: ${margin.h3.bottom}px;
  ${responsiveFontSize('h3')}
  font-weight:  ${fontWeight.h3};
}
.${heading}.${h4} {
  margin-top: ${margin.h4.top}px;
  margin-bottom: ${margin.h4.bottom}px;
  ${responsiveFontSize('h4')}
  font-weight:  ${fontWeight.h4};
}
.${heading}.${h5} {
  margin-top: ${margin.h5.top}px;
  margin-bottom: ${margin.h5.bottom}px;
  ${responsiveFontSize('h5')}
  font-weight:  ${fontWeight.h5};
}
.${heading}.${h6} {
  margin-top: ${margin.h6.top}px;
  margin-bottom: ${margin.h6.bottom}px;
  ${responsiveFontSize('h6')}
  font-weight:  ${fontWeight.h6};
}
`

export const headingClasses = { heading, h1, h2, h3, h4, h5, h6 }

export const headingStyles = () => {
  const styles = [base]
  return styles
}
