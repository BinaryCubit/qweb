import React from 'react'

export const ProgramHero = () => {
    return (
        <section className="py-24 bg-[#F8F9FF] border-b border-slate-100 px-6">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
                <div>
                    <span className="text-[#3B7EBB] font-bold text-xs uppercase tracking-[0.3em] mb-4 block">Master the Modern Web</span>
                    <h1 className="text-5xl md:text-6xl font-black text-[#1B3B5A] mb-8 leading-tight">Architect <span className="text-[#3B7EBB]">End-to-End</span> Applications.</h1>
                    <p className="text-lg text-slate-500 mb-10 leading-relaxed max-w-xl">Whether it&apos;s Enterprise-scale Java, the agility of the MERN stack, or the power of Python, we train you to build, scale, and deploy complex web ecosystems.</p>
                    <div className="p-4 bg-white rounded-2xl border border-slate-200 shadow-sm flex items-center gap-3 w-fit">
                        <span className="text-2xl">⚡</span>
                        <div>
                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Avg. fresher hike</p>
                            <p className="text-sm font-black text-[#1B3B5A]">120% - 200%</p>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-3 opacity-80">
                    {["React", "Node", "MongoDB", "Java", "Python", "Docker"].map((t) => (
                        <div key={t} className="bg-white border border-slate-100 rounded-2xl p-4 text-center shadow-sm">
                            <p className="text-xs font-black text-[#1B3B5A] uppercase">{t}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
