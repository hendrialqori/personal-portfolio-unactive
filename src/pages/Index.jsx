import { Navigasi } from '../component/Navigasi'
import { Banner } from '../component/banner'
import { About } from '../component/about'
import { Showcase } from '../component/showcase'
import { Contact } from '../component/contact'
import { Footer } from '../component/footer'


export default function Index() {
    return(
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