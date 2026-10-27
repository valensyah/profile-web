import Contact from "../Contact"
import { useState, useRef, useEffect } from "react"

export function Navbar() {
    const [showContact, setShowContact] = useState(false)
    const contactRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent | TouchEvent) => {
            if (contactRef.current && !contactRef.current.contains(event.target as Node)) {
                setShowContact(false)
            }
        }

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setShowContact(false)
            }
        }

        if (showContact) {
            document.addEventListener("mousedown", handleClickOutside)
            document.addEventListener("touchstart", handleClickOutside)
            document.addEventListener("keydown", handleKeyDown)
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
            document.removeEventListener("touchstart", handleClickOutside)
            document.removeEventListener("keydown", handleKeyDown)
        }
    }, [showContact])

    return (
        <div className="z-50 drop-shadow-xs px-8 py-[23px] w-full bg-[#0F131D] fixed top-0 left-0 flex items-center justify-between">
            <a href="/" className="font-mono text-white text-sm">{'<dev/>'}</a>
            <div className="flex gap-6 items-center">
                <a href="#about-me" className="font-sans text-white text-sm">About me</a>
                <a href="#portfolio-section" className="font-sans text-white text-sm">Projects</a>
                <div ref={contactRef} className="relative">
                    <button onClick={() => setShowContact((prev) => !prev)} className="font-sans text-white text-sm cursor-pointer">Contact</button>
                    {showContact && <Contact />}
                </div>
                <img src="/img/profile.png" className="rounded-full w-8 h-8" alt="mini-profile-img" />
            </div>
        </div>
    )
}

export default Navbar