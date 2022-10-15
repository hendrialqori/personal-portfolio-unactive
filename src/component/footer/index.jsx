import './main.css'

export const Footer = () => {
  return (
        <footer className="container mx-auto flex flex-col md:flex-row gap-5 md:justify-between items-start md:items-center py-16 lg:text-sm bg-dark2 text-black ">
            <section className='text-base font-semibold flex flex-col gap-3 text-white/50'>
                <a href="https://github.com/hendrialqori" target="_blank" rel="noreferrer">Github</a>
                <a href="https://www.linkedin.com/in/hendri-alqori-b87a52171/" target="_blank" rel="noreferrer">Linkedin</a>
            </section>
            <section className='text-base font-semibold flex flex-col gap-3 text-white/50'>
                <a href="https://blog-tricky.vercel.app/" target="_blank" rel="noreferrer">Blog</a>
                <a href="https://www.instagram.com/hendrialqori/" target="_blank" rel="noreferrer">Instagram</a>
                <a href="https://twitter.com/hendrialqori/" target="_blank" rel="noreferrer">Twitter</a>
            </section>
            <section className='flex items-center justify-between gap-3 text-xl'>
                <img src="/H.png" alt="h-icon" width={45} />
                <h1 className='text-white dark:font-light' ><span className="font-bold">Hendri</span> Alqori</h1>
            </section>
        </footer>
  )
}
