export const About = () => {
    return (
        <section className="bg-dark2">
            <div className="py-28 w-11/12 lg:w-[768px] mx-auto" aria-label="about-container">
                <div aria-label="profile">
                    <h1 className="text-white text-3xl">
                        <span className="text-green">Hello, </span>
                        I am hendri <br />
                        <span className="text-green">Alqori</span>
                    </h1>
                    <div className="text-gray-400 font-light w-[48%] leading-7 mt-10">
                        A former barista and assistant manager 
                        with -+ 2.5 years of experience, wants 
                        to bring this expertise to the field of web
                        development. Have good management, 
                        problem solving and communication skills. 
                        Have top skill for web development including,
                        React JS, Vue JS, Express JS, Tailwind CSS
                        and Postgresql (DB) , And for web design
                        like Figma.
                    </div>
                </div>
                <div aria-label="skill"></div>
            </div>
        </section>
    )
}