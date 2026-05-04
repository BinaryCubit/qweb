"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";

// 1. DATA ARRAY (15 Unique Success Stories)
const stories = [
  { id: 1, name: "Rahul S.", role: "Data Scientist", hike: "350%", img: "https://i.pravatar.cc/150?u=1", message: "The 100% Job Guarantee program is real. I transitioned from a non-tech role to a Data Scientist effortlessly." },
  { id: 2, name: "Priya K.", role: "Full Stack Dev", hike: "210%", img: "https://i.pravatar.cc/150?u=2", message: "The MERN stack curriculum is incredibly deep. I built 5+ live projects before my very first interview." },
  { id: 3, name: "Arjun M.", role: "DevOps Engineer", hike: "400%", img: "https://i.pravatar.cc/150?u=3", message: "Mastering AWS and Kubernetes here was a game changer for my career trajectory and salary." },
  { id: 4, name: "Sneha P.", role: "BI Analyst", hike: "180%", img: "https://i.pravatar.cc/150?u=4", message: "From basic Excel to Advanced Power BI dashboards, the journey was professionally life-changing." },
  { id: 5, name: "Vikram R.", role: "ML Engineer", hike: "320%", img: "https://i.pravatar.cc/150?u=5", message: "Mentors from top MNCs provided insights that you just can't find in standard YouTube tutorials." },
  { id: 6, name: "Ananya V.", role: "Cloud Architect", hike: "290%", img: "https://i.pravatar.cc/150?u=6", message: "The cloud modules are industry-vetted. I was handling AWS production environments within weeks." },
  { id: 7, name: "Rohan J.", role: "Backend Lead", hike: "250%", img: "https://i.pravatar.cc/150?u=7", message: "I finally understood Microservices. The Java track is rigorous but worth every single hour of effort." },
  { id: 8, name: "Kirti S.", role: "Data Engineer", hike: "230%", img: "https://i.pravatar.cc/150?u=8", message: "Transitioning from QA to Data Engineering was made possible by the hands-on ETL projects." },
  { id: 9, name: "Siddharth B.", role: "AI Specialist", hike: "380%", img: "https://i.pravatar.cc/150?u=9", message: "Learning Generative AI and LLMs here put me ahead of the curve in the current job market." },
  { id: 10, name: "Megha D.", role: "React Developer", hike: "200%", img: "https://i.pravatar.cc/150?u=10", message: "The portfolio I built at Qubinaire got me shortlisted by 3 Top MNCs in a single week." },
  { id: 11, name: "Aditya N.", role: "Security Analyst", hike: "270%", img: "https://i.pravatar.cc/150?u=11", message: "The focus on practical security protocols and VAPT was exactly what I needed to switch roles." },
  { id: 12, name: "Tanvi L.", role: "Product Engineer", hike: "190%", img: "https://i.pravatar.cc/150?u=12", message: "Understanding the full product lifecycle made me a better engineer and a better problem solver." },
  { id: 13, name: "Aman C.", role: "Spring Developer", hike: "240%", img: "https://i.pravatar.cc/150?u=13", message: "Enterprise-grade Java training is hard to find. Qubinaire's curriculum is pure gold." },
  { id: 14, name: "Isha G.", role: "Systems Admin", hike: "220%", img: "https://i.pravatar.cc/150?u=14", message: "I went from managing legacy servers to orchestrating Kubernetes clusters with confidence." },
  { id: 15, name: "Sameer K.", role: "Python Expert", hike: "310%", img: "https://i.pravatar.cc/150?u=15", message: "Python for automation and web development was taught with extreme clarity and depth." },
];

export default function SuccessMarquee() {
  const marqueeRef = useRef(null);

  useEffect(() => {
    let scrollTimeout:any;
    const track = marqueeRef.current;

    const handleScroll = () => {
      if (track) {
        // Pause animation when scrolling
        track.style.animationPlayState = "paused";
        clearTimeout(scrollTimeout);
        // Resume after 5 seconds of no scrolling
        scrollTimeout = setTimeout(() => {
          track.style.animationPlayState = "running";
        }, 5000);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  // Split into two sets for direction variety
  const rowOne = [...stories, ...stories].slice(0, 15);
  const rowTwo = [...stories, ...stories].slice(7, 22);

  return (
    <section className="py-24 bg-[#F8F9FF] overflow-hidden border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
        <h2 className="text-4xl font-black text-[#1B3B5A]">Proven <span className="text-[#3B7EBB] italic">Success</span></h2>
      </div>

      <div className="flex flex-col gap-10" ref={marqueeRef}>
        {/* Row 1: Leftward */}
        <div className="flex animate-marquee-left whitespace-nowrap gap-8">
          {rowOne.map((story, i) => (
            <SuccessCard key={`r1-${i}`} story={story} />
          ))}
        </div>

        {/* Row 2: Rightward */}
        <div className="flex animate-marquee-right whitespace-nowrap gap-8">
          {rowTwo.map((story, i) => (
            <SuccessCard key={`r2-${i}`} story={story} />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marqueeLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marqueeRight {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee-left {
          animation: marqueeLeft 60s linear infinite;
        }
        .animate-marquee-right {
          animation: marqueeRight 60s linear infinite;
        }
        /* Pause on hover as well for desktop users */
        .flex:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}

function SuccessCard({ story }) {
  return (
    <div className="w-[450px] flex-shrink-0 flex flex-col gap-4">
      {/* PRIMARY CARD DESIGN */}
      <div className="bg-[#1B3B5A] rounded-[2.5rem] p-8 text-white relative overflow-hidden flex flex-col justify-center min-h-[280px] shadow-lg">
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#7FB8E1] opacity-10 rotate-45" />
        <div className="relative z-10">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 rounded-full border-2 border-[#7FB8E1] overflow-hidden bg-slate-200">
              <img src={story.img} alt={story.name} width={64} height={64} className="w-full h-full object-cover" />
            </div>
            <div>
              <h5 className="font-bold text-lg">{story.name}</h5>
              <p className="text-[#7FB8E1] text-xs font-bold uppercase tracking-widest">{story.role}</p>
            </div>
          </div>
          <p className="text-sm leading-relaxed text-slate-300 italic mb-6 break-words whitespace-normal">
            "{story.message}"
          </p>
          <div className="flex items-center justify-between pt-6 border-t border-white/10">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest uppercase">Outcome Verified</span>
            <span className="text-xs font-bold text-[#7FB8E1]">Read Profile →</span>
          </div>
        </div>
      </div>

      {/* STATS FOOTER CARD */}
      <div className="bg-white border border-slate-100 rounded-[2rem] p-6 flex items-center justify-around text-center shadow-sm">
        <div>
          <p className="text-2xl font-black text-[#1B3B5A] tracking-tighter">{story.hike}</p>
          <p className="text-[9px] uppercase font-bold text-slate-400 tracking-widest">Avg. Salary Hike</p>
        </div>
        <div className="w-px h-10 bg-slate-200" />
        <div>
          <p className="text-2xl font-black text-[#1B3B5A]">45 Days</p>
          <p className="text-[9px] uppercase font-bold text-slate-400 tracking-widest">Placement Time</p>
        </div>
      </div>
    </div>
  );
}