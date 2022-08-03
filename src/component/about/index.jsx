import { useState, useCallback } from 'react'
import { Certificate } from '../../component2/ModalCertificate'
import { BsArrowRightShort } from 'react-icons/bs'

export const About = () => {

    const [showModal, setModal] = useState(false)
    const showTrigger = useCallback((e)=> {
        setModal(prev => !prev)
    },[])
    return (
        <section className="bg-dark2 dark:bg-dark3">

            <Certificate showModal={showModal} showTrigger={showTrigger} />

            <div className="py-28 w-11/12 md:w-10/12 lg:w-[768px] mx-auto flex flex-col md:flex-row justify-between items-center gap-y-4" aria-label="about-container">
                <div className="w-full md:w-6/12" aria-label="profile">
                    <h1 className="text-white text-2xl md:text-3xl">
                        <span className="text-green">Hello, </span>
                        I am hendri <br />
                        <span className="text-green">Alqori</span>
                    </h1>
                    <div className="text-gray-400 font-light leading-7 mt-5 md:mt-10">
                        A former barista and assistant manager 
                        with 2.5 years of experience, wants 
                        to bring this expertise to the field of web
                        development. Have good management, 
                        problem solving and communication skills. 
                        Have top skill for web development including,
                        React JS, Vue JS, Express JS, Tailwind CSS
                        and Postgresql (DB) , And for web design
                        like Figma.
                    </div>
                    <button onClick={()=> showTrigger()} className="text-green flex text-sm items-center my-6 md:my-3 font-semibold">
                        See my certificate
                        <BsArrowRightShort className='text-2xl' />
                    </button>
                </div>
                <div className="w-full md:w-5/12 flex flex-col gap-y-6" aria-label="skill">
                    <div className="dark:bg-dark2 bg-dark3 rounded-md py-5 px-8" aria-label="design">
                        <h1 className="text-green text-3xl font-extrabold mb-3">Design</h1>
                        <p className="text-gray-400 text-sm">Create modern design with figma</p>
                    </div>
                    <div className="dark:bg-dark2 bg-dark3 rounded-md py-5 px-8" aria-label="design">
                        <h1 className="text-green text-3xl font-extrabold mb-3">Front-End</h1>
                        <p className="text-gray-400 text-sm">Slicing with frontend tech and deploy on cloud</p>
                    </div>
                </div>
            </div>
        </section>
    )
}