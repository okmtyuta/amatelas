import '@okmtyuta/amatelas-theme/styles.css'
import '@okmtyuta/amatelas-theme/reset.css'
import { Link } from './components/display/link/link'
import { Button } from './components/input'
import { MaterialButton } from './components/input/button/material/material-button'

export const App = () => {
  return (
    <div>
      動かない
      <Link href="#">aaa</Link>
      <Link underline="always" href="#">
        bbb
      </Link>
      <Link underline="hover" href="#">
        ccc
      </Link>
      <MaterialButton>material</MaterialButton>
    </div>
  )
}
