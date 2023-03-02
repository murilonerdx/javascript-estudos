import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { useState, useEffect } from 'react'

function App () {
  const [data, setData] = useState([])

  useEffect(() => {
    async function fetchData () {
      const response = await fetch(
        'https://sujeitoprogramador.com/rn-api/?api=posts'
      )
      const jsonData = await response.json()
      setData(jsonData)
    }

    async function get () {
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log(error))
    }

    async function post () {
      fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
          title: 'foo',
          body: 'bar',
          userId: 1
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8'
        }
      })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log(error))
    }

    async function put () {
      fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'PUT',
        body: JSON.stringify({
          id: 1,
          title: 'foo',
          body: 'bar',
          userId: 1
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8'
        }
      })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log(error))
    }

    async function deletePost () {
      fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'DELETE'
      })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log(error))
    }

    fetchData()
  }, [])

  return (
    <div className='container'>
      <header>
        <strong>React Nutri</strong>
      </header>

      {data.map(item => {
        return (
          <article key={item.id} className='post'>
            <h1>Categoria: {item.categoria}</h1>
            <strong className='titulo'>{item.titulo}</strong>

            <img src={item.capa} alt={item.titulo} className='capa'/>
            <p className='subtitulo'>
              {item.subtitulo}
            </p>

            <button  className="botao" type="button" value="">Acessar pagina</button>
          </article>
        )
      })}
    </div>
  )
}

export default App
