import Project from '../contanst/showcaseProject'
import { Link, useParams } from 'react-router-dom'
import { IoMdGlobe, IoIosArrowRoundBack } from 'react-icons/io'
import { FaGithub } from 'react-icons/fa'
import { GoPrimitiveDot } from 'react-icons/go'

export default function Detail () {
  const { id } = useParams()
  const Detail = Project.find(P => P.id === id)
  return (
          <section className='flex justify-center font-openSans text-sm'>
              <div className='w-11/12 lg:w-[768px] my-3' aria-label='detail-container'>
                  <Link to="/">
                      <span className='flex items-center my-3'>
                          <IoIosArrowRoundBack className='text-3xl' /> Back to home
                      </span>
                  </Link>
                  <img src={'/' + Detail?.avatar} alt="avatar-project" />
                  <div className='my-3' aria-label='body-detail'>
                      <h1 className='text-xl font-bold'>{Detail.name}</h1>
                      <div className='flex gap-3 my-2' aria-label='site'>
                          <a className='flex items-center gap-1' href={Detail.siteURL} rel="noreferrer" target="_blank">
                              <IoMdGlobe className='text-2xl' />
                              visit this site
                          </a>
                          <a className='flex items-center gap-1' href={Detail.githubURL} rel="noreferrer" target="_blank">
                              <FaGithub className='text-xl' />
                              see on github
                          </a>
                      </div>
                      <div aria-label='tech-stack'>
                          <h3 className='font-semibold'>Tech stack</h3>
                          {
                              Detail.stack?.map((item, i) => (
                                  <p key={i} className='flex gap-2 items-center'> <GoPrimitiveDot /> {item}</p>
                              ))
                          }
                      </div>
                      <div className='my-3' aria-label='background'>
                          <h1 className='font-semibold'>Purpose or background</h1>
                          <p>
                             {Detail?.purpose ? Detail?.purpose : '-' }
                          </p>
                      </div>
                  </div>
              </div>
          </section>
  )
}
