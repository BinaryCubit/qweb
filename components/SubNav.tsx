import Link from "next/link";

interface SubNavProps {
  activeLink?: "programs" | "campus-collab" | "faq" | "hire-from-us";
  ctaHref?: string;
  ctaLabel?: string;
  ctaStyle?: "primary" | "navy";
}

export default function SubNav({
  activeLink,
  ctaHref = "/programs",
  ctaLabel = "BOOK COUNSELLING",
  ctaStyle = "primary",
}: SubNavProps) {
  const links = [
    { href: "/programs", label: "PROGRAMS", key: "programs" },
    { href: "/campus-collab", label: "CAMPUS COLLAB", key: "campus-collab" },
    { href: "/hire-from-us", label: "RECRUITERS", key: "hire-from-us" },
    { href: "/faq", label: "FAQ", key: "faq" },
    { href: "/about-us", label: "About Us", key: "about" },
  ];

  return (
    <header className="sticky top-0 z-[100] bg-white/90 backdrop-blur-md border-b border-slate-100">
      <nav className="max-w-7xl mx-auto py-4 px-6 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-[#1B3B5A] rounded-lg flex items-center justify-center text-white font-bold">Q</div>
          <span className="text-2xl font-extrabold text-[#1B3B5A] tracking-tighter">Qubinaire</span>
        </Link>
        <div className="hidden lg:flex gap-8 font-bold text-[#1B3B5A] text-[11px] tracking-widest uppercase">
          {links.map((l) => (
            <Link
              key={l.key}
              href={l.href}
              className={l.key === activeLink ? "text-[#3B7EBB]" : "hover:text-[#3B7EBB] transition-colors"}
            >
              {l.label}
            </Link>
          ))}
        </div>
        <Link
          href={ctaHref}
          className={`px-6 py-3 rounded-xl text-[10px] font-black tracking-widest shadow-lg transition-all ${
            ctaStyle === "navy"
              ? "bg-[#1B3B5A] text-white hover:bg-[#3B7EBB]"
              : "bg-[#3B7EBB] text-white hover:bg-[#1B3B5A]"
          }`}
        >
          {ctaLabel}
        </Link>
      </nav>
    </header>
  );
}
