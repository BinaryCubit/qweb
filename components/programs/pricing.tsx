"use client";

import { useState } from "react";
import {
  Check,
  X,
  GraduationCap,
  ShieldCheck,
  Crown,
  IndianRupee,
  CalendarDays,
  BriefcaseBusiness,
  Award,
  Users,
  TrendingUp,
  Rocket,
  Target,
  Clock3,
  ChevronRight,
  Sparkles,
} from "lucide-react";

type Program = {
  name: string;
  subtitle: string;
  price: string;
  color: string;
  border: string;
  bg: string;
  icon: React.ReactNode;
  badge?: string;
};

const programs: Program[] = [
  {
    name: "SKILL PROGRAM",
    subtitle: "BUILD SKILLS. START YOUR CAREER.",
    price: "₹30,000",
    color: "text-green-700",
    border: "border-green-200",
    bg: "bg-green-50",
    icon: <GraduationCap className="h-7 w-7" />,
  },
  {
    name: "JOB GUARANTEE PROGRAM",
    subtitle: "GET CERTIFIED. GET HIRED.",
    price: "₹50,000",
    color: "text-blue-700",
    border: "border-blue-200",
    bg: "bg-blue-50",
    icon: <ShieldCheck className="h-7 w-7" />,
    badge: "MOST POPULAR",
  },
  {
    name: "PREMIUM CAREER PROGRAM",
    subtitle: "PREMIUM SKILLS. HIGHER PACKAGE.",
    price: "₹80,000",
    color: "text-purple-700",
    border: "border-purple-200",
    bg: "bg-purple-50",
    icon: <Crown className="h-7 w-7" />,
  },
];

const features = [
  {
    label: "PROGRAM FEE",
    icon: <IndianRupee className="h-5 w-5" />,
    values: ["₹30,000", "₹50,000", "₹80,000"],
    type: "price",
  },
  {
    label: "DURATION",
    icon: <CalendarDays className="h-5 w-5" />,
    values: ["6 MONTHS", "6 MONTHS", "6 MONTHS"],
  },
  {
    label: "QUBINAIRE CERTIFICATION",
    icon: <Award className="h-5 w-5" />,
    values: [true, true, true],
  },
  {
    label: "6-MONTH INTERNSHIP",
    icon: <BriefcaseBusiness className="h-5 w-5" />,
    values: [true, true, true],
  },
  {
    label: "INTERNSHIP CERTIFICATE",
    icon: <Award className="h-5 w-5" />,
    values: [true, true, true],
  },
  {
    label: "NASSCOM CERTIFICATION",
    icon: <ShieldCheck className="h-5 w-5" />,
    values: [false, true, true],
  },
  {
    label: "IBM CERTIFICATION",
    icon: <Award className="h-5 w-5" />,
    values: [false, false, true],
  },
  {
    label: "GOOGLE BADGES",
    icon: <Sparkles className="h-5 w-5" />,
    values: [false, false, true],
  },
  {
    label: "JOB GUARANTEE",
    icon: <ShieldCheck className="h-5 w-5" />,
    values: [
      "PLACEMENT ASSISTANCE",
      "100%*",
      "100%*",
    ],
  },
  {
    label: "PLACEMENT ASSISTANCE",
    icon: <Users className="h-5 w-5" />,
    values: [true, true, true],
  },
  {
    label: "PACKAGE COMMITMENT",
    icon: <TrendingUp className="h-5 w-5" />,
    values: ["—", "₹3 – ₹4 LPA*", "MINIMUM ₹5 LPA*"],
  },
  {
    label: "HIGHEST PACKAGE",
    icon: <Rocket className="h-5 w-5" />,
    values: ["—", "—", "NO FIXED UPPER LIMIT*"],
  },
];

const highlights = [
  {
    title: "SKILL PROGRAM – ₹30,000",
    description:
      "Best for students who want to build industry-ready skills.",
    color: "green",
    items: [
      "Qubinaire Certification",
      "6-Month Internship",
      "Internship Certificate",
      "Placement Assistance (Not 100% Guarantee)",
    ],
    cta: "BUILD SKILLS. START YOUR CAREER.",
  },
  {
    title: "JOB GUARANTEE PROGRAM – ₹50,000",
    description:
      "Best for students whose primary goal is to get a job.",
    color: "blue",
    items: [
      "Everything in ₹30,000 Program",
      "NASSCOM Certification",
      "100% Job Guarantee*",
      "₹3 – ₹4 LPA Package Commitment*",
    ],
    cta: "GET CERTIFIED. GET HIRED.",
  },
  {
    title: "PREMIUM CAREER PROGRAM – ₹80,000",
    description:
      "Best for students targeting higher-paying career opportunities.",
    color: "purple",
    items: [
      "Everything in ₹50,000 Program",
      "IBM Certification",
      "Google Badges",
      "100% Job Guarantee*",
      "Minimum ₹5 LPA Package Commitment*",
      "No Fixed Upper Limit on Highest Package*",
    ],
    cta: "PREMIUM SKILLS. HIGHER PACKAGE.",
  },
];

