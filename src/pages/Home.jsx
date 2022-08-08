import { Navigasi as Nav } from '../component/navigasi/Index'
import { Banner } from '../component/banner'
import { About } from '../component/about/Index'
import { Showcase } from '../component/showcase'
import { Contact } from '../component/contact'
import { Footer } from '../component/footer'

export default function Home () {
  return (
    <main className='bg-light dark:bg-dark1 font-openSans'>
        <Nav />
        <Banner />
        <About />
        <Showcase />
        <Contact />
        <Footer />
    </main>
  )
}
