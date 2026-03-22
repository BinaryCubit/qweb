import Image from "next/image";
import Link from "next/link";
import SubNav from "@/components/SubNav";
import SubFooter from "@/components/SubFooter";
import Footer from "@/components/Footer";
import type { Metadata } from "next";


export const metadata: Metadata = { title: "Campus Collaboration | Qubinaire Institutional Partnerships" };

const pillars = [
  { icon: "📄", title: "Syllabus Integration", desc: "Industry-aligned modules embedded into your BCA, MCA, and B.Tech curriculum.", href: "/syllabus-integration" },
  { icon: "👨‍🏫", title: "Faculty Development", desc: "FDP programs to upskill your faculty in AI, Data Science, and Full Stack Dev.", href: "/faculty-development" },
  { icon: "🚀", title: "Placement Drives", desc: "On-campus and virtual hiring drives through our 50+ network hiring partners.", href: "/placement-drive" },
  { icon: "🏛️", title: "Innovation Labs", desc: "Setting up Qubinaire Center of Excellence (CoE) directly in your campus.", href: "#partner-form" },
];

export default function CampusCollabPage() {
  return (
    <>
      <SubNav activeLink="campus-collab" ctaHref="#partner-form" ctaLabel="BECOME A PARTNER" ctaStyle="navy" />

      <section className="relative py-24 bg-[#F8F9FF] overflow-hidden border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-[#3B7EBB] font-bold text-xs uppercase tracking-[0.3em]">Industry-Academia Integration</span>
            <h1 className="text-5xl md:text-6xl font-black text-[#1B3B5A] mt-6 mb-8 leading-tight">Elevate Your Institution&apos;s <span className="text-[#3B7EBB]">Placement Record</span></h1>
            <p className="text-lg text-slate-500 mb-10 leading-relaxed">Qubinaire partners with universities to provide industry-vetted curriculum, faculty development, and direct hiring drives to ensure your students are Day-1 productive.</p>
            <Link href="#partner-form" className="inline-block bg-[#3B7EBB] text-white px-8 py-4 rounded-xl font-bold shadow-xl hover:scale-105 transition-all">Request MOU Draft</Link>
          </div>
          <div className="relative">
            <div className="bg-white p-2 rounded-[3rem] shadow-2xl rotate-2">
              <Image src="https://images.unsplash.com/photo-1638262052640-82e94d64664a?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" width={800} height={533} className="rounded-[2.5rem]" alt="Institutional Partnership" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto text-center mb-20">
          <h2 className="text-4xl font-extrabold text-[#1B3B5A] mb-4">Our Collaboration <span className="text-[#3B7EBB] italic">Pillars</span></h2>
          <p className="text-slate-500 max-w-xl mx-auto">A 360-degree support system for modern educational institutions.</p>
        </div>
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((p) => (
            <Link key={p.title} href={p.href} className="p-8 bg-white border border-slate-100 rounded-[2rem] hover:shadow-xl transition-all group block">
              <div className="w-14 h-14 bg-[#F8F9FF] rounded-2xl flex items-center justify-center text-2xl mb-6 group-hover:bg-[#3B7EBB] group-hover:text-white transition-colors">{p.icon}</div>
              <h4 className="text-xl font-bold text-[#1B3B5A] mb-3">{p.title}</h4>
              <p className="text-sm text-slate-500 leading-relaxed">{p.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="py-24 px-6  bg-[#F8F9FF]  relative overflow-hidden" id="partner-form">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle, #7FB8E1 1px, transparent 1px)", backgroundSize: "30px 30px" }} />
        <div className="max-w-4xl mx-auto relative z-10 bg-white p-10 md:p-16 rounded-[3rem] shadow-2xl">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-black text-[#1B3B5A] mb-4">Start Institutional Partnership</h3>
            <p className="text-slate-500">Fill in the details below, and our Academic Director will contact you for a formal proposal.</p>
          </div>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="md:col-span-2">
              <label className="text-[10px] font-bold text-slate-400 uppercase ml-2 mb-2 block tracking-widest">Institution Name</label>
              <input type="text" placeholder="e.g. Pune Institute of Technology" className="w-full p-4 bg-slate-50 border border-slate-100 rounded-xl outline-none focus:border-[#3B7EBB]" />
            </div>
            <div>
              <label className="text-[10px] font-bold text-slate-400 uppercase ml-2 mb-2 block tracking-widest">Contact Person & Designation</label>
              <input type="text" placeholder="e.g. Dr. John Doe (TPO)" className="w-full p-4 bg-slate-50 border border-slate-100 rounded-xl outline-none focus:border-[#3B7EBB]" />
            </div>
            <div>
              <label className="text-[10px] font-bold text-slate-400 uppercase ml-2 mb-2 block tracking-widest">Official Email</label>
              <input type="email" placeholder="tpo@university.edu" className="w-full p-4 bg-slate-50 border border-slate-100 rounded-xl outline-none focus:border-[#3B7EBB]" />
            </div>
            <div className="md:col-span-2">
              <label className="text-[10px] font-bold text-slate-400 uppercase ml-2 mb-2 block tracking-widest">Collaboration Type</label>
              <select className="w-full p-4 bg-slate-50 border border-slate-100 rounded-xl outline-none focus:border-[#3B7EBB]">
                <option>Select Option</option>
                <option>Placement Drive Only</option>
                <option>FDP & Faculty Upskilling</option>
                <option>Full Academic Collaboration (MOU)</option>
                <option>Corporate Training</option>
              </select>
            </div>
            <button type="submit" className="md:col-span-2 py-5 bg-[#3B7EBB] text-white font-black rounded-2xl tracking-widest shadow-xl hover:bg-[#1B3B5A] transition-all active:scale-95">REQUEST PARTNERSHIP PROPOSAL →</button>
          </form>
        </div>
      </section>
      <Footer />

    </>
  );
}
