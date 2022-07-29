import { motion } from "framer-motion"
import { ImCross } from 'react-icons/im'
import  kodio from './assets/kodio.png'
import aming from './assets/aming.png'

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
        <button onClick={()=> showTrigger()} className="p-10">
            <ImCross className="text-xl text-white" />
        </button>
        <div
            className="bg-gray-500 w-[768px] overflow-auto mx-auto my-auto h-[500px] flex gap-x-3 border-[1px]  " 
            aria-label="modal-container">
                <img src={kodio} alt="kodio-image" />
                <img src={aming} alt="kodio-image" />
        </div>
        </motion.div>
    )
}

 