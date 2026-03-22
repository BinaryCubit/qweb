import Link from "next/link";

export default function GrowthPathway() {
  return (
    <section className="py-24 px-6 bg-[#F8F9FF] relative overflow-hidden" id="b2b">
      <div className="absolute top-0 left-0 w-64 h-64 bg-[#3B7EBB] opacity-5 -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-[3rem]" />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#1B3B5A] mb-4 tracking-tight">
            Choose Your <span className="text-[#3B7EBB]">Growth Pathway</span>
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto">
            Tailored ecosystem solutions for individual career seekers and academic institutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          {/* B2C Card */}
          <div className="group relative bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start mb-8">
                <div className="w-16 h-16 bg-[#F8F9FF] rounded-2xl flex items-center justify-center text-3xl group-hover:bg-[#3B7EBB] group-hover:text-white transition-all">
                  🎓
                </div>
                <span className="bg-green-100 text-green-700 text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">
                  B2C Retail
                </span>
              </div>
              <h3 className="text-3xl font-black text-[#1B3B5A] mb-4">For Students & Pros</h3>
              <p className="text-slate-500 mb-8 leading-relaxed italic border-l-4 border-[#3B7EBB] pl-4">
                "Bridge the gap between your degree and your first high-paying tech paycheck."
              </p>
              <div className="grid grid-cols-2 gap-4 mb-10">
                {["100% Job Guarantee", "Live Industry Projects", "1-on-1 Mentorship", "Portfolio Building"].map((f) => (
                  <li key={f} className="list-none flex items-center gap-2 text-xs font-bold text-[#1B3B5A]">
                    <span className="text-[#3B7EBB]">✔</span> {f}
                  </li>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between px-6 py-4 bg-[#F8F9FF] rounded-2xl">
                <span className="text-[10px] font-bold text-slate-400 uppercase">Success Rate</span>
                <span className="text-lg font-black text-[#1B3B5A]">85% Placed</span>
              </div>
              <Link href="/programs" className="block text-center bg-[#3B7EBB] text-white py-5 rounded-2xl font-black text-sm tracking-widest shadow-xl hover:bg-[#1B3B5A] transition-all active:scale-95">
                EXPLORE PROGRAMS →
              </Link>
            </div>
          </div>

          {/* B2B Card */}
          <div className="group relative bg-[#1B3B5A] p-10 rounded-[2.5rem] shadow-2xl text-white flex flex-col justify-between overflow-hidden">
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-[#7FB8E1] opacity-10 rotate-12 rounded-[3rem]" />
            <div className="relative z-10">
              <div className="flex justify-between items-start mb-8">
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-3xl group-hover:bg-[#7FB8E1] group-hover:text-[#1B3B5A] transition-all">
                  🏢
                </div>
                <span className="bg-[#7FB8E1]/20 text-[#7FB8E1] text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest border border-[#7FB8E1]/30">
                  B2B Institutional
                </span>
              </div>
              <h3 className="text-3xl font-black mb-4">For Colleges & HRs</h3>
              <p className="text-slate-300 mb-8 leading-relaxed italic border-l-4 border-[#7FB8E1] pl-4">
                "Boost your NIRF rankings and placement records with industry-aligned training."
              </p>
              <div className="grid grid-cols-2 gap-4 mb-10">
                {["Campus Hiring Drives", "FDP Programs", "Syllabus Integration", "Center of Excellence"].map((f) => (
                  <li key={f} className="list-none flex items-center gap-2 text-xs font-bold text-slate-100">
                    <span className="text-[#7FB8E1]">✔</span> {f}
                  </li>
                ))}
              </div>
            </div>
            <div className="relative z-10 space-y-4">
              <div className="flex items-center justify-between px-6 py-4 bg-white/5 rounded-2xl border border-white/10">
                <span className="text-[10px] font-bold text-slate-400 uppercase">Network</span>
                <span className="text-lg font-black text-[#7FB8E1]">120+ Partners</span>
              </div>
              <Link href="/campus-collab" className="block text-center bg-[#7FB8E1] text-[#1B3B5A] py-5 rounded-2xl font-black text-sm tracking-widest hover:bg-white transition-all active:scale-95">
                PARTNER WITH US →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
