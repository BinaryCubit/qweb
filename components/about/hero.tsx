import React from 'react'

export const AboutHero = () => {
    return (
        <section className="py-24 bg-brand-soft border-b border-slate-100 px-6">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
                <div>
                    <span className="text-brand-primary font-bold text-xs uppercase tracking-[0.3em] mb-4 block">Our Origin
                        Story</span>
                    <h1 className="text-5xl md:text-6xl font-black text-brand-navy mb-8 leading-tight">
                        Bridging the Gap Between <span className="text-brand-primary italic">Degrees</span> and <span
                            className="text-brand-primary italic">Skills.</span>
                    </h1>
                    <p className="text-lg text-slate-500 mb-6 leading-relaxed">
                        Qubinaire was founded in 2020 with a singular mission: to make technical education practical. We
                        realized that while thousands graduate every year, very few are actually ready for the high-pressure
                        environment of top-tier tech firms.
                    </p>
                    <p className="text-lg text-slate-500 leading-relaxed">
                        We replaced generic lectures with industry-vetted project work and personal mentorship from MNC
                        veterans.
                    </p>
                </div>
                <div className="relative">
                    <div
                        className="p-4 bg-white rounded-[3.5rem] shadow-2xl border border-slate-100 rotate-2 transition-transform hover:rotate-0 duration-500">
                        <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800"
                            className="rounded-[3rem]" alt="Qubinaire Team Collaboration" />
                    </div>
                </div>
            </div>
        </section>
    )
}
