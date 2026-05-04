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
    // <section classNameName="py-24 px-6 bg-white" id="programs">
    //   <div classNameName="max-w-7xl mx-auto">
    //     <div classNameName="text-center mb-16">
    //       <h2 className="text-4xl md:text-5xl font-extrabold text-[#1B3B5A] mb-4 tracking-tight">
    //         Job Focused Programs That Lead to <span className="text-[#3B7EBB]">Real Careers</span>
    //       </h2>
    //       <p className="text-slate-500 max-w-2xl mx-auto">
    //         Don&apos;t just learn tools. Master the industry-demanded skill sets that top hiring partners are looking for today.
    //       </p>
    //     </div>

    //     <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
    //       {programs.map((p) => (
    //         <div key={p.title} className="bg-white p-8 rounded-[2rem] border border-slate-100 hover:border-[#3B7EBB] hover:shadow-2xl hover:shadow-[#3B7EBB]/10 transition-all duration-300 group flex flex-col justify-between">
    //           <div>
    //             <div className="text-3xl mb-6 group-hover:scale-110 transition-transform inline-block">{p.icon}</div>
    //             <h4 className="text-xl font-bold text-[#1B3B5A] mb-1">{p.title}</h4>
    //             <p className="text-[10px] font-bold text-[#3B7EBB] uppercase tracking-widest mb-4">{p.duration}</p>
    //             <p className="text-xs text-slate-500 mb-4 font-medium">{p.tech}</p>
    //             <div className="bg-[#F8F9FF] p-3 rounded-xl mb-6">
    //               <p className="text-[10px] text-slate-400 font-bold uppercase mb-1">Target Roles</p>
    //               <p className="text-xs font-bold text-[#1B3B5A]">{p.roles}</p>
    //             </div>
    //             <div className="mb-8">
    //               <p className="text-[10px] text-slate-400 font-bold uppercase mb-1">Average Salary</p>
    //               <p className="text-lg font-black text-[#1B3B5A]">{p.salary}</p>
    //             </div>
    //           </div>
    //           <Link href={p.href} className="w-full text-center py-3 bg-[#1B3B5A] text-white text-sm font-bold rounded-xl group-hover:bg-[#3B7EBB] transition-colors block">
    //             View Roadmap
    //           </Link>
    //         </div>
    //       ))}
    //     </div>

    //     {/* Stats Banner */}
    //     <div className="bg-[#1B3B5A] rounded-3xl p-10 text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl relative overflow-hidden">
    //       <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle, #7FB8E1 1px, transparent 1px)", backgroundSize: "20px 20px" }} />
    //       <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">
    //         {[
    //           { value: "1500+", label: "Students Trained" },
    //           { value: "500+", label: "Jobs Secured" },
    //           { value: "120+", label: "Hiring Partners" },
    //         ].map((stat, i) => (
    //           <React.Fragment key={stat.label}>
    //             <div className="text-center md:text-left">
    //               <p className="text-[#7FB8E1] text-3xl font-black">{stat.value}</p>
    //               <p className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-70">{stat.label}</p>
    //             </div>
    //             {i < 2 && <div className="w-px h-10 bg-white/20 hidden md:block" />}
    //           </React.Fragment>
    //         ))}
    //       </div>
    //       <div className="relative z-10">
    //         <a href="#contact" className="inline-block bg-white text-[#1B3B5A] px-10 py-4 rounded-xl font-bold hover:bg-[#7FB8E1] transition-all shadow-xl">
    //           100% Job Assistance Program →
    //         </a>
    //       </div>
    //     </div>
    //   </div>
    // </section>
    <>
    <section id="programs" className="py-24 px-6 bg-slate-50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-brand-navy mb-4 tracking-tight">
            Our Job-Focused <span className="text-brand-primary italic">Programs</span>
          </h2>
          <p className="text-slate-500">Scroll down to see our elite career tracks.</p>
        </div>

        <div className="space-y-24">

          <div className="sticky top-24 transition-all duration-500">
            <div className="bg-white rounded-[3rem] border border-slate-200 shadow-2xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-12 min-h-[450px]">
              <div className="flex-1">
                <span className="text-brand-primary font-bold text-xs uppercase tracking-widest">01. Artificial Intelligence</span>
                <h3 className="text-3xl md:text-4xl font-black text-brand-navy mt-4 mb-6">Data Science & AI</h3>
                <p className="text-slate-500 mb-8 leading-relaxed">Master Python, Machine Learning, and Generative AI with 100% placement support.</p>
                <a href="data-science-ai.html" className="inline-block bg-brand-navy text-white px-8 py-4 rounded-2xl font-bold hover:bg-brand-primary transition-all">Explore Program →</a>
              </div>
              <div className="flex-1 w-full">
                <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800" className="rounded-[2rem] w-full h-64 object-cover shadow-lg" alt="AI"/>
              </div>
            </div>
          </div>

          <div className="sticky top-28 transition-all duration-500">
            <div className="bg-brand-navy rounded-[3rem] shadow-2xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-12 min-h-[450px] text-white">
              <div className="flex-1">
                <span className="text-brand-sky font-bold text-xs uppercase tracking-widest">02. Web Engineering</span>
                <h3 className="text-3xl md:text-4xl font-black mb-6">Full Stack Development</h3>
                <p className="text-slate-300 mb-8 leading-relaxed">Master the MERN stack and Java ecosystem to build production-scale applications.</p>
                <a href="full-stack.html" className="inline-block bg-brand-primary text-white px-8 py-4 rounded-2xl font-bold hover:bg-white hover:text-brand-navy transition-all">Explore Program →</a>
              </div>
              <div className="flex-1 w-full">
                <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800" className="rounded-[2rem] w-full h-64 object-cover shadow-lg" alt="Fullstack"/>
              </div>
            </div>
          </div>

          <div className="sticky top-32 transition-all duration-500">
            <div className="bg-white rounded-[3rem] border border-slate-200 shadow-2xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-12 min-h-[450px]">
              <div className="flex-1">
                <span className="text-brand-primary font-bold text-xs uppercase tracking-widest">03. Business Intelligence</span>
                <h3 className="text-3xl md:text-4xl font-black text-brand-navy mt-4 mb-6">Data Analytics Mastery</h3>
                <p className="text-slate-500 mb-8 leading-relaxed">Turn raw data into business insights using SQL, Power BI, and Advanced Excel.</p>
                <a href="data-analytics.html" className="inline-block bg-brand-navy text-white px-8 py-4 rounded-2xl font-bold hover:bg-brand-primary transition-all">Explore Program →</a>
              </div>
              <div className="flex-1 w-full">
                <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800" className="rounded-[2rem] w-full h-64 object-cover shadow-lg" alt="Analytics" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <section id="programs" className="py-24 px-6 bg-slate-50">
    <div className="max-w-5xl mx-auto">
        <div className="text-center mb-20">
            <span className="text-brand-primary font-bold text-xs uppercase tracking-[0.3em]">Career Pathways</span>
            <h2 className="text-4xl md:text-5xl font-black text-brand-navy mt-4 mb-6 tracking-tight">
                Master the <span className="text-brand-primary italic">Modern Stack</span>
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto text-sm">Scroll to explore our specialized engineering tracks. Each program is designed for 100% job readiness.</p>
        </div>

        <div className="space-y-24">
            
            <div className="sticky top-24 transition-all duration-500">
                <div className="bg-white rounded-[3rem] border border-slate-200 shadow-2xl p-8 md:p-12 flex flex-col lg:flex-row items-center gap-12 min-h-[500px]">
                    <div className="flex-1">
                        <div className="w-16 h-16 bg-brand-soft rounded-2xl flex items-center justify-center text-3xl mb-8">⚛️</div>
                        <h3 className="text-3xl font-black text-brand-navy mb-4">MERN Stack Specialization</h3>
                        <p className="text-slate-500 mb-8 leading-relaxed italic">"The startup standard. Master MongoDB, Express, React, and Node.js to build lightning-fast web applications."</p>
                        <ul className="space-y-3 mb-10 text-sm font-bold text-brand-navy/70">
                            <li>✔ Real-time Socket.io Projects</li>
                            <li>✔ Redux State Management</li>
                            <li>✔ REST API Architecture</li>
                        </ul>
                        <a href="full-stack.html" className="inline-block bg-brand-primary text-white px-10 py-4 rounded-2xl font-bold shadow-lg shadow-brand-primary/20 hover:scale-105 transition-all">View Roadmap →</a>
                    </div>
                    <div className="flex-1 w-full">
                        <img src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=800" className="rounded-[2.5rem] w-full h-72 object-cover shadow-inner" alt="MERN Stack"/>
                    </div>
                </div>
            </div>

            <div className="sticky top-28 transition-all duration-500">
                <div className="bg-brand-navy rounded-[3rem] shadow-2xl p-8 md:p-12 flex flex-col lg:flex-row items-center gap-12 min-h-[500px] text-white">
                    <div className="flex-1">
                        <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-3xl mb-8">☕</div>
                        <h3 className="text-3xl font-black mb-4">Java Full Stack (Enterprise)</h3>
                        <p className="text-slate-400 mb-8 leading-relaxed italic">"Built for scale. Master Spring Boot, Microservices, and Angular/React for high-end corporate environments."</p>
                        <ul className="space-y-3 mb-10 text-sm font-bold text-brand-sky">
                            <li>✔ Spring Security & JWT</li>
                            <li>✔ Hibernate & JPA</li>
                            <li>✔ Enterprise System Design</li>
                        </ul>
                        <a href="full-stack.html" className="inline-block bg-brand-sky text-brand-navy px-10 py-4 rounded-2xl font-bold hover:bg-white transition-all">View Roadmap →</a>
                    </div>
                    <div className="flex-1 w-full">
                        <img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800" className="rounded-[2.5rem] w-full h-72 object-cover" alt="Java Full Stack"/>
                    </div>
                </div>
            </div>

            <div className="sticky top-32 transition-all duration-500">
                <div className="bg-white rounded-[3rem] border border-slate-200 shadow-2xl p-8 md:p-12 flex flex-col lg:flex-row items-center gap-12 min-h-[500px]">
                    <div className="flex-1">
                        <div className="w-16 h-16 bg-brand-soft rounded-2xl flex items-center justify-center text-3xl mb-8">🐍</div>
                        <h3 className="text-3xl font-black text-brand-navy mb-4">Python Full Stack & AI</h3>
                        <p className="text-slate-500 mb-8 leading-relaxed italic">"The most versatile stack. Combine Django/Flask with AI integration for next-gen web products."</p>
                        <ul className="space-y-3 mb-10 text-sm font-bold text-brand-navy/70">
                            <li>✔ Django Rest Framework</li>
                            <li>✔ AI Model Integration</li>
                            <li>✔ PostgreSQL Optimization</li>
                        </ul>
                        <a href="full-stack.html" className="inline-block bg-brand-navy text-white px-10 py-4 rounded-2xl font-bold hover:bg-brand-primary transition-all">View Roadmap →</a>
                    </div>
                    <div className="flex-1 w-full">
                        <img src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800" className="rounded-[2.5rem] w-full h-72 object-cover shadow-inner" alt="Python Full Stack"/>
                    </div>
                </div>
            </div>

            <div className="sticky top-36 transition-all duration-500">
                <div className="bg-brand-primary rounded-[3rem] shadow-2xl p-8 md:p-12 flex flex-col lg:flex-row items-center gap-12 min-h-[500px] text-white">
                    <div className="flex-1">
                        <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center text-3xl mb-8">☁️</div>
                        <h3 className="text-3xl font-black mb-4">DevOps & Cloud Engineering</h3>
                        <p className="text-slate-100 mb-8 leading-relaxed italic">"The backbone of tech. Master AWS, Docker, and Kubernetes for zero-downtime infrastructure."</p>
                        <ul className="space-y-3 mb-10 text-sm font-bold text-white/80">
                            <li>✔ CI/CD Pipeline Automation</li>
                            <li>✔ Kubernetes Orchestration</li>
                            <li>✔ Terraform (IaC) Mastery</li>
                        </ul>
                        <a href="devops-cloud.html" className="inline-block bg-white text-brand-primary px-10 py-4 rounded-2xl font-bold hover:bg-brand-navy hover:text-white transition-all">View Roadmap →</a>
                    </div>
                    <div className="flex-1 w-full">
                        <img src="https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?auto=format&fit=crop&w=800" className="rounded-[2.5rem] w-full h-72 object-cover" alt="DevOps"/>
                    </div>
                </div>
            </div>

        </div>
    </div>
</section>
    </>
  );
}
