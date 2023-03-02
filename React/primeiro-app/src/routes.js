import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Sobre from './pages/Sobre'
import  Header  from './pages/Header'
import Erro from './pages/Error'
import Produto from './pages/Produto'

function RoutesApp () {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sobre' element={<Sobre />} />
        <Route path='/produto/:id' element={<Produto />} />
        <Route path='*' element={<Erro />} />
      </Routes>
    </BrowserRouter>
  )
}

export default RoutesApp
