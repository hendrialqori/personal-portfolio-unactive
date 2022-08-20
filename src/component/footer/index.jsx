import love from './assets/love.svg'
import { ImLocation } from 'react-icons/im'

export const Footer = () => {
  return (
        <footer className="w-11/12 md:w-10/12 lg:w-[768px] mx-auto flex flex-col md:flex-row justify-between items-center py-4 font-light text-xs lg:text-sm text-black dark:text-gray-300">
            <div className='flex items-center'>
                Design and build with
                <img className='mx-1 w-4 md:w-5' src={love} alt="love-icon" />
                by Hendri Alqori@2022.
            </div>
            <div className='flex items-center gap-x-2'>
                <ImLocation className='text-lg text-black dark:text-white' />
                <p>Mandor, Landak, West Borneo.</p>
            </div>
        </footer>
  )
}
