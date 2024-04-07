import '@okmtyuta/amatelas-theme/styles.css'
import '@okmtyuta/amatelas-theme/reset.css'

import { Frame, Heading, Typography } from './components/display'
import { Flex } from './components/layout'

export const App = () => {
  return (
    <Frame>
      <Heading>【徹底解説】ベータ関数とは</Heading>
      <Flex alignItems='center' style={{ gap: '12px' }}>
        <span>数理統計学</span>
        <span>
          <Typography color='neutral' size="caption">2024/3/27</Typography>
        </span>
      </Flex>
    </Frame>
  )
}
