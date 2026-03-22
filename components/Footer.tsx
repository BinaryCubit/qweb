import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#1B3B5A] text-white pt-20 pb-10 px-6 overflow-hidden relative">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#3B7EBB] rounded-lg flex items-center justify-center text-white font-bold text-xl">Q</div>
              <span className="text-2xl font-extrabold tracking-tighter">Qubinaire</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">Empowering the next generation of tech professionals through industry-aligned training and 100% placement support.</p>
            <div className="flex gap-4">
              {["in", "ig", "yt"].map((s) => (
                <a key={s} href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#3B7EBB] transition-all">{s}</a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-[#7FB8E1] font-bold uppercase tracking-widest text-xs mb-8">Training Programs</h4>
            <ul className="space-y-4 text-sm text-slate-300">
              <li><Link href="/data-science-ai" className="hover:text-white transition-colors">Data Science & AI</Link></li>
              <li><Link href="/data-analytics" className="hover:text-white transition-colors">Data Analytics Mastery</Link></li>
              <li><Link href="/full-stack" className="hover:text-white transition-colors">Full Stack Development</Link></li>
              <li><Link href="/ai" className="hover:text-white transition-colors">Artificial Intelligence</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[#7FB8E1] font-bold uppercase tracking-widest text-xs mb-8">B2B Solutions</h4>
            <ul className="space-y-4 text-sm text-slate-300">
              <li><Link href="/placement-drive" className="hover:text-white transition-colors">Campus Placement Drives</Link></li>
              <li><Link href="/faculty-development" className="hover:text-white transition-colors">Faculty Development (FDP)</Link></li>
              <li><Link href="/syllabus-integration" className="hover:text-white transition-colors">Syllabus Integration</Link></li>
              <li><Link href="/campus-collab" className="hover:text-white transition-colors">Corporate Upskilling</Link></li>
              <li><Link href="/hire-from-us" className="hover:text-white transition-colors">Hire From Qubinaire</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[#7FB8E1] font-bold uppercase tracking-widest text-xs mb-8">Reach Us</h4>
            <ul className="space-y-4 text-sm text-slate-300">
              <li className="flex items-start gap-3"><span className="text-[#7FB8E1]">📍</span><span>Qubinaire Training & Placement Center, Pune, Maharashtra, India</span></li>
              <li className="flex items-center gap-3"><span className="text-[#7FB8E1]">📞</span><span>+91 8000886594</span></li>
              <li className="flex items-center gap-3"><span className="text-[#7FB8E1]">✉️</span><span>info@qubinaire.com</span></li>
              <li className="mt-6 pt-6 border-t border-white/10">
                <p className="text-[10px] font-bold text-slate-500 uppercase mb-2">Support Hours</p>
                <p className="text-xs">Mon - Sat: 10:00 AM - 7:00 PM</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-bold text-slate-500 uppercase tracking-widest">
          <p>© 2026 QUBINAIRE SERVICES PVT LTD | ALL RIGHTS RESERVED</p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link>
            <Link href="/privacy-policy" className="hover:text-white">Terms of Service</Link>
            <Link href="/privacy-policy" className="hover:text-white">Placement Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
