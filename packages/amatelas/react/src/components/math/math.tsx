// import { styleSourceRecord } from '@okmtyuta/amatelas-theme'
// import clsx from 'clsx'

import katex from 'katex'

type MathProps = {
  display?: boolean
  throwOnError?: boolean
  children?: string
}

export const Math = ({
  display = false,
  throwOnError = false,
  children = '',
  ...props
}: MathProps) => {
  const __html = katex.renderToString(children, {
    throwOnError,
    displayMode: display
  })
  return <span {...props} dangerouslySetInnerHTML={{ __html }} />
}
