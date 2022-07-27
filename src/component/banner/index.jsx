import "./main.css"

export const Banner = () => {
    return (
        <section className="h-[460px] md:h-[400px] mt-10" aria-label="banner-wrapper">
            <div className="h-full w-11/12 md:w-10/12  lg:w-[768px] mx-auto" aria-label="banner-container">
                <div className="bg-green w-max text-white font-bold px-2 py-1 rounded-md">
                    <p>Frontend Developer</p>
                </div>
               <div className="h-[368px] w-max flex flex-col md:justify-between " aria-label="banner-text-wrapper">
                <h1 className="text-3xl md:text-4xl font-light mt-10 text-black dark:text-white">
                        Solve the problem, <br />
                        <div className="font-bold">
                            Write the <span className="text-green">Code</span>.
                        </div>
                    </h1>
                    <div className="flex my-2 text-xs md:text-base gap-x-2 md:gap-x-5 text-black dark:text-white" aria-label="information-wrapper">
                        <div className="flex flex-col items-center" aria-label="project-iw">
                            <h2 className="text-xl md:text-3xl font-bold dark:text-green">6</h2>
                            <p className="font-base dark:font-light text-black dark:text-gray-400">Project create</p>
                        </div>
                        <div className="flex flex-col items-center" aria-label="drank-iw">
                            <h2 className="text-xl md:text-3xl font-bold">365</h2>
                            <p className="font-base dark:font-light text-black dark:text-gray-400">Drank of coffee 2022</p>
                        </div>
                    </div>
               </div>
            </div>
        </section>  
    )
}