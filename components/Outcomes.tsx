import Image from "next/image";

export default function Outcomes() {
  return (
    <section id="outcomes" className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-4">
          <div className="max-w-xl">
            <span className="text-[#3B7EBB] font-bold uppercase tracking-widest text-xs">Return on Investment</span>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-[#1B3B5A] mt-2 leading-tight">
              From Learning to <span className="text-[#3B7EBB]">Earning</span>
            </h2>
          </div>
          <p className="text-slate-500 text-sm max-w-xs border-l-2 border-[#7FB8E1] pl-4">
            Our alumni don&apos;t just find jobs; they transform their entire financial trajectory.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          {/* Salary chart */}
          <div className="lg:col-span-7 bg-[#F8F9FF] rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden group">
            <div
              className="absolute inset-0 opacity-10 pointer-events-none"
              style={{ backgroundImage: "radial-gradient(#1B3B5A 1px, transparent 1px)", backgroundSize: "20px 20px" }}
            />
            <h4 className="text-xl font-bold text-[#1B3B5A] mb-10 relative z-10">Average Salary Leap</h4>
            <div className="relative z-10 space-y-8">
              <div className="relative">
                <div className="flex justify-between items-end mb-2">
                  <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Pre-Training Status</span>
                  <span className="text-red-500 font-bold">₹1.8 LPA Avg.</span>
                </div>
                <div className="w-full bg-slate-200 h-4 rounded-full overflow-hidden">
                  <div className="bg-slate-400 h-full w-[15%] transition-all duration-1000 group-hover:w-[20%]" />
                </div>
                <p className="mt-2 text-[10px] font-bold text-slate-400">Internship / Entry Level / Unemployed</p>
              </div>
              <div className="flex justify-center -my-4">
                <div className="bg-white shadow-md rounded-full p-2 text-[#3B7EBB] animate-bounce">↓</div>
              </div>
              <div className="relative">
                <div className="flex justify-between items-end mb-2">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#1B3B5A]">Post-Qubinaire Career</span>
                  <span className="text-green-600 font-extrabold text-xl">₹6.5 - ₹18 LPA</span>
                </div>
                <div className="w-full bg-[#3B7EBB]/10 h-6 rounded-full overflow-hidden p-1">
                  <div className="bg-gradient-to-r from-[#3B7EBB] to-[#7FB8E1] h-full rounded-full transition-all duration-1000 group-hover:w-full" style={{ width: "85%" }} />
                </div>
                <p className="mt-2 text-[10px] font-bold text-[#3B7EBB]">Data Scientist / Full Stack Lead / AI Engineer</p>
              </div>
            </div>
          </div>

          {/* Testimonial + stats */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="bg-[#1B3B5A] rounded-[2.5rem] p-8 text-white relative overflow-hidden flex-grow flex flex-col justify-center">
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#7FB8E1] opacity-10 rotate-45" />
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full border-2 border-[#7FB8E1] overflow-hidden bg-slate-200">
                    <Image
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150"
                      alt="Rahul Sharma"
                      width={64}
                      height={64}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h5 className="font-bold text-lg">Rahul Sharma</h5>
                    <p className="text-[#7FB8E1] text-xs font-bold uppercase">Placed at Accenture</p>
                  </div>
                </div>
                <p className="text-sm leading-relaxed text-slate-300 italic mb-6">
                  "The 100% Job Guarantee program is real. I transitioned from a non-tech role to a Data Scientist at Accenture with an{" "}
                  <span className="text-white font-bold">8.5 LPA package</span>."
                </p>
                <div className="flex items-center justify-between pt-6 border-t border-white/10">
                  <span className="text-[10px] font-bold text-slate-400">SUCCESS STORY #2041</span>
                  <a href="#" className="text-xs font-bold text-[#7FB8E1] hover:underline">Read Profile →</a>
                </div>
              </div>
            </div>
            <div className="bg-[#F8F9FF] border border-slate-100 rounded-[2rem] p-6 flex items-center justify-around text-center">
              <div>
                <p className="text-2xl font-black text-[#1B3B5A]">350%</p>
                <p className="text-[9px] uppercase font-bold text-slate-400">Avg. Salary Hike</p>
              </div>
              <div className="w-px h-10 bg-slate-200" />
              <div>
                <p className="text-2xl font-black text-[#1B3B5A]">45 Days</p>
                <p className="text-[9px] uppercase font-bold text-slate-400">Avg. Placement Time</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
