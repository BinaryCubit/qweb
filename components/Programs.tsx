import React from "react";
import Link from "next/link";

const programs = [
  { icon: "🤖", title: "Data Science & AI", duration: "3 Months Intensive", tech: "Python • ML • Deep Learning • NLP", roles: "AI Engineer, ML Specialist", salary: "₹6.5 – 18 LPA", href: "/data-science-ai" },
  { icon: "📊", title: "Data Analytics", duration: "1 Month Fast Track", tech: "Excel • SQL • Power BI • Tableau", roles: "Data Analyst, BI Developer", salary: "₹4.5 – 10 LPA", href: "/data-analytics" },
  { icon: "💻", title: "Full Stack Dev", duration: "4 Months Program", tech: "MERN Stack • Java • Devops Basic", roles: "Software Engineer, Web Dev", salary: "₹5.5 – 14 LPA", href: "/full-stack" },
  { icon: "☁️", title: "DevOps & Cloud", duration: "3 Months Program", tech: "AWS • Docker • K8s • Terraform", roles: "Cloud Architect, DevOps Lead", salary: "₹7 – 22 LPA", href: "/ai" },
];

export default function Programs() {
  return (
    <section className="py-24 px-6 bg-white" id="programs">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#1B3B5A] mb-4 tracking-tight">
            Job Focused Programs That Lead to <span className="text-[#3B7EBB]">Real Careers</span>
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto">
            Don&apos;t just learn tools. Master the industry-demanded skill sets that top hiring partners are looking for today.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {programs.map((p) => (
            <div key={p.title} className="bg-white p-8 rounded-[2rem] border border-slate-100 hover:border-[#3B7EBB] hover:shadow-2xl hover:shadow-[#3B7EBB]/10 transition-all duration-300 group flex flex-col justify-between">
              <div>
                <div className="text-3xl mb-6 group-hover:scale-110 transition-transform inline-block">{p.icon}</div>
                <h4 className="text-xl font-bold text-[#1B3B5A] mb-1">{p.title}</h4>
                <p className="text-[10px] font-bold text-[#3B7EBB] uppercase tracking-widest mb-4">{p.duration}</p>
                <p className="text-xs text-slate-500 mb-4 font-medium">{p.tech}</p>
                <div className="bg-[#F8F9FF] p-3 rounded-xl mb-6">
                  <p className="text-[10px] text-slate-400 font-bold uppercase mb-1">Target Roles</p>
                  <p className="text-xs font-bold text-[#1B3B5A]">{p.roles}</p>
                </div>
                <div className="mb-8">
                  <p className="text-[10px] text-slate-400 font-bold uppercase mb-1">Average Salary</p>
                  <p className="text-lg font-black text-[#1B3B5A]">{p.salary}</p>
                </div>
              </div>
              <Link href={p.href} className="w-full text-center py-3 bg-[#1B3B5A] text-white text-sm font-bold rounded-xl group-hover:bg-[#3B7EBB] transition-colors block">
                View Roadmap
              </Link>
            </div>
          ))}
        </div>

        {/* Stats Banner */}
        <div className="bg-[#1B3B5A] rounded-3xl p-10 text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle, #7FB8E1 1px, transparent 1px)", backgroundSize: "20px 20px" }} />
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">
            {[
              { value: "1500+", label: "Students Trained" },
              { value: "500+", label: "Jobs Secured" },
              { value: "120+", label: "Hiring Partners" },
            ].map((stat, i) => (
              <React.Fragment key={stat.label}>
                <div className="text-center md:text-left">
                  <p className="text-[#7FB8E1] text-3xl font-black">{stat.value}</p>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-70">{stat.label}</p>
                </div>
                {i < 2 && <div className="w-px h-10 bg-white/20 hidden md:block" />}
              </React.Fragment>
            ))}
          </div>
          <div className="relative z-10">
            <a href="#contact" className="inline-block bg-white text-[#1B3B5A] px-10 py-4 rounded-xl font-bold hover:bg-[#7FB8E1] transition-all shadow-xl">
              100% Job Assistance Program →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
