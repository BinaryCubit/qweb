import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative pt-16 pb-24 px-6 overflow-hidden">
      <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-[#F8F9FF] blob-bg opacity-40" />
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h1 className="text-5xl lg:text-7xl font-extrabold text-[#1B3B5A] leading-tight mb-6">
            Transform Your Career With{" "}
            <span className="text-[#3B7EBB]">Industry Ready</span> Tech Skills
          </h1>
          <p className="text-lg text-slate-500 mb-10 max-w-lg leading-relaxed">
            Learn Data Science, AI, and Full Stack Development with real projects and dedicated placement support.
          </p>
          <div className="flex flex-wrap gap-4 mb-10">
            <a
              href="/programs"
              className="bg-[#1B3B5A] text-white px-10 py-5 rounded-xl font-bold shadow-xl transition-all hover:scale-105"
            >
              VIEW PROGRAMS
            </a>
            <a href="#outcomes" className="flex items-center gap-3 font-bold text-[#1B3B5A]">
              <span className="w-12 h-12 rounded-full border-2 border-[#3B7EBB] flex items-center justify-center text-[#3B7EBB] italic">
                ▶
              </span>
              Success Stories
            </a>
          </div>
          <div className="flex gap-8 border-t pt-8 border-slate-100">
            <div>
              <p className="text-2xl font-black text-[#1B3B5A]">85%</p>
              <p className="text-[10px] uppercase font-bold text-slate-400">Placement Rate</p>
            </div>
            <div>
              <p className="text-2xl font-black text-[#1B3B5A]">50+</p>
              <p className="text-[10px] uppercase font-bold text-slate-400">Hiring Partners</p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -top-6 -right-6 bg-[#7FB8E1] text-[#1B3B5A] p-6 rounded-2xl z-20 shadow-xl font-bold">
            <p className="text-3xl font-black">2000+</p>
            <p className="text-[10px] uppercase tracking-tighter">Alumni Worldwide</p>
          </div>
          <Image
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800"
            alt="Qubinaire Training"
            width={800}
            height={533}
            className="rounded-[3rem] shadow-2xl border-[12px] border-white"
          />
        </div>
      </div>
    </section>
  );
}
