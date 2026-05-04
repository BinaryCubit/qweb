import Image from "next/image";
import { client } from "@/sanity/client";
import SubNav from "@/components/SubNav";
import Footer from "@/components/Footer";

const QUERY = `*[_type == "gallery" && slug.current == $slug][0]{
  title,
  images[]{
    "url": asset->url,
    alt,
    caption
  }
}`;

export default async function SingleGallery({ params }: { params: { slug: string } }) {
    const { slug } = await params;

    console.log("Slug:", slug);
    const data = await client.fetch(QUERY, { slug });

    return (
        <>
            <SubNav />
            <section className="py-20 px-6">
                <div className="max-w-6xl mx-auto">
                    <h1 className="text-4xl font-black text-[#1B3B5A] mb-10 text-center">
                        {data.title}
                    </h1>

                    <div className="grid md:grid-cols-3 gap-6">
                        {data.images.map((img: any, index: number) => (
                            <div key={index} className="group relative">
                                <img
                                    src={img.url}
                                    alt={img.alt || "Gallery Image"}
                                    width={400}
                                    height={300}
                                    className="rounded-xl object-cover w-full h-60"
                                />

                                {img.caption && (
                                    <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white text-sm p-2 opacity-0 group-hover:opacity-100 transition">
                                        {img.caption}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}