const faqs = [
  {
    q: "Is this program beginner friendly?",
    a: "Absolutely. Our curriculum is designed to take you from absolute zero to industry-ready. We start with fundamental logic and mathematics before moving into coding.",
  },
  {
    q: "What is the 100% Job Guarantee?",
    a: "Our job guarantee means we work with you until you are placed. This includes unlimited access to our 50+ hiring partners, mock interviews, and resume-building sessions.",
  },
  {
    q: "Is the training online or offline?",
    a: "We offer a hybrid model. You can attend physical classes at our center or join via interactive live-streaming. All sessions are recorded for your future reference.",
  },
  {
    q: "Who are the instructors?",
    a: "All Qubinaire mentors are industry veterans from companies like Infosys, Accenture, and Microsoft with 8+ years of practical experience.",
  },
  {
    q: "Will I get a certificate?",
    a: "Yes, upon successful completion of the course and live projects, you will receive a Qubinaire Professional Certification, which is recognized by our 50+ hiring partners.",
  },
];

export default function FAQ() {
  return (
    <section className="py-24 px-6 bg-white" id="faq">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-5 sticky top-28">
            <span className="text-[#3B7EBB] font-bold uppercase tracking-widest text-xs">Support Hub</span>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-[#1B3B5A] mt-4 mb-6 leading-tight">
              Have Questions? <br /> We Have <span className="text-[#3B7EBB]">Answers</span>
            </h2>
            <p className="text-slate-500 mb-8 leading-relaxed">
              Can&apos;t find what you&apos;re looking for? Our career counselors are available 24/7 to help you choose the right path.
            </p>
            <div className="bg-[#F8F9FF] p-6 rounded-3xl border border-slate-100">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#3B7EBB] rounded-full flex items-center justify-center text-white shadow-lg">📞</div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase">Direct Helpline</p>
                  <p className="text-lg font-black text-[#1B3B5A]">+91 8000886594</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.q}
                className="group bg-[#F8F9FF] p-6 rounded-[2rem] border border-transparent hover:border-[#3B7EBB]/20 transition-all"
              >
                <summary className="font-bold text-[#1B3B5A] cursor-pointer list-none flex justify-between items-center text-lg">
                  {faq.q}
                  <span className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#3B7EBB] group-open:rotate-180 transition-transform shadow-sm">
                    ↓
                  </span>
                </summary>
                <div className="mt-4 text-slate-500 text-sm leading-relaxed border-t border-[#3B7EBB]/10 pt-4">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>

        {/* CTA Banner */}
        <div className="mt-24 relative overflow-hidden bg-[#1B3B5A] rounded-[3rem] p-8 md:p-16 text-center text-white shadow-2xl">
          <div className="absolute inset-0 bg-[#3B7EBB]/20 animate-pulse opacity-50" />
          <div className="relative z-10 max-w-2xl mx-auto">
            <div className="inline-block bg-[#7FB8E1]/20 text-[#7FB8E1] px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-6 border border-[#7FB8E1]/30">
              🔥 Next Batch Starting Soon
            </div>
            <h3 className="text-3xl md:text-5xl font-black mb-8 leading-tight">
              Your Tech Career Starts <br /> With One <span className="text-[#7FB8E1]">Decision.</span>
            </h3>
            <p className="text-slate-300 mb-10 text-sm md:text-base leading-relaxed">
              Limited seats are available for our next cohort to ensure personalized mentorship. Apply today and secure your spot.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="#contact" className="w-full sm:w-auto bg-[#3B7EBB] hover:bg-white hover:text-[#1B3B5A] px-12 py-5 rounded-2xl font-black text-sm transition-all shadow-xl">
                RESERVE MY SEAT NOW
              </a>
              <a href="https://wa.me/918000886594" className="w-full sm:w-auto border border-white/20 hover:bg-white/10 px-10 py-5 rounded-2xl font-bold text-sm transition-all">
                TALK TO A COUNSELOR
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
