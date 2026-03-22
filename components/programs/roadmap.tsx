import React from 'react'
const roadmap = [
    { step: 1, title: "Data Foundation & Statistics", desc: "Python for Data Science, NumPy, Pandas, and Probability for decision making." },
    { step: 2, title: "Machine Learning Mastery", desc: "Supervised and Unsupervised Learning, Regression, Classification, and Clustering algorithms." },
    { step: 3, title: "Deep Learning & Generative AI", desc: "Neural Networks with TensorFlow, NLP, and building Custom GPT models using LangChain." },
];
export const Roadmap = () => {
    return (
        <section className="py-24 px-6 bg-[#F8F9FF]">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-black  text-[#1B3B5A] mb-12 text-center">Course <span className="text-[#3B7EBB]">Roadmap</span></h2>
                <div className="space-y-8">
                    {roadmap.map((r, i) => (
                        <div key={r.step} className="flex gap-6">
                            <div className="flex flex-col items-center">
                                <div className="w-10 h-10 rounded-full bg-[#3B7EBB] text-white flex items-center justify-center font-bold shrink-0">{r.step}</div>
                                {i < roadmap.length - 1 && <div className="w-0.5 flex-1 bg-slate-100 mt-2" />}
                            </div>
                            <div className="pb-10">
                                <h4 className="text-xl font-bold text-[#1B3B5A]">{r.title}</h4>
                                <p className="text-sm text-slate-500 mt-2">{r.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
