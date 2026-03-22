"use client";

import { Facebook, Instagram, Linkedin } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-[100] transition-all duration-300" id="main-header">
      <div className="bg-[#1B3B5A] border-b border-white/5 text-white text-[10px] md:text-xs py-2.5 px-6">
        <div className="max-w-7xl mx-auto w-full flex justify-between items-center">
          <div className="flex items-center gap-5">
            <a href="tel:+918000886594" className="flex items-center gap-2 hover:text-[#7FB8E1] transition-colors">
              <span className="opacity-70">📞</span> +91 8398948765
            </a>
            <a href="mailto:info@qubinaire.com" className="hidden md:flex items-center gap-2 hover:text-[#7FB8E1] transition-colors border-l border-white/10 pl-5">
              <span className="opacity-70">✉️</span> bd@qubinaire.com
            </a>
            <span className="hidden lg:flex items-center gap-2 border-l border-white/10 pl-5 text-[#7FB8E1] font-bold">
              🎓 2000+ Alumni Placed
            </span>
          </div>
          <div className="flex items-center gap-4 font-bold tracking-widest text-[10px]">
            <span className="hidden sm:inline-block opacity-40 uppercase">Follow:</span>
            <div className="flex gap-3">
              <a href="" className="hover:text-[#7FB8E1]">
                <Instagram />
              </a>
              <a href="" className="hover:text-[#7FB8E1]">
                <Linkedin />
              </a>
              <a href="" className="hover:text-[#7FB8E1]">
                <Facebook />
              </a>
            </div>
          </div>
        </div>
      </div>

      <nav className="bg-white/80 backdrop-blur-xl border-b border-slate-100 py-3 px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-[#1B3B5A] rounded-xl flex items-center justify-center text-white font-bold text-xl group-hover:bg-[#3B7EBB] transition-all duration-300 shadow-lg">Q</div>
            <div className="flex flex-col">
              <span className="text-xl font-black text-[#1B3B5A] tracking-tighter leading-none">Qubinaire</span>
              <span className="text-[8px] font-bold text-[#3B7EBB] tracking-[0.2em] uppercase mt-1">Services Pvt Ltd</span>
            </div>
          </a>

          <div className="hidden lg:flex items-center gap-8 font-bold text-[#1B3B5A] text-[11px] tracking-widest">
            {[
              { href: "/programs", label: "PROGRAMS" },
              { href: "/campus-collab", label: "CAMPUS COLLAB" },
              { href: "/outcomes", label: "OUTCOMES" },
              { href: "/faq", label: "FAQ" },
              { href: "/about-us", label: "About us" },
            ].map((item) => (
              <a key={item.href} href={item.href} className="relative group py-2">
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#3B7EBB] transition-all group-hover:w-full" />
              </a>
            ))}
            <a href="guarantee" className="relative group py-2 text-[#3B7EBB]">
              JOB GUARANTEE
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#3B7EBB]" />
            </a>
          </div>

          <div className="flex items-center gap-4">
            <a href="/contact" className="hidden sm:inline-flex bg-gradient-to-r from-[#1B3B5A] to-[#3B7EBB] text-white px-6 py-3 rounded-xl text-[10px] font-black tracking-widest shadow-xl transition-all transform hover:-translate-y-0.5 active:scale-95">
              BOOK FREE COUNSELLING
            </a>
            <button className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 bg-[#F8F9FF] rounded-lg text-[#1B3B5A]">
              <span className="w-5 h-0.5 bg-current" />
              <span className="w-5 h-0.5 bg-current" />
              <span className="w-3 h-0.5 bg-current self-start ml-2.5" />
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
