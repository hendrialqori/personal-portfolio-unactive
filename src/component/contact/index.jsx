import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import config from '../../contanst/emailConfig.js'
import gmail from './assets/gmail.svg'
import linked from './assets/linkedin.svg'
import wa from './assets/wa.svg'

export const Contact = () => {
  const formRef = useRef(null)
  const [value, setValue] = useState({
    email: '',
    subject: '',
    text: ''
  })
  const [loading, setLoading] = useState(false)

  const { email, subject, text } = value
  const handleChange = e => {
    setValue(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }
  const handleSubmit = (e) => {
    e.preventDefault()

    setLoading(true)
    emailjs.sendForm(
      config.SERVICE_ID,
      config.TEMPLATE_ID,
      formRef.current,
      config.PUBLIC_KEY
    )
      .then((result) => {
        setLoading(false)
        setValue({
          email: '',
          subject: '',
          text: ''
        })
      }, (error) => {
        setLoading(false)
        console.log(error)
      })
  }
  return (
        <section className="bg-dark2 dark:bg-dark3">
            <div className="w-11/12 md:w-10/12 lg:w-[768px] mx-auto py-28">
                <h1 className="text-green text-5xl font-extrabold text-right">
                    better- <br /> Together
                </h1>
                <div className='flex flex-col-reverse md:flex-row justify-between mt-10'>
                    <form ref={formRef} onSubmit={handleSubmit} className="w-full md:w-6/12 text-white flex flex-col items-center mt-8 md:mt-0" autoComplete='off' >
                        <div className="flex gap-x-3 mb-2">
                        {/* eslint-disable no-trailing-spaces  */}
                            <input 
                            name="email"
                            value={email}
                            onChange={handleChange}
                            className="py-3 px-2 text-sm outline-none rounded-md bg-dark3 dark:bg-dark2 w-[50%]" 
                            type="text" 
                            placeholder="your email" 
                            required 
                            spellCheck="true"
                            />
                            <input 
                            name="subject"
                            value={subject}
                            onChange={handleChange}
                            className="py-3 px-2 text-sm outline-none rounded-md bg-dark3 dark:bg-dark2 w-[50%]" 
                            type="text" 
                            placeholder="subject" 
                            required 
                            spellCheck="true"
                            />
                        </div>
                        <textarea 
                            name="text"
                            value={text}
                            onChange={handleChange}
                            className="rounded-md p-3 outline-none bg-dark3 dark:bg-dark2 mt-1 md:mt-3 w-full md:w-max"
                            cols="39"
                            rows="5"
                            placeholder="text"
                            required
                            />
                        <button 
                        className="bg-green text-sm mt-4 text-white rounded-sm py-1 md:py-2 px-6 md:px-10 font-light md:font-bold mr-auto hover:opacity-80"
                        >
                        { loading ? 'Loading ..' : 'Submit' }
                        </button>
                    </form>
                    <div className='text-gray-400 font-light flex flex-col gap-y-3'>
                        <div className='flex items-center gap-x-3'>
                            <img src={gmail} alt="gmail-icon" />
                            <h2>teamhendri18@gmail.com</h2>
                        </div>
                        <div className='flex items-center gap-x-3'>
                            <img src={wa} alt="gmail-icon" />
                            <h2>+62 896 7754 6550</h2>
                        </div>
                        <div className='flex items-center gap-x-3'>
                            <img src={linked} alt="gmail-icon" />
                            <h2>Hendri Alqori</h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
}
