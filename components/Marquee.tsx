export default function Marquee() {
  const partners = ["TCS", "INFOSYS", "ACCENTURE", "DELOITTE", "CAPGEMINI", "COGNIZANT", "TECH MAHINDRA"];

  return (
    <div className="py-12 border-y border-slate-100 overflow-hidden">
      <p className="text-center text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-8">
        Trusted by 50+ Global Hiring Partners
      </p>
      <div className="animate-marquee gap-16 grayscale opacity-40 font-black text-2xl text-[#1B3B5A]">
        {[...partners, ...partners].map((name, i) => (
          <span key={`${name}-${i}`} className="mr-16">{name}</span>
        ))}
      </div>
    </div>
  );
}
