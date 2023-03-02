import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom'
import './Header.css'

function Header () {
  return (
    <header>
      <h1>Murilo DEV</h1>
      <Link to='/'>Home</Link>
      <Link to='/sobre'>Sobre</Link>
    </header>
  )
}

export default Header
