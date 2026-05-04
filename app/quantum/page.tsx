"use client";

import React from 'react';
import Image from 'next/image';
import { Globe, Cpu, Shield, Zap, TrendingUp, Award, CheckCircle2 } from "lucide-react";
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const b2bFeatures = [
    {
        title: "Phase 1: Curriculum & Faculty Alignment",
        desc: "We integrate a full 8-semester Quantum Information Science (QIS) track into your university framework. This includes training your existing faculty to become certified Quantum instructors.",
        tags: ["Mathematical Foundations", "Dirac Notation", "Faculty Reskilling"],
        theme: "bg-white text-[#1B3B5A]",
        top: "top-24"
    },
    {
        title: "Phase 2: Cloud-Native Quantum Lab",
        desc: "Zero CapEx infrastructure. Students get direct cloud-bridge access to real quantum hardware (IBM Q, Rigetti) and our proprietary high-performance simulation suite.",
        tags: ["Hybrid Computing", "Hardware Simulation", "Cloud Integration"],
        theme: "bg-[#1B3B5A] text-white",
        top: "top-28"
    },
    {
        title: "Phase 3: Algorithmic Research & IP",
        desc: "Deployment of advanced circuit design tools. Students and faculty collaborate on Shor's and Grover's algorithm implementations for real-world cryptographic defense.",
        tags: ["Circuit Design", "Qiskit/Cirq Mastery", "Joint IP Development"],
        theme: "bg-[#3B7EBB] text-white",
        top: "top-32"
    },
    {
        title: "Phase 4: Industrial Residency & Placement",
        desc: "The final phase offloads the placement burden from the college. Every student is backed by Qubinaire's 100% Job Guarantee with top-tier MNC partners.",
        tags: ["Quantum ML", "Placement Guarantee", "Corporate Residency"],
        theme: "bg-[#F8F9FF] border border-slate-200 text-[#1B3B5A]",
        top: "top-36"
    }
];

