import love from './assets/love.svg'
import location from './assets/location.svg'

export const Footer = () => {
  return (
        <footer className="w-11/12 md:w-10/12 lg:w-[768px] mx-auto flex flex-col md:flex-row justify-between items-center py-8 font-light text-xs lg:text-sm text-black dark:text-gray-400">
            <div className='flex items-center'>
                Design and build with
                <img className='mx-1 w-4 md:w-5' src={love} alt="love-icon" />
                by Hendri Alqori@2022.
            </div>
            <div className='flex items-center gap-x-2'>
                <img className='bg-white rounded-full w-4 md:w-5' src={location} alt="location-icon" />
                <p>Mandor, Landak, West Borneo.</p>
            </div>
        </footer>
  )
}
