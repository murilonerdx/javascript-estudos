import 'bootstrap/dist/css/bootstrap.min.css'
import { useState, useEffect } from 'react'

function App () {
  const [input, setInput] = useState('')
  const [tarefas, setTarefas] = useState([])

  function handleRegister (e) {
    e.preventDefault()

    alert('Adicionando tarefa')
    setTarefas([
      ...tarefas,
      input
    ])
    setInput('')
  }

  return (
    <div>
      <form onSubmit={handleRegister} className='m-2 '>
        <label>Nome da tarefa: </label>
        <br />
        <input
          class='form-control'
          value={input}
          onChange={e => setInput(e.target.value)}
        />
        <button class='btn btn-primary' type='submit'>
          Adicionar tarefa
        </button>
      </form>

      <div className='m-2'>
        {tarefas.map(tarefa => (
          <ul>
            <li key={tarefa}>
              <span>{tarefa}</span>
            </li>
          </ul>
        ))}
      </div>
    </div>
  )
}

export default App
