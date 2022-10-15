import { Link } from 'react-router-dom'
import { BsArrowRightShort } from 'react-icons/bs'
import { LazyImage } from './lazyimage'
import { memo } from 'react'

export const Show = memo(function _ (props) {
  const { id, name, avatar } = props

  return (
    <div key={id} className="relative" aria-label="showcase-card">
        <LazyImage
            src={`/${avatar}`}
            alt={`${name}-avatar`}
            className='w-[580px]'
            />
        <div className="text-green -translate-y-14 translate-x-2 flex bg-dark2 w-max py-1 px-2 rounded-full">
            <Link className="flex items-center text-xs" to={'/detail/' + id}>
                Detail project
                <BsArrowRightShort className='text-3xl' />
            </Link>
        </div>
    </div>
  )
})
