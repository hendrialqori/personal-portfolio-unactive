import { Navigasi } from './component/navigasi/index'
import { Banner } from './component/banner/index'
import { About } from './component/about/index'

function App() {
  return (
    <main className='bg-light dark:bg-dark1 font-openSans'>
      <Navigasi />
      <Banner />
      <About />
    </main>
  )
}

export default App
