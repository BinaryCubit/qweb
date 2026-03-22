import React from 'react'
const tools = [
    { icon: "📉", title: "Advanced Excel", desc: "Pivot tables, VLOOKUP, Macros, and complex data cleaning techniques.", bg: "bg-green-50 text-green-600" },
    { icon: "🗄️", title: "SQL Mastery", desc: "Database querying, Joins, Subqueries, and handling large datasets.", bg: "bg-blue-50 text-blue-600" },
    { icon: "📊", title: "Power BI", desc: "Building interactive dashboards and automated business reports.", bg: "bg-yellow-50 text-yellow-600" },
    { icon: "🎯", title: "Statistics", desc: "Hypothesis testing, distributions, and data-driven storytelling.", bg: "bg-orange-50 text-orange-600" },
];
export const ToolsSection = () => {
    return (
        <section className="py-24 px-6" id="syllabus">
            <div className="max-w-7xl mx-auto text-center mb-20">
                <h2 className="text-4xl font-extrabold text-[#1B3B5A] mb-4">The Analyst&apos;s <span className="text-[#3B7EBB] italic">Toolbox</span></h2>
                <p className="text-slate-500 max-w-xl mx-auto">We focus on the four pillars of modern data work.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
                {tools.map((t) => (
                    <div key={t.title} className="p-8 bg-white border border-slate-100 rounded-[2.5rem] hover:shadow-xl transition-all text-center">
                        <div className={`w-16 h-16 rounded-full flex items-center justify-center text-3xl mx-auto mb-6 ${t.bg}`}>{t.icon}</div>
                        <h4 className="text-xl font-bold text-[#1B3B5A] mb-3">{t.title}</h4>
                        <p className="text-sm text-slate-500">{t.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}
