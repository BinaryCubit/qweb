import React from 'react'
const projects = [
    { icon: "🛒", title: "Microservices E-commerce", desc: "Build a scalable shopping engine with separate services for inventory, payments, and user auth using Spring Boot or Node.js." },
    { icon: "🏢", title: "Real-time SaaS Dashboard", desc: "Develop a collaborative project management tool like Trello with live updates using WebSockets and React." },
];
export const ProjectSection = () => {
    return (
        <section className="py-24 px-6 bg-[#F8F9FF]">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-black text-[#1B3B5A] mb-16 text-center italic">Portfolio Projects <span className="text-[#3B7EBB]">You&apos;ll Master</span></h2>
                <div className="grid md:grid-cols-2 gap-12">
                    {projects.map((p) => (
                        <div key={p.title} className="flex gap-6 items-start">
                            <div className="w-16 h-16 rounded-full bg-[#3B7EBB]/10 flex items-center justify-center text-xl flex-shrink-0">{p.icon}</div>
                            <div>
                                <h5 className="text-lg font-bold text-[#1B3B5A] mb-2">{p.title}</h5>
                                <p className="text-sm text-slate-500 leading-relaxed">{p.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
