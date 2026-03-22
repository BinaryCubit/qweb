import Link from "next/link";
import SubNav from "@/components/SubNav";
import SubFooter from "@/components/SubFooter";
import type { Metadata } from "next";
import Footer from "@/components/Footer";
import { type SanityDocument } from "next-sanity";
import { client } from "@/sanity/client";
import Image from "next/image";
const POSTS_QUERY = `*[_type == "courses"] | order(_createdAt desc){
  _id,
  title,
  "slug": slug.current,
  description,

  "price": priceStructure.price,
  "salePrice": priceStructure.salePrice,
  "currency": priceStructure.currency,

  duration,

  "thumbnail": thumbnail.asset->url,

  highlights[]{
    ...
  },

  jobGuarantee,
  avgSalary
}`;
const options = { next: { revalidate: 30 } };

export const metadata: Metadata = { title: "Our Programs | Qubinaire Career Tracks" };





export default async function ProgramsPage() {
  const courses = await client.fetch<SanityDocument[]>(POSTS_QUERY, {}, options);

  return (
    <>
      <SubNav activeLink="programs" ctaHref="https://wa.me/8398948765" ctaLabel="BOOK COUNSELLING" />
      <section className="py-20 bg-[#F8F9FF] px-6 border-b border-slate-100">
        <div className="max-w-7xl mx-auto text-center">
          <span className="text-[#3B7EBB] font-bold text-xs uppercase tracking-[0.3em]">Skill Up for {(new Date().getFullYear())}</span>
          <h1 className="text-5xl md:text-6xl font-black text-[#1B3B5A] mt-4 mb-6 leading-tight">Professional <span className="text-[#3B7EBB]">Career Tracks</span></h1>
          <p className="text-lg max-w-2xl mx-auto text-slate-500">Every program at Qubinaire is built around three pillars: Industry-led curriculum, Live Capstone projects, and 100% Placement support.</p>
        </div>
      </section>
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((c) => (
              <div key={c.title} className="bg-white p-10 rounded-[2.5rem] border border-slate-100 flex flex-col justify-between hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
                <div>

                  <img src={c.thumbnail} alt={c.title} className=" bg-[#F8F9FF] rounded-2xl flex items-center justify-center text-3xl mb-8" />

                  <h3 className="text-2xl font-bold text-[#1B3B5A] mb-2">{c.title}</h3>
                  <p className="text-[10px] font-bold text-[#3B7EBB] uppercase tracking-widest mb-6">{c.duration}</p>
                  <ul className="space-y-4 mb-10 text-sm font-medium">
                    {c.highlights.map((f: any, id: any) => (<li key={id} className="flex items-center gap-2"><span className="text-[#3B7EBB]">✔</span> {f.children[0].text}</li>))}
                  </ul>
                </div>
                <div className="pt-6 border-t border-slate-50">
                  <div className="flex justify-between items-center mb-6">
                    <p className="text-[10px] font-bold text-slate-400 uppercase">Avg. Salary</p>
                    <p className="text-lg font-black text-[#1B3B5A]">{c.avgSalary}</p>
                  </div>
                  <Link href={`/programs/${c.slug}`} className="block text-center py-4 bg-[#1B3B5A] text-white font-bold rounded-2xl hover:bg-[#3B7EBB] transition-colors">VIEW FULL DETAILS</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-24 px-6 bg-[#F8F9FF] text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-8">Not sure which track to choose?</h2>
          <p className="text-slate-700 mb-10">Our career counselors are industry experts who can help identify your strengths and map them to the right tech role.</p>
          <Link href="https:wa.me/8398948765" className="inline-block bg-[#3B7EBB] text-white px-12 py-5 rounded-2xl font-black transition-all hover:scale-110 shadow-2xl">BOOK A FREE MENTOR SESSION</Link>
        </div>
      </section>
      <Footer />

    </>
  );
}
