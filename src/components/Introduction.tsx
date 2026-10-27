export function Introduction() {
    return <div className="w-full h-screen bg-[url('/img/bg-intro.png')] bg-cover py-22 px-6 md:py-0">
        <div className="w-full min-h-full md:px-16 flex flex-col-reverse md:flex-row md:justify-between gap-4 lg:gap-32 justify-center items-center">
            <div className="flex flex-col gap-3 md:gap-6">
                <div className="flex justify-center md:justify-start gap-2 items-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#00DBE9]"></div>
                    <p className="text-xs font-mono font-semibold text-white">FULLSTACK | FRONTEND DEVELOPER</p>
                </div>
                <p className="text-center md:text-start font-jakarta text-[26px]/8 md:text-[32px]/10 lg:text-[56px]/16 tracking-[-1.14px] font-extrabold text-white">
                    Valen — crafting thoughtful, 
                    high-
                    performance web interfaces.
                </p>
                <p className="text-center md:text-start font-sans text-md text-[#B9CACB]">Specialized in React, Vue, Express, and modern design systems.</p>
                <div className="flex justify-center md:justify-start gap-4 items-center">
                    <a href="#portfolio-section" className="rounded-lg py-2 px-6 bg-[#00F0FF] font-jakarta lg:text-lg font-semibold text-[#006970] cursor-pointer">View Work</a>
                    <a 
                        href="https://wa.me/6282114296694?text=Hi%20Valen,%20I'd%20like%20to%20get%20in%20touch!" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="rounded-lg py-2 px-6 bg-transparent hover:bg-white/10 font-inter text-[#B9CACB] hover:text-white transition-all cursor-pointer"
                    >
                        Get in touch
                    </a>
                </div>
            </div>
            <div className="w-32 md:w-full min-h-32 md:min-h-full rounded-full md:rounded-2xl overflow-hidden">
                <img src="/img/profile.png" className="w-full h-full md:w-[380px] md:h-[380px]" alt="intro-profile" />
            </div>
        </div>
    </div>
}

export default Introduction