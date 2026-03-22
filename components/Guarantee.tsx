const steps = [
  { icon: "🧠", title: "Skill Training", desc: "Master high-demand tech stacks through intensive, expert-led practical modules." },
  { icon: "💻", title: "Live Projects", desc: "Apply skills on real industry projects and build a high-fidelity portfolio." },
  { icon: "📄", title: "Resume Building", desc: "Craft a professional, ATS-optimized resume that highlights your new skill sets." },
  { icon: "🤝", title: "Mock Interviews", desc: "Gain confidence with simulated technical and HR interviews from mentors." },
  { icon: "🚀", title: "Placement Drives", desc: "Get access to exclusive hiring drives from Qubinaire's global partner network.", highlight: true },
];

export default function Guarantee() {
  return (
    <section className="py-24 px-6 bg-[#1B3B5A] text-white overflow-hidden relative" id="guarantee">
      <div
        className="absolute inset-0 w-full h-full opacity-10 blur-3xl"
        style={{ background: "radial-gradient(circle, #7FB8E1 0%, transparent 70%)", zIndex: 1 }}
      />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-24">
          <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tighter mb-4">
            A Proven Pathway to <span className="text-[#7FB8E1]">Success</span>
          </h2>
          <p className="max-w-xl mx-auto text-slate-300">
            Your step-by-step journey from training to placement drives, built on Qubinaire&apos;s career-focused methodology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-0 relative">
          {steps.map((step, i) => (
            <div
              key={step.title}
              className={`group relative pt-10 pb-16 px-6 border-b border-white/5 md:border-b-0 md:border-r border-white/5 last:border-0 hover:bg-white/5 transition-all ${step.highlight ? "bg-[#3B7EBB] rounded-2xl" : ""}`}
            >
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-4xl mb-8 group-hover:scale-110 transition-transform ${step.highlight ? "bg-white/10" : "bg-[#3B7EBB]/10"}`}>
                {step.icon}
              </div>
              <h4 className="text-lg font-bold text-white mb-2 tracking-tight">{step.title}</h4>
              <p className={`text-sm leading-relaxed max-w-xs ${step.highlight ? "text-white/90" : "text-slate-400"}`}>{step.desc}</p>
              <div className={`absolute -top-4 -left-4 font-black text-6xl transition-colors group-hover:text-[#3B7EBB] ${step.highlight ? "text-white/20" : "text-white/5"}`}>
                {i + 1}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
