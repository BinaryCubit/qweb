import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Qubinaire - Data Science, AI & Full Stack Training | Job Guarantee & B2B Campus Collab",
  description: "Learn Data Science, AI, and Full Stack Development with real projects and dedicated placement support. 100% Job Guarantee.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-slate-200 text-slate-600 leading-relaxed">
        {children}
      </body>
    </html>
  );
}
