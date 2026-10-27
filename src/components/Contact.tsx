import toast from "react-hot-toast";

export function Contact() {
    const copyToClipboard = async (text: string) => {
        try {
            await navigator.clipboard.writeText(text)
            toast.success("Copied to clipboard")
        } catch {
            toast.error("Failed to copy")
        }
    }
    return (
        <div className="bg-white text-neutral-800 shadow-xl border border-gray-100 w-fit h-fit rounded-xl absolute z-50 right-0 top-6">
            <div className="flex flex-col gap-4 min-w-[200px] px-3 py-2">
                <button type="button" onClick={() => copyToClipboard("Valen99830@gmail.com")} className="flex gap-2 items-start cursor-pointer hover:text-cyan-700 transition-colors">
                    <img src="/icons/tools/gmail.svg" alt="gmail-icon" className="w-4 h-4" />
                    <span className="text-sm font-medium">Click to copy</span>
                </button>
                <a href="https://github.com/valensyah" target="_blank" className="flex gap-2 items-start">
                    <img src="/icons/tools/github.svg" alt="github-icon" className="w-4 h-4" />
                    <span className="text-sm font-medium">Visit my github</span>
                </a>
                <a href="https://www.linkedin.com/in/muhammad-valensyah-alfansyuri-595956178/" target="_blank" className="flex gap-2 items-start">
                    <img src="/icons/tools/linkedin.svg" alt="linkedin-icon" className="w-4 h-4" />
                    <span className="text-sm font-medium">Visit my linkedin</span>
                </a>
            </div>
        </div>
    )
}

export default Contact