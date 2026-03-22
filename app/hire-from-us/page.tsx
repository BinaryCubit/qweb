import Image from "next/image";
import SubNav from "@/components/SubNav";
import SubFooter from "@/components/SubFooter";
import type { Metadata } from "next";
import Footer from "@/components/Footer";

export const metadata: Metadata = { title: "Hire Pre-Vetted Talent | Qubinaire for Recruiters" };

const specializations = [
  { icon: "⚙️", title: "Software Engineers", desc: "MERN Stack, Java Full Stack, and Python Backend experts with strong system design fundamentals.", tags: ["REACT", "NODE.JS"] },
  { icon: "🧪", title: "Data Specialists", desc: "Data Scientists and BI Analysts trained in predictive modeling, SQL, and Power BI visualization.", tags: ["PYTHON", "TABLEAU"] },
  { icon: "☁️", title: "DevOps & Cloud", desc: "Infrastructure specialists skilled in AWS, Docker, Kubernetes, and CI/CD pipeline automation.", tags: ["TERRAFORM", "AWS"] },
];

const steps = [
  { num: "01", title: "Share JD", desc: "Tell us your requirements and technical stack needs." },
  { num: "02", title: "Shortlist", desc: "Get pre-interviewed candidate profiles within 24 hours." },
  { num: "03", title: "Interview & Hire", desc: "Conduct your rounds and issue offers directly." },
];

export default function HireFromUsPage() {
  return (
    <>
      <SubNav activeLink="hire-from-us" ctaHref="#hiring-form" ctaLabel="HIRE NOW" ctaStyle="navy" />

      <section className="py-24 bg-[#F8F9FF] border-b border-slate-100 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-[#3B7EBB] font-bold text-xs uppercase tracking-[0.3em] mb-4 block">Talent Solutions</span>
            <h1 className="text-5xl md:text-6xl font-black text-[#1B3B5A] mb-8 leading-tight">Hire <span className="text-[#3B7EBB]">Job-Ready</span> Engineers, Instantly.</h1>
            <p className="text-lg text-slate-500 mb-10 leading-relaxed max-w-xl">Stop sifting through thousands of resumes. Access our pool of pre-vetted, project-trained developers and analysts who are ready to contribute from Day 1.</p>
            <div className="flex flex-wrap gap-4">
              {[{ dot: "text-green-500", label: "500+ Active Candidates" }, { dot: "text-[#7FB8E1]", label: "Zero Hiring Fees" }].map((b) => (
                <div key={b.label} className="flex items-center gap-2 py-2 px-4 bg-white rounded-full border border-slate-200 shadow-sm">
                  <span className={`font-bold ${b.dot}`}>●</span>
                  <span className="text-xs font-bold text-[#1B3B5A] uppercase">{b.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="p-8 bg-white border border-slate-100 rounded-[3rem] shadow-2xl">
              <Image src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800" width={800} height={533} className="rounded-[2rem]" alt="Hiring Discussion" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto text-center mb-20">
          <h2 className="text-4xl font-extrabold text-[#1B3B5A] mb-4">Talent <span className="text-[#3B7EBB] italic">Specializations</span></h2>
          <p className="text-slate-500 max-w-xl mx-auto">Find the perfect match for your team across high-growth domains.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {specializations.map((s) => (
            <div key={s.title} className="p-10 bg-white border border-slate-100 rounded-[2.5rem] hover:border-[#3B7EBB] transition-all shadow-sm">
              <div className="text-3xl mb-6">{s.icon}</div>
              <h4 className="text-xl font-bold text-[#1B3B5A] mb-4">{s.title}</h4>
              <p className="text-sm text-slate-500 mb-6">{s.desc}</p>
              <div className="flex flex-wrap gap-2">
                {s.tags.map((t) => <span key={t} className="bg-slate-50 px-3 py-1 rounded-full text-[10px] font-bold text-slate-400">{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 px-6 bg-[#1B3B5A] text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle, #7FB8E1 1px, transparent 1px)", backgroundSize: "30px 30px" }} />
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <h2 className="text-4xl font-extrabold mb-16">Our 3-Step <span className="text-[#7FB8E1]">Hiring Process</span></h2>
          <div className="grid md:grid-cols-3 gap-12">
            {steps.map((s) => (
              <div key={s.num}>
                <p className="text-6xl font-black text-[#7FB8E1]/20 mb-6">{s.num}</p>
                <h5 className="text-xl font-bold mb-3">{s.title}</h5>
                <p className="text-sm text-slate-400 max-w-xs mx-auto">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6" id="hiring-form">
        <div className="max-w-4xl mx-auto bg-white border border-slate-100 rounded-[3rem] p-10 md:p-16 shadow-2xl">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-black text-[#1B3B5A] mb-4">Request Talent Pool Access</h3>
            <p className="text-slate-500">Share your hiring requirements and our corporate relations team will get back to you.</p>
          </div>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input type="text" placeholder="Company Name" className="w-full p-4 bg-slate-50 border border-slate-100 rounded-xl outline-none focus:border-[#3B7EBB]" />
            <input type="email" placeholder="Work Email Address" className="w-full p-4 bg-slate-50 border border-slate-100 rounded-xl outline-none focus:border-[#3B7EBB]" />
            <input type="text" placeholder="Number of Vacancies" className="w-full p-4 bg-slate-50 border border-slate-100 rounded-xl outline-none focus:border-[#3B7EBB]" />
            <select className="w-full p-4 bg-slate-50 border border-slate-100 rounded-xl outline-none focus:border-[#3B7EBB]">
              <option>Target Role</option>
              <option>Full Stack Developer</option>
              <option>Data Scientist</option>
              <option>DevOps Engineer</option>
              <option>Data Analyst</option>
            </select>
            <div className="md:col-span-2">
              <button type="submit" className="w-full py-5 bg-[#3B7EBB] text-white font-black rounded-2xl tracking-widest hover:bg-[#1B3B5A] transition-all shadow-xl">GET TALENT LIST →</button>
            </div>
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
}
