"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";

const sections = [
  {
    id: "eligibility",
    title: "1. Who Qualifies for the Job Guarantee?",
  },
  {
    id: "job-definition",
    title: "2. What Counts as a Job?",
  },
  {
    id: "guarantee",
    title: "3. What Does 100% Job Guarantee Mean?",
  },
  {
    id: "student-obligations",
    title: "4. Student Obligations",
  },
  {
    id: "placement",
    title: "5. Placement Process",
  },
  {
    id: "refund",
    title: "6. Refund Conditions",
  },
  {
    id: "refund-process",
    title: "7. Refund Process",
  },
  {
    id: "attendance",
    title: "8. Attendance Requirement",
  },
  {
    id: "assessment",
    title: "9. Assessment Requirement",
  },
  {
    id: "conduct",
    title: "10. Code of Conduct",
  },
  {
    id: "relocation",
    title: "11. Location & Relocation",
  },
  {
    id: "intellectual-property",
    title: "12. Intellectual Property",
  },
  {
    id: "confidentiality",
    title: "13. Confidentiality",
  },
  {
    id: "termination",
    title: "14. Termination",
  },
  {
    id: "disputes",
    title: "15. Dispute Resolution",
  },
];

export default function TermsAndConditionsPage() {
  const [accepted, setAccepted] = useState(false);

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
     <Header/>

      {/* Important Notice */}
      <section className="bg-blue-600">
        <div className="mx-auto max-w-7xl px-6 py-5 lg:px-8">
          <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
            <div>
              <h2 className="font-semibold text-white">
                Please read these terms carefully
              </h2>

              <p className="mt-1 max-w-4xl text-sm leading-6 text-blue-100">
                The 100% Job Guarantee is subject to the eligibility,
                academic, placement and other conditions described below.
              </p>
            </div>

            <span className="w-fit rounded-full bg-white/15 px-4 py-1.5 text-xs font-medium text-white">
              Effective: 03 August 2026
            </span>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[260px_minmax(0,1fr)]">
          {/* Sidebar */}
          <aside className="hidden lg:block">
            <div className="sticky top-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <p className="mb-4 text-xs font-bold uppercase tracking-wider text-slate-500">
                On this page
              </p>

              <nav className="space-y-1">
                {sections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="block rounded-lg px-3 py-2 text-sm text-slate-600 transition hover:bg-blue-50 hover:text-blue-700"
                  >
                    {section.title}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          {/* Main Content */}
          <article className="min-w-0">
            {/* Summary Cards */}
            <div className="grid gap-4 md:grid-cols-3">
              <SummaryCard
                value="90%"
                label="Minimum Attendance"
              />

              <SummaryCard
                value="75%"
                label="Minimum Score Per Assessment"
              />

              <SummaryCard
                value="₹4 LPA"
                label="Minimum Package Stated"
              />
            </div>

           
            {/* 1 */}
            <Section id="eligibility" title="1. Who Qualifies for the Job Guarantee?">
              <p>
                A candidate becomes eligible for consideration under the 100%
                Job Guarantee Program only after satisfying all applicable
                conditions.
              </p>

              <RequirementList
                items={[
                  "Successful completion of the entire training curriculum.",
                  "Minimum 90% attendance.",
                  "Minimum 75% score in every mandatory assessment, subject to applicable reassessment policy.",
                  "Completion of all assignments, live projects and the Capstone Project.",
                  "No outstanding fee or financial liability towards the Company.",
                  "Compliance with the Code of Conduct and disciplinary requirements.",
                  "Submission of all documents required for placement.",
                  "Successful completion of resume building, profile creation and interview preparation activities.",
                  "Active participation in mock interviews, aptitude tests and career development sessions.",
                  "Cooperation with background verification processes where required.",
                ]}
              />

              <Notice>
                Meeting these conditions establishes academic and placement
                eligibility. It does not mean that a particular employer is
                required to select the candidate.
              </Notice>
            </Section>

            {/* 2 */}
            <Section id="job-definition" title="2. What Counts as a Job?">
              <p>
                A "Suitable Employment Opportunity" is an employment
                opportunity that reasonably aligns with the skills acquired by
                the candidate during the program.
              </p>

              <RequirementList
                items={[
                  "Must reasonably align with the skills acquired during the Program.",
                  "Must meet or exceed the applicable minimum guaranteed CTC specified in the admission documentation.",
                  "Must be offered by an employer that independently chooses to recruit the candidate.",
                  "May be Full-Time, Contractual, Apprenticeship, Trainee or Probationary in nature.",
                  "May be Onsite, Hybrid or Remote depending on employer requirements.",
                ]}
              />

              <Notice>
                The employer independently determines selection, compensation,
                designation and employment conditions, subject to any minimum
                package commitment expressly recorded in the candidate's
                admission documentation.
              </Notice>
            </Section>

            {/* 3 */}
            <Section id="guarantee" title="3. What Does 100% Job Guarantee Mean?">
              <p>
                Qubinaire operates a structured 100% Job Guarantee Program
                intended to support eligible candidates in securing employment
                after successful completion of the Program.
              </p>

              <div className="mt-5 rounded-xl border border-blue-200 bg-blue-50 p-5">
                <p className="font-semibold text-blue-950">
                  Important clarification
                </p>

                <p className="mt-2 text-sm leading-6 text-blue-900">
                  Qubinaire facilitates recruitment opportunities through its
                  employer network and placement ecosystem. The final hiring
                  decision always rests with the respective employer.
                </p>
              </div>

              <p className="mt-5">
                The agreement provides that the Company will take a{" "}
                <strong>90-day buffer period</strong> for smooth placements.
              </p>
            </Section>

            {/* 4 */}
            <Section id="student-obligations" title="4. Student Obligations">
              <p>
                The student is expected to actively participate in all
                academic and placement-related activities.
              </p>

              <RequirementList
                items={[
                  "Attend lectures, practical sessions, laboratories and workshops.",
                  "Complete assignments, coding tasks, case studies and projects.",
                  "Complete the mandatory Capstone Project.",
                  "Participate in assessments and mock interviews.",
                  "Participate in placement preparation and career development activities.",
                  "Maintain an updated resume and professional profile where applicable.",
                  "Attend interviews scheduled through the placement process.",
                  "Respond promptly to placement communications.",
                  "Provide truthful information and required documents.",
                  "Cooperate with employer and background verification requirements.",
                  "Follow the Company's Code of Conduct.",
                  "Clear all course fees and other applicable dues.",
                ]}
              />
            </Section>

            {/* 5 */}
            <Section id="placement" title="5. Placement Process">
              <p>
                Placement assistance may be provided through multiple
                recruitment channels.
              </p>

              <RequirementList
                items={[
                  "Campus Recruitment Drives",
                  "Direct Employer Referrals",
                  "Recruitment Partners",
                  "Corporate Hiring Events",
                  "Placement Portals",
                  "Industry Networking",
                  "Internal Employer Database",
                  "Other recruitment channels considered appropriate by the Company",
                ]}
              />

              <Notice>
                The Company does not guarantee selection by any specific
                employer.
              </Notice>
            </Section>

            {/* 6 */}
            <Section id="refund" title="6. Refund Conditions">
              <p>
                Refund eligibility applies only where the student's admission
                documentation expressly contains a 100% Job Guarantee together
                with a corresponding refund commitment.
              </p>

              <p className="mt-4">
                The student must satisfy all of the following conditions:
              </p>

              <RequirementList
                items={[
                  "Successfully complete the entire Program.",
                  "Maintain at least 90% attendance.",
                  "Secure at least 75% in every mandatory assessment.",
                  "Complete all assignments, projects and the Capstone Project satisfactorily.",
                  "Clear all fees and dues payable to the Company.",
                  "Attend all interviews and placement activities reasonably scheduled.",
                  "Not unreasonably decline a Suitable Employment Opportunity.",
                  "Comply with all lawful obligations under the Agreement.",
                  "Cooperate with Employers and the Placement Cell.",
                  "Remain available for placement during the applicable placement-support period.",
                ]}
              />

              <Notice type="warning">
                Only where all conditions are fulfilled and the Company is
                nevertheless unable to provide the agreed placement support
                within the applicable placement support period will the refund
                claim be examined under the Agreement and Refund Policy.
              </Notice>
            </Section>

            {/* 7 */}
            <Section id="refund-process" title="7. Refund Process">
              <p>
                The Agreement states that refund claims are governed by the
                Agreement and the applicable Refund Policy.
              </p>

              <div className="mt-5 rounded-xl border border-amber-200 bg-amber-50 p-5">
                <p className="font-semibold text-amber-900">
                  Important: The Agreement does not specify a processing
                  timeline.
                </p>

                <p className="mt-2 text-sm leading-6 text-amber-800">
                  The provided Agreement does not currently specify the exact
                  number of days within which an eligible refund must be
                  processed or paid. It also does not specify a detailed claim
                  submission procedure or refund payment mechanism.
                </p>
              </div>

              <p className="mt-5">
                For clarity, Qubinaire may consider adding a separate Refund
                Policy specifying the claim process, required documents,
                verification procedure, approval process and payment timeline.
              </p>
            </Section>

            {/* 8 */}
            <Section id="attendance" title="8. Attendance Requirement">
              <p>
                The candidate must maintain a minimum attendance of{" "}
                <strong>90%</strong> throughout the Program.
              </p>

              <p className="mt-4">
                Attendance may include classroom sessions, online live
                sessions, practical laboratory sessions, live projects,
                coding sessions, workshops, guest lectures, assessments, mock
                interviews and placement preparation sessions.
              </p>

              <Notice type="warning">
                If attendance falls below 90%, the Company may restrict
                assessments, withhold certificates where feasible, suspend
                placement assistance or declare the candidate ineligible for
                Job Guarantee benefits.
              </Notice>
            </Section>

            {/* 9 */}
            <Section id="assessment" title="9. Assessment Requirement">
              <p>
                The candidate must participate in prescribed assessments and
                obtain a minimum score of <strong>75%</strong> in each
                assessment.
              </p>

              <p className="mt-4">
                Assessments may include written examinations, online tests,
                practical evaluations, viva voce, coding tests, capstone
                reviews, assignments, presentations, mock interviews,
                technical interviews, HR interviews, aptitude tests,
                communication evaluations and employer-readiness assessments.
              </p>
            </Section>

            {/* 10 */}
            <Section id="conduct" title="10. Code of Conduct">
              <p>The candidate shall:</p>

              <RequirementList
                items={[
                  "Behave professionally with faculty, staff and fellow students.",
                  "Maintain discipline within Company premises and digital platforms.",
                  "Refrain from abusive, threatening, discriminatory or harassing conduct.",
                  "Comply with lawful instructions issued by the Company.",
                  "Maintain decorum during classroom sessions and placement activities.",
                ]}
              />

              <p className="mt-4">
                Serious or repeated misconduct may result in disciplinary
                action, suspension or termination from the Program.
              </p>
            </Section>

            {/* 11 */}
            <Section id="relocation" title="11. Location & Relocation">
              <p>
                Employment opportunities may arise anywhere within India.
                Accordingly, the candidate agrees to relocate if reasonably
                required by the employer, subject to the employment offer.
              </p>

              <p className="mt-4">
                A candidate should not decline a Suitable Employment
                Opportunity solely because of geographical location unless
                compelling circumstances supported by appropriate documentation
                are accepted by the Company.
              </p>
            </Section>

            {/* 12 */}
            <Section id="intellectual-property" title="12. Intellectual Property">
              <p>
                Study materials, recorded lectures, notes, software, source
                code, presentations, assessments, templates, employer
                databases and proprietary learning resources remain the
                intellectual property of the Company unless expressly stated
                otherwise.
              </p>

              <RequirementList
                items={[
                  "Do not reproduce Company material without authorization.",
                  "Do not copy or distribute proprietary course content.",
                  "Do not upload or publicly share paid course material.",
                  "Do not sell or sublicense Company educational resources.",
                  "Do not commercially exploit proprietary learning resources.",
                ]}
              />
            </Section>

            {/* 13 */}
            <Section id="confidentiality" title="13. Confidentiality">
              <p>
                Candidates must maintain confidentiality of non-public
                information relating to course content, assessment papers,
                placement partners, employer databases, internal processes,
                software, technology, pricing strategies and business
                information.
              </p>

              <Notice>
                Confidentiality obligations continue after completion or
                termination of the Program to the extent permitted by
                applicable law.
              </Notice>
            </Section>

            {/* 14 */}
            <Section id="termination" title="14. Termination">
              <p>
                The Company may terminate the Agreement where the candidate
                commits a material breach.
              </p>

              <RequirementList
                items={[
                  "Submission of forged documents.",
                  "Non-payment of fees after due notice.",
                  "Serious disciplinary misconduct.",
                  "Unauthorized sharing or commercial exploitation of proprietary content.",
                  "Cybersecurity violations affecting Company systems.",
                  "Violent, abusive or unlawful conduct.",
                  "Repeated and wilful violation of academic or placement obligations.",
                ]}
              />

              <p className="mt-4">
                Before major disciplinary action, the candidate will ordinarily
                be given an opportunity to respond, except where immediate
                action is reasonably necessary to protect safety, security or
                Program integrity.
              </p>
            </Section>

            {/* 15 */}
            <Section id="disputes" title="15. Dispute Resolution">
              <p>
                The parties shall first attempt to resolve disputes through
                good-faith discussions and negotiations.
              </p>

              <p className="mt-4">
                If the dispute remains unresolved within 30 days of written
                notice, either party may refer the matter to arbitration under
                the Arbitration and Conciliation Act, 1996, as amended.
              </p>

              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <InfoItem
                  title="Governing Law"
                  value="Laws of the Republic of India"
                />

                <InfoItem
                  title="Jurisdiction"
                  value="Gurugram, Haryana, subject to applicable law"
                />
              </div>
            </Section>

            {/* Acceptance */}
            <section className="mt-10 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
              <h2 className="text-xl font-bold text-slate-950">
                Student Acknowledgement
              </h2>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                By proceeding with enrollment, the candidate acknowledges that
                they have read and understood the applicable terms and
                conditions and agree to be bound by the applicable Agreement
                and policies.
              </p>

              <label className="mt-6 flex cursor-pointer items-start gap-3">
                <input
                  type="checkbox"
                  checked={accepted}
                  onChange={(e) => setAccepted(e.target.checked)}
                  className="mt-1 h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                />

                <span className="text-sm leading-6 text-slate-700">
                  I have read and understood the Terms & Conditions, including
                  the eligibility requirements, student obligations, placement
                  conditions and refund conditions.
                </span>
              </label>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <button
                  disabled={!accepted}
                  className="rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-slate-300"
                >
                  Accept & Continue
                </button>

                <Link
                  href="/"
                  className="rounded-xl border border-slate-300 px-6 py-3 text-center text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
                >
                  Back
                </Link>
              </div>
            </section>

            {/* Footer Disclaimer */}
            <div className="mt-8 rounded-xl border border-slate-200 bg-slate-100 p-5">
              <p className="text-xs leading-5 text-slate-500">
                This page is a web presentation of the terms contained in the
                Student Enrollment, Training and 100% Job Guarantee Agreement.
                In case of any discrepancy, the executed Agreement,
                Annexures, Schedules and applicable written policies shall
                govern.
              </p>
            </div>
          </article>
        </div>
      </div>
    </main>
  );
}

