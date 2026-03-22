import React from "react";
import Link from "next/link";
import SubNav from "@/components/SubNav";
import SubFooter from "@/components/SubFooter";

import type { Metadata } from "next";
import { ProgramHero } from "@/components/programs/hero";
import Enrollment from "@/components/programs/enrollment";
import { ProjectSection } from "@/components/programs/project";
import { ToolsSection } from "@/components/programs/tool";
import { Roadmap } from "@/components/programs/roadmap";

export const metadata: Metadata = { title: "Full Stack Web Development | Java, MERN, Python | Qubinaire" };

const stacks = [
    {
        icon: "☕", title: "Java Full Stack", color: "orange",
        desc: "Preferred by Enterprise MNCs (TCS, Infosys, Banks). Focus on robustness and large-scale backend logic.",
        features: ["Core & Advanced Java", "Spring Boot & Microservices", "Angular / React Frontend"],
        featured: false,
    },
    {
        icon: "⚛️", title: "MERN Stack", color: "blue",
        desc: "The standard for Modern Startups and Product-based firms. 100% JavaScript ecosystem for high speed.",
        features: ["MongoDB & Express.js", "React.js & Redux", "Node.js Backend"],
        featured: true, badge: "Trending",
    },
    {
        icon: "🐍", title: "Python Full Stack", color: "blue",
        desc: "Best for AI-integrated web apps and fast prototyping. Versatile and extremely high demand.",
        features: ["Django / Flask Frameworks", "PostgreSQL & REST APIs", "React Integration"],
        featured: false,
    },
];



export default function FullStackPage() {
    return (
        <>
            <SubNav activeLink="programs" ctaHref="#compare" ctaLabel="CHOOSE TRACK" />
            <ProgramHero />
            <ToolsSection />
            <Roadmap />


            <ProjectSection />
            <Enrollment />
            <SubFooter tagline="Developing The Next Generation of Full Stack Engineers" />
        </>
    );
}
