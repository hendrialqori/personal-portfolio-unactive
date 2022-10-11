import { motion } from 'framer-motion'
import { ImCross } from 'react-icons/im'
import kodio from './assets/kodio.png'
import html from './assets/html.jpg'
import css from './assets/css.jpg'
import js from './assets/js.png'
import pro from './assets/pro.jpeg'
import react from './assets/devcode.jpg'

export const Certificate = ({ showModal, showTrigger }) => {
  return (
        <motion.div initial={{ opacity: 0, y: -900 }}
         exit={{ opacity: 0 }}
         animate={{
           opacity: 1,
           y: showModal ? 0 : -900,
           transition: {
             bounce: 200
           }
         }}
         className="bg-gray-800 inset-0 fixed z-10"
         aria-label="modal-wrapper"
         >
        <button onClick={() => showTrigger()} className="p-5 md:p-7 lg:p-6">
            <ImCross className="text-xl text-white" />
        </button>
        <div
            className="bg-inherit w-11/12 md:w-10/12 lg:w-[768px] mx-auto h-[550px] mb-2 rounded-md overflow-auto flex flex-wrap gap-y-3 pb-24"
            aria-label="modal-container">
                <img src={react} alt="image" />
                <img src={pro} alt="image" />
                <img src={kodio} alt="image" />
                <img src={js} alt="image" />
                <img src={css} alt="image" />
                <img src={html} alt="image" />
        </div>
        </motion.div>
  )
}
