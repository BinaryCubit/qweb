import Link from "next/link";
import Image from "next/image";
import { client } from "@/sanity/client";
import SubNav from "@/components/SubNav";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const QUERY = `*[_type == "gallery"] | order(publishedAt desc){
  _id,
  title,
  "slug": slug.current,
  category,
  "cover": images[0].asset->url
}`;

export default async function GalleryPage() {
    const galleries = await client.fetch(QUERY);

    return (
        <>
            <Header />
            <section className="py-20 px-6 bg-[#F8F9FF]">
                <div className="max-w-6xl mx-auto">
                    <h1 className="text-4xl font-black text-[#1B3B5A] mb-12 text-center">
                        Our Gallery
                    </h1>

                    <div className="grid md:grid-cols-3 gap-8">
                        {galleries.map((item: any) => (
                            <Link
                                key={item._id}
                                href={`/gallery/${item.slug}`}
                                className="group"
                            >
                                <div className="rounded-2xl overflow-hidden shadow-lg bg-white">
                                    <img
                                        src={item.cover}
                                        alt={item.title}
                                        width={400}
                                        height={300}
                                        className="w-full h-60 object-cover group-hover:scale-105 transition"
                                    />

                                    <div className="p-4">
                                        <h2 className="font-bold text-[#1B3B5A]">
                                            {item.title}
                                        </h2>
                                        <p className="text-sm text-slate-500 capitalize">
                                            {item.category}
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}