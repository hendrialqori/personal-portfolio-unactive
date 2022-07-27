import github from './assets/github.svg'
import site from './assets/site.svg'

export const Card = props => {

    const { id, name, avatar, stack, githubURL, siteURL } = props

    return(
        <div key={id} className="relative" aria-label="showcase-card">
            <img className='w-[580px]' src={`/${avatar}`} alt={`${name}-avatar`} />
            <div className='text-white bg-gray-500 absolute w-full p-3 opacity-80 -translate-y-0 transition duration-500' aria-label='infomation-app'>
                <div className='flex gap-x-2' aria-label='wrapper-logo'>
                    <a href={githubURL} target="_blank">
                        <img src={github} alt="gt-icon" />
                    </a>
                    <a href={siteURL} target="_blank">
                        <img src={site} alt="site-icon" />
                    </a>
                </div>
                <h1 className='font-extrabold my-1'>{name}</h1>
                <p>{stack}</p>
            </div>
        </div>
    )
}