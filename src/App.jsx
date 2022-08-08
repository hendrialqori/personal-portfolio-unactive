import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.js'
import NotFoundPage from './pages/404.js'
import Detail from './pages/Detail.js'

function App () {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='detail/:id' element={<Detail />} />
          <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
