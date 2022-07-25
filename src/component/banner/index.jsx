import "./main.css"

export const Banner = () => {
    return (
        <section className="h-[400px] mt-10" aria-label="banner-wrapper">
            <div className="w-11/12 lg:w-[768px]  mx-auto" aria-label="banner-container">
                <div className="bg-green w-max text-white font-bold px-2 py-1 rounded-md">
                    <p>Frontend Developer</p>
                </div>
               <div className="h-[350px] w-max flex flex-col justify-between " aria-label="banner-text-wrapper">
                <h1 className="text-4xl font-light mt-10">
                        Solve the problem, <br />
                        <div className="font-bold">
                            Write the <span className="text-green">Code</span>.
                        </div>
                    </h1>
                    <div className="flex gap-x-5" aria-label="information-wrapper">
                        <div className="flex flex-col items-center" aria-label="project-iw">
                            <h2 className="text-3xl font-bold">5</h2>
                            <p>Project create</p>
                        </div>
                        <div className="flex flex-col items-center" aria-label="drank-iw">
                            <h2 className="text-3xl font-bold">365</h2>
                            <p>Drank of coffee 2022</p>
                        </div>
                    </div>
               </div>
            </div>
        </section>  
    )
}