/* --------------------------------
   Reusable Components
--------------------------------- */

function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className="mt-8 scroll-mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8"
    >
      <h2 className="text-xl font-bold tracking-tight text-slate-950">
        {title}
      </h2>

      <div className="mt-4 text-[15px] leading-7 text-slate-600">
        {children}
      </div>
    </section>
  );
}

function RequirementList({ items }: { items: string[] }) {
  return (
    <ul className="mt-5 space-y-3">
      {items.map((item, index) => (
        <li key={index} className="flex gap-3">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600" />

          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function Notice({
  children,
  type = "info",
}: {
  children: React.ReactNode;
  type?: "info" | "warning";
}) {
  const styles =
    type === "warning"
      ? "border-amber-200 bg-amber-50 text-amber-900"
      : "border-blue-200 bg-blue-50 text-blue-900";

  return (
    <div className={`mt-6 rounded-xl border p-5 ${styles}`}>
      <p className="text-sm leading-6">{children}</p>
    </div>
  );
}

function SummaryCard({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <p className="text-2xl font-bold text-blue-600">{value}</p>
      <p className="mt-1 text-sm text-slate-500">{label}</p>
    </div>
  );
}

function InfoItem({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
      <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
        {title}
      </p>

      <p className="mt-1 font-semibold text-slate-900">{value}</p>
    </div>
  );
}