function FeatureValue({
  value,
  programIndex,
}: {
  value: string | boolean;
  programIndex: number;
}) {
  if (typeof value === "boolean") {
    return value ? (
      <div className="flex justify-center">
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-green-600 text-white">
          <Check className="h-4 w-4" strokeWidth={3} />
        </span>
      </div>
    ) : (
      <div className="flex justify-center">
        <X className="h-6 w-6 text-red-600" strokeWidth={3} />
      </div>
    );
  }

  if (value === "100%*") {
    return (
      <span
        className={`font-bold ${
          programIndex === 1
            ? "text-blue-700"
            : "text-purple-700"
        }`}
      >
        ✓ 100%*
      </span>
    );
  }

  if (value === "PLACEMENT ASSISTANCE") {
    return (
      <span className="text-xs font-bold uppercase text-green-700">
        Placement Assistance
        <br />
        <span className="font-normal text-slate-500">
          (Not 100% Guarantee)
        </span>
      </span>
    );
  }

  return (
    <span
      className={`font-semibold ${
        programIndex === 0
          ? "text-green-700"
          : programIndex === 1
          ? "text-blue-700"
          : "text-purple-700"
      }`}
    >
      {value}
    </span>
  );
}

function HighlightCard({
  item,
  index,
}: {
  item: (typeof highlights)[number];
  index: number;
}) {
  const styles = {
    green: {
      wrapper: "border-green-200 bg-green-50/60",
      icon: "bg-green-600",
      title: "text-green-800",
      button:
        "border-green-300 text-green-800 hover:bg-green-100",
      dot: "bg-green-600",
    },
    blue: {
      wrapper: "border-blue-200 bg-blue-50/60",
      icon: "bg-blue-600",
      title: "text-blue-800",
      button:
        "border-blue-300 text-blue-800 hover:bg-blue-100",
      dot: "bg-blue-600",
    },
    purple: {
      wrapper: "border-purple-200 bg-purple-50/60",
      icon: "bg-purple-600",
      title: "text-purple-800",
      button:
        "border-purple-300 text-purple-800 hover:bg-purple-100",
      dot: "bg-purple-600",
    },
  };

  const style = styles[item.color as keyof typeof styles];

  return (
    <div
      className={`relative flex h-full flex-col rounded-2xl border p-6 ${style.wrapper}`}
    >
      {index === 1 && (
        <div className="absolute right-4 top-4 rounded-full bg-yellow-400 px-3 py-1 text-[10px] font-black uppercase text-blue-950">
          ★ Popular
        </div>
      )}

      <div className="flex items-center gap-3">
        <span
          className={`flex h-10 w-10 items-center justify-center rounded-full text-white ${style.icon}`}
        >
          {index === 0 ? (
            <GraduationCap className="h-5 w-5" />
          ) : index === 1 ? (
            <ShieldCheck className="h-5 w-5" />
          ) : (
            <Crown className="h-5 w-5" />
          )}
        </span>

        <h3 className={`text-sm font-extrabold ${style.title}`}>
          {item.title}
        </h3>
      </div>

      <p className="mt-4 min-h-[48px] text-sm leading-6 text-slate-600">
        {item.description}
      </p>

      <ul className="mt-5 flex-1 space-y-3">
        {item.items.map((feature) => (
          <li
            key={feature}
            className="flex items-start gap-3 text-sm text-slate-700"
          >
            <span
              className={`mt-1 h-2 w-2 shrink-0 rounded-full ${style.dot}`}
            />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <button
        className={`mt-6 flex items-center justify-center gap-2 rounded-xl border bg-white px-4 py-3 text-xs font-bold transition ${style.button}`}
      >
        <Target className="h-4 w-4" />
        {item.cta}
      </button>
    </div>
  );
}

export default function PricingComparisonPage() {
  const [selected, setSelected] = useState(1);

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      {/* =========================================
          HERO
      ========================================== */}
      <section className="overflow-hidden bg-white">
        <div className="mx-auto max-w-[1500px] px-4 pb-6 pt-8 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl font-black tracking-tight text-[#10234f] sm:text-4xl md:text-5xl lg:text-6xl">
              3-TIER CAREER PROGRAM
              <br className="sm:hidden" /> COMPARISON CHART
            </h1>

            <div className="mx-auto mt-3 flex max-w-2xl items-center justify-center gap-3">
              <div className="hidden h-px flex-1 bg-gradient-to-r from-transparent to-blue-700 sm:block" />

              <p className="text-sm font-semibold tracking-wide text-slate-600 sm:text-base">
                CHOOSE THE RIGHT PROGRAM.{" "}
                <span className="text-blue-700">BUILD SKILLS.</span>{" "}
                <span className="text-blue-700">GET CERTIFIED.</span>{" "}
                <span className="text-blue-700">GET PLACED.</span>
              </p>

              <div className="hidden h-px flex-1 bg-gradient-to-l from-transparent to-purple-700 sm:block" />
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          MOBILE PROGRAM SELECTOR
      ========================================== */}
      <div className="sticky top-0 z-30 border-b border-slate-200 bg-white/95 p-3 backdrop-blur lg:hidden">
        <div className="mx-auto grid max-w-xl grid-cols-3 gap-2">
          {programs.map((program, index) => (
            <button
              key={program.name}
              onClick={() => setSelected(index)}
              className={`rounded-lg px-2 py-2 text-[10px] font-bold transition ${
                selected === index
                  ? `${program.bg} ${program.color} ring-2 ${program.border}`
                  : "bg-slate-100 text-slate-500"
              }`}
            >
              {program.name.replace(" PROGRAM", "")}
            </button>
          ))}
        </div>
      </div>

      <section className="mx-auto max-w-[1500px] px-3 pb-10 sm:px-5 lg:px-8">
        {/* =========================================
            COMPARISON TABLE
        ========================================== */}
        <div className="overflow-hidden rounded-2xl border border-slate-300 bg-white shadow-xl">
          {/* Header */}
          <div className="grid grid-cols-1 lg:grid-cols-[220px_repeat(3,minmax(0,1fr))_190px]">
            <div className="hidden bg-[#10234f] px-5 py-7 text-white lg:block">
              <h2 className="text-xl font-black uppercase tracking-wide">
                Features
              </h2>
              <p className="mt-2 text-xs text-blue-200">
                Compare all program benefits
              </p>
            </div>

            {programs.map((program, index) => (
              <div
                key={program.name}
                className={`relative border-b border-slate-200 px-4 py-5 text-center lg:border-l ${program.bg} ${
                  selected === index
                    ? "ring-2 ring-inset ring-blue-500"
                    : ""
                }`}
              >
                {program.badge && (
                  <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-400 px-4 py-1 text-[10px] font-black text-blue-950 shadow">
                    {program.badge}
                  </div>
                )}

                <div
                  className={`mx-auto flex h-12 w-12 items-center justify-center rounded-full border bg-white ${program.border} ${program.color}`}
                >
                  {program.icon}
                </div>

                <h3
                  className={`mt-3 text-sm font-black ${program.color}`}
                >
                  {program.name}
                </h3>

                <p className="mt-1 text-[10px] font-semibold text-slate-500">
                  {program.subtitle}
                </p>
              </div>
            ))}

            {/* Why upgrade */}
            <div className="hidden bg-[#10234f] px-5 py-5 text-center text-white lg:block">
              <h3 className="text-sm font-black uppercase">
                Why Upgrade?
              </h3>

              <p className="mt-3 text-xl font-black text-green-300">
                ₹30K → ₹50K
              </p>

              <p className="mt-2 text-xs leading-5 text-blue-100">
                Just ₹20,000 more for NASSCOM Certification +
                100% Job Guarantee + ₹3–₹4 LPA Package
                Commitment.
              </p>
            </div>
          </div>

          {/* Feature Rows */}
          <div>
            {features.map((feature, rowIndex) => (
              <div
                key={feature.label}
                className={`grid grid-cols-1 lg:grid-cols-[220px_repeat(3,minmax(0,1fr))_190px] ${
                  rowIndex % 2 === 0
                    ? "bg-white"
                    : "bg-slate-50/70"
                }`}
              >
                {/* Feature label */}
                <div className="flex items-center gap-3 border-t border-slate-200 px-4 py-3 lg:px-5">
                  <span className="hidden text-slate-500 sm:block">
                    {feature.icon}
                  </span>

                  <span className="text-xs font-bold text-slate-700">
                    {feature.label}
                  </span>
                </div>

                {/* Values */}
                {feature.values.map((value, index) => (
                  <div
                    key={`${feature.label}-${index}`}
                    className={`flex min-h-[55px] items-center justify-center border-t border-slate-200 px-3 py-3 text-center text-sm ${
                      selected === index && "lg:bg-blue-50/30"
                    }`}
                  >
                    <FeatureValue
                      value={value}
                      programIndex={index}
                    />
                  </div>
                ))}

                {/* Upgrade content */}
                <div className="hidden items-center justify-center border-l border-t border-slate-200 px-4 text-center lg:flex">
                  {rowIndex === 0 ? (
                    <div>
                      <p className="text-lg font-black text-green-700">
                        ₹30K → ₹50K
                      </p>
                    </div>
                  ) : rowIndex === 5 ? (
                    <p className="text-xs font-semibold leading-5 text-slate-600">
                      ₹50K → ₹80K
                    </p>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* =========================================
            WHY UPGRADE - MOBILE / DESKTOP
        ========================================== */}
        <div className="mt-6 grid gap-4 lg:grid-cols-2">
          <UpgradeCard
            from="₹30K"
            to="₹50K"
            color="green"
            description="Just ₹20,000 more for NASSCOM Certification + 100% Job Guarantee + ₹3–₹4 LPA Package Commitment."
            icon={<TrendingUp className="h-7 w-7" />}
          />

          <UpgradeCard
            from="₹50K"
            to="₹80K"
            color="blue"
            description="Just ₹30,000 more for IBM Certification, Google Badges, Minimum ₹5 LPA Package Commitment with no fixed upper limit on highest package."
            icon={<Crown className="h-7 w-7" />}
          />
        </div>

        {/* =========================================
            PROGRAM HIGHLIGHTS
        ========================================== */}
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {highlights.map((item, index) => (
            <HighlightCard
              key={item.title}
              item={item}
              index={index}
            />
          ))}
        </div>

        {/* =========================================
            ALL PROGRAMS
        ========================================== */}
        <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex flex-col items-center justify-between gap-5 sm:flex-row">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#10234f] text-white">
                <Clock3 className="h-6 w-6" />
              </div>

              <div>
                <h3 className="font-black text-slate-900">
                  ALL PROGRAMS
                </h3>
                <p className="text-sm text-slate-500">
                  Duration:{" "}
                  <strong className="text-slate-700">
                    6 Months (Minimum)
                  </strong>
                </p>
              </div>
            </div>

            <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#10234f] px-6 py-3 text-sm font-bold text-white transition hover:bg-blue-900 sm:w-auto">
              Compare Programs
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      {/* =========================================
          PROMISE BAR
      ========================================== */}
      <footer className="bg-[#10234f] text-white">
        <div className="mx-auto max-w-[1500px] px-4 py-6 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-[1.2fr_repeat(4,1fr)_2fr] lg:items-center">
            {/* Promise */}
            <div className="flex items-center gap-3">
              <ShieldCheck className="h-10 w-10 shrink-0 text-white" />

              <div>
                <p className="text-sm font-bold uppercase">
                  Our Promise:
                </p>
                <p className="text-lg font-black uppercase text-yellow-400">
                  Your Career Success
                </p>
              </div>
            </div>

            <PromiseItem
              icon={<GraduationCap />}
              text="Industry Relevant Skills"
            />

            <PromiseItem
              icon={<Users />}
              text="Expert Trainers"
            />

            <PromiseItem
              icon={<BriefcaseBusiness />}
              text="Practical Internship"
            />

            <PromiseItem
              icon={<Target />}
              text="Placement Support"
            />

            <p className="text-[10px] leading-5 text-blue-100">
              *Terms & Conditions Apply. Job guarantee, package
              commitments, eligibility requirements, selection
              criteria, interview requirements and other applicable
              terms & conditions will be clearly communicated before
              enrollment.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}

function UpgradeCard({
  from,
  to,
  description,
  color,
  icon,
}: {
  from: string;
  to: string;
  description: string;
  color: "green" | "blue";
  icon: React.ReactNode;
}) {
  const styles =
    color === "green"
      ? "border-green-200 bg-green-50 text-green-800"
      : "border-blue-200 bg-blue-50 text-blue-800";

  return (
    <div className={`rounded-2xl border p-5 ${styles}`}>
      <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white shadow-sm">
          {icon}
        </div>

        <div>
          <p className="text-xl font-black">
            {from} → {to}
          </p>

          <p className="mt-1 text-xs font-semibold uppercase tracking-wide opacity-70">
            Why upgrade?
          </p>
        </div>
      </div>

      <p className="mt-4 text-sm leading-6 text-slate-700">
        {description}
      </p>
    </div>
  );
}

function PromiseItem({
  icon,
  text,
}: {
  icon: React.ReactNode;
  text: string;
}) {
  return (
    <div className="flex items-center gap-3 border-slate-700 lg:border-l lg:pl-5">
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/10 text-white">
        {icon}
      </span>

      <span className="text-xs font-bold uppercase text-blue-100">
        {text}
      </span>
    </div>
  );
}