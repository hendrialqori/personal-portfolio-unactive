import { useState, useCallback } from 'react'
import { Certificate } from '../../component2/modal'
import { BsArrowRightShort } from 'react-icons/bs'
import { IconComponent } from '../../component2/iconComp'

const iconsList = [
  {
    type: 'fe',
    svg: 'react.svg'
  },
  {
    type: 'fe',
    svg: 'next.svg'
  },
  {
    type: 'fe',
    svg: 'ts.svg'
  },
  {
    type: 'fe',
    svg: 'redux.svg'
  },
  {
    type: 'fe',
    svg: 'tailwind.svg'
  },
  {
    type: 'fe',
    svg: 'vercel.svg'
  },
  {
    type: 'fe',
    svg: 'netlify.svg'
  },
  {
    type: 'be',
    svg: 'pg.svg'
  },
  {
    type: 'be',
    svg: 'ex.svg'
  }
]

export const About = () => {
  const [showModal, setModal] = useState(false)
  const showTrigger = useCallback(() => {
    setModal(prev => !prev)
  }, [])
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
                        A former barista and assistant manager with 2.5 years of experience, wants to bring this expertise to the field of web development. Have good management, problem solving and communication skills. Have top skill for web development such as React, Next, Express, Tailwind CSS and Postgresql (DB) , And for web design like Figma.
                    </div>
                    <button onClick={showTrigger} className="text-green flex text-sm items-center my-6 md:my-3 font-semibold border-[1px] border-green px-2 py-1 rounded-md">
                        See my certificate
                        <BsArrowRightShort className='text-2xl' />
                    </button>
                </div>
                <div className="w-full md:w-5/12 flex flex-col gap-y-6" aria-label="skill">
                    <div className="dark:bg-dark2 bg-dark3 rounded-md py-5 px-8" aria-label="design">
                        <h1 className="text-green/80 text-xl font-extrabold mb-3">Design tools</h1>
                        <div><IconComponent svg={'/icons/design/figma.svg'} /></div>
                    </div>
                    <div className="dark:bg-dark2 bg-dark3 rounded-md py-5 px-8" aria-label="design">
                        <h1 className="text-green/80 text-xl font-extrabold mb-3">Front-End tools</h1>
                        <div className='flex justify-center items-center gap-3'>
                            {iconsList.filter(icon => icon.type === 'fe').map((icon, i) => (
                                <IconComponent key={i} svg={'/icons/fe/' + icon.svg} />
                            ))}
                        </div>
                    </div>
                    <div className="dark:bg-dark2 bg-dark3 rounded-md py-5 px-8" aria-label="design">
                        <h1 className="text-green/80 text-xl font-extrabold mb-3">Back-End tools</h1>
                        <div className='flex items-center gap-3'>
                            {iconsList.filter(icon => icon.type === 'be').map((icon, i) => (
                                <IconComponent key={i} svg={'/icons/be/' + icon.svg} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
}
