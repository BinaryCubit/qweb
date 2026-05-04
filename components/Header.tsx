"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Facebook, Instagram, Linkedin, X, Menu } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMenuOpen]);

  return (
    <header className="lg:sticky lg:top-0 lg:z-[100] transition-all duration-300" id="main-header">
      {/* Top Bar */}
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
              <a href="#" className="hover:text-[#7FB8E1]"><Instagram size={14} /></a>
              <a href="#" className="hover:text-[#7FB8E1]"><Linkedin size={14} /></a>
              <a href="#" className="hover:text-[#7FB8E1]"><Facebook size={14} /></a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white/80 lg:backdrop-blur-xl border-b border-slate-100 py-3 px-6 lg:relative">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-[#1B3B5A] rounded-xl flex items-center justify-center text-white font-bold text-xl group-hover:bg-[#3B7EBB] transition-all duration-300 shadow-lg">Q</div>
            <div className="flex flex-col">
              <span className="text-xl font-black text-[#1B3B5A] tracking-tighter leading-none">Qubinaire</span>
              <span className="text-[8px] font-bold text-[#3B7EBB] tracking-[0.2em] uppercase mt-1">Services Pvt Ltd</span>
            </div>
          </a>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8 font-bold text-[#1B3B5A] text-[11px] tracking-widest">
            {[
              { href: "/programs", label: "PROGRAMS" },
              { href: "/campus-collab", label: "CAMPUS COLLAB" },
              { href: "/hire-from-us", label: "HIRE PROFESSIONALS" },
              { href: "/quantum", label: "QUANTUM COMPUTING" },
              { href: "/gallery", label: "OUR GLIMPSE" },
              { href: "/faq", label: "FAQ" },
              { href: "/about-us", label: "ABOUT US" },
            ].map((item) => (
              <a key={item.href} href={item.href} className="relative group py-2">
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#3B7EBB] transition-all group-hover:w-full" />
              </a>
            ))}

          </div>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <a href="/contact" className="hidden sm:inline-flex bg-gradient-to-r from-[#1B3B5A] to-[#3B7EBB] text-white px-6 py-3 rounded-xl text-[10px] font-black tracking-widest shadow-xl transition-all transform hover:-translate-y-0.5 active:scale-95">
              BOOK FREE COUNSELLING
            </a>

            {/* Mobile Toggle Button */}
            <button
              onClick={() => setIsMenuOpen(true)}
              className="lg:hidden w-10 h-10 flex flex-col items-center justify-center bg-[#F8F9FF] rounded-lg text-[#1B3B5A] transition-all active:scale-90"
              aria-label="Open Menu"
            >
              <span className="w-5 h-0.5 bg-current mb-1" />
              <span className="w-5 h-0.5 bg-current mb-1" />
              <span className="w-3 h-0.5 bg-current self-start ml-2.5" />
            </button>
          </div>
        </div>

        {/* MOBILE SIDEBAR - Fixed with Correct Positioning */}
        <div
          className={`lg:hidden fixed inset-0 w-full h-screen bg-white z-[200] transition-transform duration-500 ease-in-out ${isMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
        >
          <div className="flex flex-col h-full p-8 overflow-y-auto">
            {/* Sidebar Header */}
            <div className="flex justify-between items-center mb-12">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-900/10 rounded-xl flex items-center justify-center text-[#1B3B5A] font-bold text-xl">Q</div>
                <span className="text-[#1B3B5A] font-black text-xl tracking-tighter">Qubinaire</span>
              </div>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="text-[#1B3B5A] p-2 hover:bg-white/10 rounded-full transition-colors"
                aria-label="Close Menu"
              >
                <X size={32} />
              </button>
            </div>

            {/* Sidebar Links */}
            <div className="flex flex-col gap-8">
              {[
                { href: "/programs", label: "PROGRAMS" },
                { href: "/campus-collab", label: "CAMPUS COLLAB" },
                { href: "/outcomes", label: "OUTCOMES" },
                { href: "/faq", label: "FAQ" },
                { href: "/about-us", label: "ABOUT US" },

              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-[#1B3B5A] font-bold text-2xl tracking-widest hover:text-[#7FB8E1] transition-colors border-b border-white/10 pb-4"
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* Sidebar Footer */}
            <div className="mt-auto pt-10">
              <a
                href="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="w-full inline-flex justify-center bg-[#7FB8E1] text-[#1B3B5A] py-5 rounded-2xl font-black tracking-widest text-sm shadow-xl mb-10"
              >
                BOOK FREE COUNSELLING
              </a>
              <div className="flex justify-center gap-10 text-white/60">
                <Instagram size={24} />
                <Linkedin size={24} />
                <Facebook size={24} />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}