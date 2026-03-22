import Link from "next/link";
import SubNav from "@/components/SubNav";
import SubFooter from "@/components/SubFooter";
import type { Metadata } from "next";
import Footer from "@/components/Footer";

export const metadata: Metadata = { title: "Frequently Asked Questions | Qubinaire Support Hub" };

import { type SanityDocument } from "next-sanity";
import { client } from "@/sanity/client";
const POSTS_QUERY = `*[_type == "faqs"] | order(_createdAt desc){
  _id,
  "q":question,
  "a":answer,
  category,
  isFeatured
}`;

const options = { next: { revalidate: 30 } };
export default async function FAQPage() {
  const faqGroups = await client.fetch<SanityDocument[]>(POSTS_QUERY, {}, options);
  return (
    <>
      <SubNav activeLink="faq" ctaHref="/contact" ctaLabel="Contact us" />

      <section className="py-20 bg-[#1B3B5A] text-white text-center px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-black mb-6">Support <span className="text-[#7FB8E1]">Hub</span></h1>
          <p className="text-slate-300 text-lg">Everything you need to know about our training programs, placement process, and institutional partnerships.</p>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          {faqGroups.map((group) => (
            <div key={group._id} className="mb-16">
              <h3 className="text-xs font-black text-[#3B7EBB] uppercase tracking-[0.3em] mb-8 border-l-4 border-[#3B7EBB] pl-4">{group.category}</h3>
              <div className="space-y-4">

                <details key={group.q} className="group border border-slate-100 rounded-2xl bg-white transition-all hover:border-[#3B7EBB]/30">
                  <summary className="p-6 font-bold text-[#1B3B5A] cursor-pointer list-none flex justify-between items-center">
                    {group.q}
                    <span className="text-[#3B7EBB] transition-transform group-open:rotate-180">↓</span>
                  </summary>
                  <div className="px-6 pb-6 text-sm text-slate-500 leading-relaxed">{group.a}</div>
                </details>

              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 px-6 bg-[#F8F9FF] border-t border-slate-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-black text-[#1B3B5A] mb-8">Still have questions?</h2>
          <p className="text-slate-500 mb-10">Our career counselors are available on WhatsApp for immediate assistance.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="https://wa.me/918000886594" className="bg-[#25D366] text-white px-10 py-4 rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg hover:scale-105 transition-all">Chat on WhatsApp</a>
            <a href="mailto:info@qubinaire.com" className="bg-[#1B3B5A] text-white px-10 py-4 rounded-xl font-bold hover:scale-105 transition-all">Email Support</a>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
