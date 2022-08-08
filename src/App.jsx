import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Index from './pages/Index'
import NotFoundPage from './pages/404'
import Detail from './pages/Detail'

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Index />} />
          <Route path='detail/:id' element={<Detail />} />
          <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
