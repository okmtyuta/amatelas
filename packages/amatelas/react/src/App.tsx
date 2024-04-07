import '@okmtyuta/amatelas-theme/styles.css'
import '@okmtyuta/amatelas-theme/reset.css'
import { Link } from './components/display/link/link'

export const App = () => {
  return (
    <div>
      <Link href='#'>aaa</Link>
      <Link underline='always' href='#'>bbb</Link>
      <Link underline='hover' href='#'>ccc</Link>
    </div>
  )
}
