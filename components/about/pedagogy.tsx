import React from 'react'

export const Pedagogy = () => {
    return (
        // style="background-image: radial-gradient(circle, #7FB8E1 1px, transparent 1px); background-size: 30px 30px;"
        <section className="py-24 px-6 bg-brand-navy text-white overflow-hidden relative">
            <div className="absolute inset-0 opacity-5"
            >
            </div>
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
                <div>
                    <h2 className="text-4xl font-extrabold mb-8 leading-tight italic">The <span
                        className="text-brand-sky">Pedagogy</span> that Works</h2>
                    <div className="space-y-6">
                        <div className="p-6 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                            <h5 className="font-bold text-brand-sky text-lg mb-2">Mental Models over Syntax</h5>
                            <p className="text-sm text-slate-400">We teach you how to think like an engineer so you can pick up
                                any new technology in days, not months.</p>
                        </div>
                        <div className="p-6 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                            <h5 className="font-bold text-brand-sky text-lg mb-2">Live Code Reviews</h5>
                            <p className="text-sm text-slate-400">Senior developers from top MNCs review your GitHub commits
                                every week to ensure industry-standard clean code.</p>
                        </div>
                    </div>
                </div>
                <div className="bg-white/5 p-10 rounded-[3rem] border border-white/10 backdrop-blur-md">
                    <div className="text-center">
                        <p className="text-6xl font-black text-white mb-2">2020</p>
                        <p className="text-xs font-bold text-brand-sky uppercase tracking-[0.4em] mb-10">Founded in Pune</p>
                    </div>
                    <div className="grid grid-cols-2 gap-8 text-center border-t border-white/10 pt-10">
                        <div>
                            <p className="text-3xl font-black text-white">2000+</p>
                            <p className="text-[10px] font-bold text-slate-500 uppercase">Students Placed</p>
                        </div>
                        <div>
                            <p className="text-3xl font-black text-white">50+</p>
                            <p className="text-[10px] font-bold text-slate-500 uppercase">Expert Mentors</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
