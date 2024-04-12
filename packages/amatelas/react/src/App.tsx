import '@okmtyuta/amatelas-theme/styles.css'
import '@okmtyuta/amatelas-theme/reset.css'

import { Frame } from './components/display'
import { Math } from './components/math/math'

import 'katex/dist/katex.min.css'

export const App = () => {
  return (
    <Frame>
      境界準同型<Math>\partial_*</Math>に対して，ホモロジー群は
      <Math display>H = \ker \partial_* / \im \partial_*</Math>
      で与えられる。
    </Frame>
  )
}
