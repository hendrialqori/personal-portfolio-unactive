import { motion } from "framer-motion"
import { ImCross } from 'react-icons/im'
import  kodio from './assets/kodio.png'
import html from './assets/html.jpg'
import css from './assets/css.jpg'
import js from './assets/js.png'

export const Certificate = ({ showModal, showTrigger }) => {
    
    return(
        <motion.div 
         initial={{ opacity : 0 }}
         animate={{
            opacity : 1,
            y : showModal ? 0 : -700,
            transition : {
                bounce : 200
            }
         }}
         className="bg-gray-800 inset-0 fixed z-10"
         aria-label="modal-wrapper"
         > 
        <button onClick={()=> showTrigger()} className="p-5 md:p-7 lg:p-10">
            <ImCross className="text-xl text-white" />
        </button>
        <div
            className="bg-gray-500 w-11/12 md:w-10/12 lg:w-[768px] mx-auto h-[550px] mb-2 overflow-auto flex flex-wrap gap-y-3 pb-24 md:pb-0" 
            aria-label="modal-container">
                <img src={kodio} alt="image" />
                <img src={js} alt="image" />
                <img src={css} alt="image" />
                <img src={html} alt="image" />
        </div>
        </motion.div>
    )
}

