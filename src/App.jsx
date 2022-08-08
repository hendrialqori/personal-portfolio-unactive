import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './page/Index'
import NotFoundPage from './page/404'
import Detail from './page/Detail'

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
