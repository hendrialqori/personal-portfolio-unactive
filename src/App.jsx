import { Navigasi } from './component/navigasi/index'
import { Banner } from './component/banner/index'
import { About } from './component/about/index'
import { Showcase } from './component/showcase/index'
import { Contact } from './component/contact/index'
import { Footer } from './component/footer/index'

function App() {
  return (
    <main className='bg-light dark:bg-dark1 font-openSans'>
      <Navigasi />
      <Banner />
      <About />
      <Showcase />
      <Contact />
      <Footer />
    </main>
  )
}

export default App
