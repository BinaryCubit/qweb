export default function Marquee() {
  const partners = [
    "Data Science",
    "Data Analytics",
    "Full Stack Development",
    "MERN Stack Development",
    "Python Programming",
    "Java Programming",
    "C Programming",
    "C++ Programming",
    "Web Development",
    "Frontend Development",
    "Backend Development",
    "Artificial Intelligence (AI)",
    "Machine Learning",
    "Deep Learning",
    "Natural Language Processing (NLP)",
    "Generative AI",
    "Prompt Engineering",
    "Big Data (Hadoop & PySpark)",
    "Cloud Computing (AWS)",
    "DevOps",
    "Cyber Security",
    "Ethical Hacking",
    "Blockchain Development",
    "Mobile App Development",
    "UI/UX Design",
    "SQL & Database Management",
    "Power BI",
    "Tableau",
    "Advanced Excel (Data Analysis)",
    "Data Structures & Algorithms (DSA)",
    "Competitive Programming",
    "Software Testing",
    "Automation Testing",
    "Digital Marketing",
    "Entrepreneurship & Startup Training",
    "Job Guarantee Programs",
    "Internship Programs"
  ];

  return (
    <div className="py-6  border-y border-slate-100 overflow-hidden">
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
