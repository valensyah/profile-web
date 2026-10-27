import { useRef, useEffect, useState } from "react";
import { cn } from "../lib/utils";
export function Portfolio() {
    const toolsContainerRef = useRef<HTMLDivElement>(null);
    const data = [
        {
            id: 1,
            name: "Lost & Found",
            desc: "A web application for reporting lost and found items, helping users discover listings and connect with item owners.",
            url: "https://lostandfound.dicodify.com/",
            img: "/icons/lf-logo-v2.png"
        },
        {
            id: 2,
            name: "Professional Work",
            desc: "A curated collection of selected projects and interface implementations from my professional development experience.",
            url: "/work-portfolio.pdf",
            img: ""
        },
        {
            id: 3,
            name: "Algorithm Visualizer",
            desc: "An interactive demonstration of a HackerRank challenge solution (Breaking lowest/highest score logic)",
            url: "#hackerrank-test",
            img: ""
        },
        {
            id: 4,
            name: "Learning Projects",
            desc: "A selection of applications developed while exploring new technologies and applying concepts from online courses.",
            url: "https://luxspace-bwa-react.netlify.app/",
            img: ""
        },
    ]

    const toolIcons = [
        "/icons/tools/devicon--bootstrap.svg",
        "/icons/tools/devicon--gitlab.svg",
        "/icons/tools/devicon--laravel.svg",
        "/icons/tools/devicon--typescript.svg",
        "/icons/tools/drizzle-orm.svg",
        "/icons/tools/express-js.svg",
        "/icons/tools/github.svg",
        "/icons/tools/icons8-nuxt-js-48.png",
        "/icons/tools/icons8-supabase-48.png",
        "/icons/tools/icons8-tailwind-css-48.png",
        "/icons/tools/icons8-vue-js-48.png",
        "/icons/tools/logos--mysql.svg",
        "/icons/tools/logos--pinia.svg",
        "/icons/tools/logos--postgresql.svg",
        "/icons/tools/logos--zod.svg",
        "/icons/tools/next-js.svg",
        "/icons/tools/react.svg",
        "/icons/tools/shadcn-ui.svg",
        "/icons/tools/thesvg-color--chakra-ui.svg",
        "/icons/tools/thesvg-color--jest.svg",
        "/icons/tools/thesvg-color--nuxt-ui-light.svg",
    ]

    return (
        <section id="portfolio-section" className="w-full min-h-screen bg-[#fcf9f5] flex flex-col gap-8 px-4 md:px-20 pt-28 pb-12 md:pb-28 relative">
            <div className="w-full flex flex-col gap-6 md:gap-12 items-center">
                <h1 className="font-jakarta text-center text-[28px] md:text-[56px]/16 tracking-[-1.14px] font-extrabold text-[#1D1A1B]">
                    Showcasing some of my
                    <br />
                    <div className="text-[#006970]">projects</div>
                </h1>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    {
                        data.map((item) => {
                            const isExternal = !item.url.startsWith("#");
                            return (
                            
                            <a 
                                href={item.url} 
                                target={isExternal ? "_blank" : undefined} 
                                rel="noopener noreferrer" 
                                key={item.id} className={cn(
                                    "cursor-pointer group animate duration-150 ease-out transition-all relative",
                                    "hover:scale-105 hover:shadow-2xl hover:bg-[#38bdf8]",
                                    "w-full h-40 flex flex-col items-center justify-center bg-white rounded-lg shadow-md p-4"
                                )}>
                                <h2 className="text-center text-sm md:text-base font-semibold mb-2 text-neutral-900 group-hover:text-white transition-all">{item.name}</h2>
                                <p className="text-center text-[10px] md:text-xs text-gray-600 group-hover:text-white transition-all">{item.desc}</p>
                                <small className="-bottom-8 w-full text-center absolute hidden group-hover:block group-hover:text-gray-500 transition-all animate-bounce">Click for more</small>
                            </a>
                        )})
                    }
                </div>
            </div>
            <div ref={toolsContainerRef} className="absolute bottom-0 left-0 w-full px-4 py-2 md:px-8 md:py-4 bg-slate-100 flex items-center gap-[200px] overflow-x-scroll scrollbar-none">
                <div className="animate-marquee flex items-center gap-[60px] md:gap-[100px]">
                    {/* Render two sets so it loops seamlessly */}
                    {[...toolIcons, ...toolIcons].map((tool, index) => (
                        <img 
                            src={tool} 
                            alt="tool" 
                            key={index} 
                            className="w-8 h-8 md:w-12 md:h-12 flex-shrink-0" 
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Portfolio