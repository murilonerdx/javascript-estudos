import 'bootstrap/dist/css/bootstrap.min.css'
import { useState, useEffect } from 'react'

function App () {
  const [nome, setNome] = useState('')
  const [idade, setIdade] = useState('')
  const [email, setEmail] = useState('')

  const [user, setUser] = useState({})
  const [users, setUsers] = useState([])

  useEffect(() => {
    if (Object.keys(user).length > 0) {
      setUsers((prevUsers) => [...prevUsers, user]);
    }
  }, [user]);

  function handleRegister (e) {
    e.preventDefault()

    alert('Usuario registrado')
    setUser({
      nome: nome,
      idade: idade,
      email: email
    })
  }

  return (
    <div>
      <form onSubmit={handleRegister} className='m-2 '>
        <label>Nome: </label>
        <br />
        <input
          class='form-control'
          value={nome}
          onChange={e => setNome(e.target.value)}
        />

        <label>Email: </label>
        <br />
        <input
          type='text'
          value={email}
          class='form-control'
          onChange={e => setEmail(e.target.value)}
        />

        <label>Idade: </label>
        <br />
        <input
          type='text'
          class='form-control'
          onChange={e => setIdade(e.target.value)}
          value={idade}
        />

        <button class='btn btn-primary' type='submit'>
          Enviar
        </button>
      </form>

      <div className='m-2'>
        {users.map((u, index) => (
          <li key={index}>
           <h1>Bem vindo {u.nome}</h1>
            <br />
            <span>Email: {u.email}</span>
            <br />
            <span>Idade: {u.idade}</span>
            <br />
          </li>
        ))}
      </div>
    </div>
  )
}

export default App
