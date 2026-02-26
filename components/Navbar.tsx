import React, { useState, useEffect } from "react";
import Logo from "./Logo";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-4 left-4 right-4 z-50 transition-all duration-500 rounded-2xl ${
        isScrolled
          ? "bg-slate-900/80 backdrop-blur-xl border border-fuchsia-500/30 py-2 shadow-[0_4px_20px_rgba(217,70,239,0.15)]"
          : "bg-transparent py-3"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="flex items-center gap-3 cursor-pointer group">
          <Logo className="w-20 h-20 transition-transform group-hover:scale-105" />
          <div className="flex flex-col">
          </div>
        </a>

        <div className="hidden md:flex flex-1 justify-center items-center gap-12 text-xs font-semibold tracking-widest uppercase">
          {[
            { label: "SOLUÇÕES", id: "solucoes" },
            { label: "PORTFÓLIO", id: "portfolio" },
            { label: "QUEM SOMOS", id: "quem-somos" },
            { label: "CONTATO", id: "contato" }
          ].map((item) => (
            <a
              key={item.label}
              href={`#${item.id}`}
              className="relative py-2 text-slate-300 hover:text-white transition-colors cursor-pointer group"
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-fuchsia-500 transition-all duration-300 group-hover:w-full shadow-[0_0_8px_rgba(217,70,239,0.8)]"></span>
            </a>
          ))}
        </div>

        <button className="md:hidden text-fuchsia-400 cursor-pointer p-2 hover:bg-fuchsia-500/10 rounded-lg transition-colors">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
