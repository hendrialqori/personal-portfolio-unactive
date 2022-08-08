import { useEffect, useRef, useState, useCallback } from 'react'
import dark from './assets/Darkmode.svg'
import light from './assets/Lightmode.svg'
import github from './assets/github.svg'
import { AiOutlineArrowUp } from 'react-icons/ai'

export const Navigasi = () => {

    const btnTopRef = useRef(null)
    const [isDark, setDark] = useState(true)
    const mode = () => {
        document.documentElement.classList.toggle('dark')
        setDark(prev => !prev)
    }

    const toTop = () => window.scrollTo({ top: 0, behavior : "smooth" })

    const showButton = useCallback(()=> {
        if(window.scrollY > 150 ) btnTopRef?.current?.classList?.remove("hidden")
        else btnTopRef?.current?.classList?.add("hidden")
    },[])

    useEffect(()=> {
        window.addEventListener("scroll", showButton)     
        document.documentElement.classList.add('dark')
    },[showButton])


    return (
        <header className="w-11/12 md:w-10/12 lg:w-[768px] mx-auto flex justify-between items-center py-7 md:py-12">
            <h1 className=' text-black dark:text-white dark:font-light' ><span className="font-bold">Hendri</span> Alqori</h1>
            <div className='flex gap-x-2' aria-label="wrapper-logo">
                <button className='overflow-hidden h-8' onClick={()=> mode()}>
                    <img style={{ transform:isDark ? "translateY(0px)" : "translateY(-33px)" }} src={light} alt="light-mode-icon" /> 
                    <img style={{ transform:isDark ? "translateY(0px)" : "translateY(-33px)" }} src={dark} alt="light-mode-icon" /> 
                </button>
                <a href='https://github.com/alqory' target="_blank">
                    <img className='bg-white rounded-md' src={github} alt="github-logo" />
                </a>
            </div>
            <button ref={btnTopRef} onClick={()=> toTop()} className='hidden z-10 fixed bottom-20 right-5 md:right-10 p-1 md:p-2 rounded-full opacity-70 bg-gray-500'>
                <AiOutlineArrowUp className='text-white text-xl md:text-2xl' />
            </button>
        </header>
    )
}