export default function InstitutionalQuantumPage() {
    return (
        <main className="bg-white">
            <Header />
            {/* 1. HERO SECTION */}
            <section className="relative pt-20 pb-32 px-6 overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-[#F8F9FF] -skew-x-12 translate-x-24 z-0" />
                <div className="max-w-7xl mx-auto relative z-10 grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <span className="inline-flex items-center gap-2 bg-[#3B7EBB]/10 text-[#3B7EBB] px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.3em] mb-6">
                            <Award size={14} /> Institutional Partnership Program
                        </span>
                        <h1 className="text-5xl lg:text-7xl font-black text-[#1B3B5A] leading-[1.1] tracking-tighter mb-8">
                            Launch a <span className="text-[#3B7EBB] italic">Quantum</span> Legacy at Your Campus
                        </h1>
                        <p className="text-lg text-slate-500 mb-10 max-w-lg leading-relaxed">
                            Partner with Qubinaire to implement a specialized B.Tech in Quantum Computing. We provide the curriculum, the hardware access, and the placement guarantee.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <button className="bg-[#1B3B5A] text-white px-8 py-4 rounded-2xl font-bold text-sm shadow-xl hover:bg-[#3B7EBB] transition-all">
                                Request Partnership Deck
                            </button>
                            <button className="border-2 border-[#1B3B5A] text-[#1B3B5A] px-8 py-4 rounded-2xl font-bold text-sm hover:bg-slate-50">
                                View Lab Specs
                            </button>
                        </div>
                    </div>

                    {/* EXACT DESIGN REQUESTED */}
                    <div className="relative">
                        <div className="absolute inset-0 bg-[#3B7EBB]/20 blur-[120px] rounded-full" />
                        <div className="relative rounded-[3.5rem] overflow-hidden border-[12px] border-white shadow-2xl">
                            <Image
                                src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=800"
                                alt="Quantum Laboratory"
                                width={800}
                                height={600}
                                className="w-full h-full object-cover aspect-video"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. VALUE PROPOSITION STRIP */}
            <section className="bg-[#1B3B5A] py-16">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-3 gap-12">
                        {[
                            { title: "Zero CapEx", desc: "Access real quantum hardware via cloud-bridge without physical infrastructure costs." },
                            { title: "100% Placement", desc: "We take full responsibility for student outcomes through our global hiring network." },
                            { title: "Turnkey Implementation", desc: "Complete 4-year curriculum, faculty training, and lab setup in 60 days." }
                        ].map((item, i) => (
                            <div key={i} className="flex gap-4">
                                <CheckCircle2 className="text-[#7FB8E1] flex-shrink-0" size={24} />
                                <div>
                                    <h4 className="text-white font-bold text-lg mb-2">{item.title}</h4>
                                    <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. THE 4-YEAR STACKED ROADMAP */}
            <section className="py-32 px-6 bg-[#F8F9FF]">
                <div className="max-w-5xl mx-auto">
                    <div className="flex flex-col md:flex-row items-end justify-between mb-24 gap-6">
                        <div className="max-w-xl">
                            <h2 className="text-4xl font-black text-[#1B3B5A] mb-6">A Complete <span className="text-[#3B7EBB]">8-Semester</span> Ecosystem</h2>
                            <p className="text-slate-500 font-medium italic">"Moving from classical bits to quantum qubits, we handle the transition while you focus on academic excellence."</p>
                        </div>
                        <TrendingUp className="text-[#3B7EBB] w-16 h-16 hidden md:block opacity-20" />
                    </div>

                    <div className="space-y-24">
                        {b2bFeatures.map((item, idx) => (
                            <div key={idx} className={`sticky ${item.top} transition-all duration-500`}>
                                <div className={`${item.theme} rounded-[4rem] p-12 md:p-20 shadow-2xl flex flex-col lg:flex-row gap-16 border border-slate-100 min-h-[520px]`}>
                                    <div className="flex-1">
                                        <span className="font-black text-xs uppercase tracking-[0.4em] opacity-60 mb-4 block">Semester Phase 0{idx + 1}</span>
                                        <h3 className="text-3xl md:text-5xl font-black mb-8 tracking-tighter leading-tight">{item.title}</h3>
                                        <p className="text-lg opacity-80 leading-relaxed mb-10">{item.desc}</p>
                                        <div className="flex flex-wrap gap-3">
                                            {item.tags.map((tag, t) => (
                                                <span key={t} className="px-5 py-2 bg-black/5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] border border-black/5">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="lg:w-1/3 flex items-center justify-center">
                                        <div className="w-full aspect-square bg-[#F8F9FF]/10 rounded-[3.5rem] border-2 border-dashed border-slate-200 flex flex-col items-center justify-center text-center p-8">
                                            <Zap className="w-12 h-12 text-[#3B7EBB] mb-4" />
                                            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Qubinaire Virtual Lab Node</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. INSTITUTIONAL CTA */}
            <section className="py-32 px-6">
                <div className="max-w-5xl mx-auto bg-gradient-to-br from-[#1B3B5A] to-[#3B7EBB] rounded-[4rem] p-12 md:p-24 text-center text-white shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-32 translate-x-32" />
                    <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight relative z-10">
                        Secure Your Status as a <br /><span className="text-[#7FB8E1] italic">Premier Tech Institution.</span>
                    </h2>
                    <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
                        <input
                            type="email"
                            placeholder="Institutional Email"
                            className="px-8 py-5 rounded-2xl bg-white/10 border border-white/20 text-white placeholder-white/50 outline-none focus:ring-2 ring-white min-w-[300px]"
                        />
                        <button className="bg-white text-[#1B3B5A] px-10 py-5 rounded-2xl font-black text-sm tracking-widest hover:scale-105 transition-all">
                            REQUEST PROPOSAL
                        </button>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}