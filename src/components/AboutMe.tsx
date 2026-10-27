export function AboutMe() {
    const journey_data = [
        {
            title: "Frontend Developer",
            company: "PT. Klik Digital Sinergi",
            duration: "November 2026 - Present"
        },
        {
            title: "Fullstack Developer",
            company: "BPJS Ketenagakerjaan ( Outsource )",
            duration: "May 2023 - Oktober 2024"
        },
        {
            title: "Fullstack Developer",
            company: "PT. Samanasoft Inovasi Persada",
            duration: "June 2022 - May 2023"
        },
        {
            title: "Junior Implementation Consultant",
            company: "PT. Indodev Niaga Internet (Dataon)",
            duration: "February 2022 - June 2022"
        },
        {
            title : "Web Developer",
            company : "Pateron.id",
            duration: "August 2021 - February 2022"
        },
        {
            title: "Software Engineer Intern",
            company: "PT. Sinergi Digital Teknologi (Lenna.ai)",
            duration: "February 2021 - April 2021"
        }
    ]
    const Description = () => {
        return (
            <>
                <h1 className="font-extrabold text-white text-3xl font-mono">Hi Everyone!</h1>
                <p className="text-justify text-white text-base font-mono">
                    I'm Valen. I'm a Fullstack Developer and highly skilled in <strong>Frontend Development</strong>. 
                    For the past 4 years, i've been working in IT division to build and maintaining Web application with modern tech stack mostly in
                    <strong> JavaScript/Typescript</strong>.
                    <br/>
                    <br/>
                    Beyond writing code, I enjoy designing clean interfaces, optimizing performance, and building scalable solutions. I’m passionate about turning complex problems into intuitive user experiences.
                </p>
            </>
        )
    }

    const Journey = () => {
        return (
            <>
                <h1 className="font-extrabold text-white text-3xl font-mono">My Journey</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {
                        journey_data.map((item, index) => {
                            return (
                                <div className="flex flex-col gap-2 bg-cyan-950 rounded-lg shadow-md p-4" key={index}>
                                    <h1 className="text-white font-mono text-xl font-jakarta">{item.title}</h1>
                                    <p className="text-white font-mono text-base font-jakarta">{item.company}</p>
                                    <p className="text-white font-mono text-base font-jakarta">{item.duration}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </>
        )
    }
    return (
        <section id="about-me" className="w-full min-h-screen px-4 md:px-20 py-8 flex flex-col gap-6 bg-[#171B26]">
            <Description/>
            <Journey/>
        </section>
    )
}