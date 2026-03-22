import React from 'react'

export const StandFor = () => {
  return (
    <section className="py-24 px-6">
    <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
            <h2 className="text-4xl font-extrabold text-brand-navy mb-4">What We Stand <span
                    className="text-brand-primary italic">For</span></h2>
            <div className="w-20 h-1.5 bg-brand-sky mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center group">
                <div
                    className="w-20 h-20 bg-brand-soft rounded-3xl flex items-center justify-center text-3xl mx-auto mb-8 group-hover:bg-brand-primary group-hover:text-white transition-all">
                    🏗️</div>
                <h4 className="text-xl font-bold text-brand-navy mb-4">Practical-First</h4>
                <p className="text-sm text-slate-500 leading-relaxed">Theory is good, but code is better. 80% of our
                    training happens inside the IDE, building production-ready apps.</p>
            </div>
            <div className="text-center group">
                <div
                    className="w-20 h-20 bg-brand-soft rounded-3xl flex items-center justify-center text-3xl mx-auto mb-8 group-hover:bg-brand-primary group-hover:text-white transition-all">
                    🤝</div>
                <h4 className="text-xl font-bold text-brand-navy mb-4">Accountability</h4>
                <p className="text-sm text-slate-500 leading-relaxed">Our 100% Job Guarantee isn't just a marketing
                    line; it's a legal commitment to your professional success.</p>
            </div>
            <div className="text-center group">
                <div
                    className="w-20 h-20 bg-brand-soft rounded-3xl flex items-center justify-center text-3xl mx-auto mb-8 group-hover:bg-brand-primary group-hover:text-white transition-all">
                    🚀</div>
                <h4 className="text-xl font-bold text-brand-navy mb-4">Industry Linkage</h4>
                <p className="text-sm text-slate-500 leading-relaxed">We maintain direct partnerships with 120+ colleges
                    and 50+ hiring companies to ensure a seamless talent pipeline.</p>
            </div>
        </div>
    </div>
</section>
  )
}
