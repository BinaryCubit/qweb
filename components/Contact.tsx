"use client";

export default function Contact() {
  return (
    <section className="py-24 px-6 bg-[#F8F9FF]" id="contact">
      <div className="max-w-6xl mx-auto bg-white rounded-[3rem] shadow-2xl overflow-hidden flex flex-col md:flex-row border border-slate-100">
        {/* Left panel */}
        <div className="md:w-5/12 p-8 md:p-14 bg-[#1B3B5A] text-white flex flex-col justify-between relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#7FB8E1] opacity-10 -mr-10 -mt-10 rounded-full" />
          <div className="relative z-10">
            <span className="bg-[#3B7EBB]/20 text-[#7FB8E1] px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border border-[#7FB8E1]/20">
              Admission Open 2026
            </span>
            <h3 className="text-4xl font-extrabold mt-6 mb-6 leading-tight">
              Start Your Journey With <span className="text-[#7FB8E1]">Qubinaire</span>
            </h3>
            <p className="text-slate-400 text-sm mb-10 leading-relaxed">
              Book a personalized 1-on-1 career counselling session. Our experts will help you map out your path to a high-paying tech career.
            </p>
            <div className="space-y-6">
              {[
                { icon: "📞", label: "Call for Queries", value: "+91 8000886594" },
                { icon: "✉️", label: "Email Us", value: "info@qubinaire.com" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-[#7FB8E1] border border-white/10">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">{item.label}</p>
                    <p className="font-bold">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-white/10 relative z-10">
            <p className="text-xs italic text-slate-400">
              "The best time to start your tech career was yesterday. The second best time is today."
            </p>
          </div>
        </div>

        {/* Right form */}
        <div className="md:w-7/12 p-8 md:p-14 bg-white">
          <form className="grid grid-cols-1 sm:grid-cols-2 gap-5" onSubmit={(e) => e.preventDefault()}>
            <div className="sm:col-span-2">
              <label className="text-[10px] font-bold uppercase text-slate-400 ml-2 mb-1 block">Full Name</label>
              <input
                type="text"
                placeholder="John Doe"
                required
                className="w-full p-4 bg-slate-50 border border-slate-100 rounded-2xl outline-none focus:border-[#3B7EBB] focus:bg-white transition-all text-sm"
              />
            </div>
            <div>
              <label className="text-[10px] font-bold uppercase text-slate-400 ml-2 mb-1 block">Phone Number</label>
              <input
                type="tel"
                placeholder="+91 00000 00000"
                required
                className="w-full p-4 bg-slate-50 border border-slate-100 rounded-2xl outline-none focus:border-[#3B7EBB] focus:bg-white transition-all text-sm"
              />
            </div>
            <div>
              <label className="text-[10px] font-bold uppercase text-slate-400 ml-2 mb-1 block">Email Address</label>
              <input
                type="email"
                placeholder="john@example.com"
                required
                className="w-full p-4 bg-slate-50 border border-slate-100 rounded-2xl outline-none focus:border-[#3B7EBB] focus:bg-white transition-all text-sm"
              />
            </div>
            <div>
              <label className="text-[10px] font-bold uppercase text-slate-400 ml-2 mb-1 block">I am a...</label>
              <select className="w-full p-4 bg-slate-50 border border-slate-100 rounded-2xl outline-none focus:border-[#3B7EBB] focus:bg-white transition-all text-sm appearance-none">
                <option>Student / Fresher</option>
                <option>Working Professional</option>
                <option>College / Institution (B2B)</option>
                <option>Corporate HR</option>
              </select>
            </div>
            <div>
              <label className="text-[10px] font-bold uppercase text-slate-400 ml-2 mb-1 block">Current Qualification</label>
              <select className="w-full p-4 bg-slate-50 border border-slate-100 rounded-2xl outline-none focus:border-[#3B7EBB] focus:bg-white transition-all text-sm appearance-none">
                <option>B.E / B.Tech</option>
                <option>BCA / MCA</option>
                <option>B.Sc / M.Sc</option>
                <option>Others</option>
              </select>
            </div>
            <div className="sm:col-span-2">
              <label className="text-[10px] font-bold uppercase text-slate-400 ml-2 mb-1 block">Program of Interest</label>
              <select className="w-full p-4 bg-slate-50 border border-slate-100 rounded-2xl outline-none focus:border-[#3B7EBB] focus:bg-white transition-all text-sm appearance-none font-bold text-[#1B3B5A]">
                <option>Data Science & AI (Job Guarantee)</option>
                <option>Data Analytics Mastery</option>
                <option>Full Stack Development</option>
                <option>DevOps & Cloud</option>
                <option>B2B Partnership Inquiry</option>
              </select>
            </div>
            <div className="sm:col-span-2 mt-4">
              <button
                type="submit"
                className="w-full bg-[#3B7EBB] hover:bg-[#1B3B5A] text-white py-5 rounded-2xl font-black text-sm tracking-widest shadow-xl transition-all active:scale-95"
              >
                BOOK FREE COUNSELLING →
              </button>
              <p className="text-center text-[10px] text-slate-400 mt-4 italic">
                By clicking, you agree to our privacy policy and to be contacted by our counselors.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
