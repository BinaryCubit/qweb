import React from 'react'

const Enrollment = () => {
    return (
        <>
            {/* ── Enrollment & Payment Section ─────────────────────────── */}
            <section className="py-24 px-6" id="enroll">
                <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
                    <div>
                        <h3 className="text-2xl font-black text-[#1B3B5A] mb-8">What&apos;s Included</h3>
                        <div className="space-y-4">
                            {[
                                { icon: "💻", title: "4-Month Live Training", desc: "Java / MERN / Python — your choice of track" },
                                { icon: "🛒", title: "2 Capstone Projects", desc: "E-commerce microservices + SaaS dashboard" },
                                { icon: "🐳", title: "DevOps Basics", desc: "Docker, CI/CD pipelines, and cloud deploy" },
                                { icon: "📄", title: "Resume & LinkedIn Kit", desc: "Tailored for software engineer roles" },
                                { icon: "🤝", title: "Mock Interviews", desc: "DSA, HLD, LLD, and HR rounds" },
                                { icon: "♾️", title: "Lifetime Access", desc: "Code repos, recordings, and Discord community" },
                            ].map((item) => (
                                <div key={item.title} className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-slate-100 shadow-sm">
                                    <span className="text-2xl">{item.icon}</span>
                                    <div>
                                        <p className="font-bold text-[#1B3B5A] text-sm">{item.title}</p>
                                        <p className="text-xs text-slate-400">{item.desc}</p>
                                    </div>
                                    <span className="ml-auto text-green-500 font-bold">✔</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="bg-white rounded-[2.5rem] shadow-2xl p-8 border border-slate-100 sticky top-28">
                        <div className="flex items-center gap-3 mb-6 pb-6 border-b border-slate-100">
                            <span className="text-3xl">⚛️</span>
                            <div>
                                <h4 className="font-black text-[#1B3B5A] text-lg">Full Stack Development</h4>
                                <p className="text-[10px] font-bold text-[#3B7EBB] uppercase tracking-widest">Job Guarantee Program</p>
                            </div>
                        </div>
                        <div className="space-y-3 mb-6 text-sm">
                            {["4 Months • Hybrid Mode", "Batch starts April 2026", "20 seats available"].map((d) => (
                                <p key={d} className="flex items-center gap-2 text-slate-500"><span className="text-[#3B7EBB]">●</span> {d}</p>
                            ))}
                        </div>
                        {/* <PayButton
                            programId="full-stack"
                            programName="Full Stack Development (Job Guarantee)"
                            amount={30000}
                            originalAmount={50000}
                        /> */}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Enrollment