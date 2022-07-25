import dark from './assets/Darkmode.svg'
import github from './assets/github.svg'

export const Navigasi = () => {


    const mode = () => {}

    return (
        <section className="w-11/12 lg:w-[768px] mx-auto flex justify-between items-center py-12">
            <h1 ><span className="font-bold">Hendri</span> Alqori</h1>
            <div className='flex gap-x-2' aria-label="wrapper-logo">
                <button onClick={()=> mode()}>
                    <img src={dark} alt="dark-mode-logo" />
                </button>
                <a href='https://www.google.com'>
                    <img src={github} alt="github-logo" />
                </a>
            </div>
        </section>
    )
}