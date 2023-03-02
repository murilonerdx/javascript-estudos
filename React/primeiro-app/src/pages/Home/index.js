import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom'

function Home () {
  return (
    <div>
      <h1>Bem vindo a home</h1>

      <Link to='/sobre'>Sobre</Link>
    </div>
  )
}

export default Home
