export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-[#0B0E14] border-t border-slate-800/80 text-white font-sans">
      <div className="max-w-7xl mx-auto px-6 md:px-16 py-12 flex flex-col gap-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div className="flex flex-col gap-2.5 max-w-md">
            <div className="flex items-center gap-2">
              <span className="font-mono text-[#00DBE9] font-bold text-lg">{'<dev/>'}</span>
              <span className="font-jakarta font-extrabold text-xl tracking-tight text-white">Valen</span>
            </div>
            <p className="text-sm text-[#B9CACB] leading-relaxed">
              Fullstack &amp; Frontend Developer crafting thoughtful, high-performance web interfaces and modern user experiences.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-sm text-[#B9CACB]">
            <a 
              href="#portfolio-section" 
              className="hover:text-[#00F0FF] transition-colors duration-150"
            >
              Projects
            </a>
            <a 
              href="#hackerrank-test" 
              className="hover:text-[#00F0FF] transition-colors duration-150"
            >
              Algorithm
            </a>
            <a 
              href="/work-portfolio.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-[#00F0FF] transition-colors duration-150"
            >
              Resume
            </a>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-xs font-mono px-3 py-1.5 rounded-md bg-slate-800/80 hover:bg-slate-700 text-[#00F0FF] border border-cyan-500/20 transition-all cursor-pointer"
              title="Scroll to top"
            >
              Back to top ↑
            </button>
          </div>
        </div>

        <div className="pt-6 border-t border-slate-800/60 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-500 font-mono">
          <p>© {currentYear} Valen. All rights reserved.</p>
          <p className="flex items-center gap-1.5 font-sans">
            Designed &amp; built with <span className="text-[#00DBE9] font-mono">React</span> &amp; <span className="text-[#00DBE9] font-mono">Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
