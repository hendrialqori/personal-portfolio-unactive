import { useState } from 'react'
import { motion } from 'framer-motion'
import './main.css'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
import { Showcard } from '../../component2/showcard'
import Project from '../../contanst/showcaseProject.js'

export const Showcase = () => {
  const [xCord, setCord] = useState(0)

  const toLeft = () => {
    setCord(prev => {
      return xCord <= -580 * (Project.length - 1) ? -580 * (Project.length - 1) : prev - 580
    })
  }
  const toRight = () => {
    setCord(prev => {
      return xCord === 0 ? 0 : prev + 580
    })
  }
  return (
        <section className="w-11/12 md:w-10/12 lg:w-[768px] mx-auto py-28">
            <h1 className="text-5xl font-extrabold text-black dark:text-white">
                Project <br /> Showcase.
            </h1>
            <div className='mt-10 flex items-center gap-x-3' aria-label='showcase-wrapper-component'>
                <button onClick={() => toRight()} className='hidden md:block bg-gray-600 h-max p-2 rounded-full hover:bg-gray-400 '>
                    <AiOutlineLeft className='text-white' />
                </button>
                <div className='bg-gray-800 overflow-hidden rounded-md' aria-label='showcase-wrapper'>
                    {/*  eslint-disable no-trailing-spaces */}
                    <motion.div 
                        drag={ window.innerWidth < 768 ? 'x' : false }
                        dragConstraints={{ left: -3100, right: 0 }}
                        animate={{
                          x: xCord,
                          transition: {
                            duration: 0.5
                          }
                        }}
                        className='flex bord gap-x-2 w-max h-[265px] cursor-grab'
                        aria-label="showcase-container"
                        >
                        {
                            Project.map((item) => (
                                <Showcard key={item.id} {...item} />
                            ))
                        }
                    </motion.div>
                </div>
                <button onClick={() => toLeft()} className='hidden md:block bg-gray-600 h-max p-2 rounded-full hover:bg-gray-400'>
                    <AiOutlineRight className='text-white' />
                </button>
            </div>
        </section>
  )
}
