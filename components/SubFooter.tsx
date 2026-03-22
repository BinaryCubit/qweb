export default function SubFooter({ tagline }: { tagline?: string }) {
  return (
    <footer className="bg-[#1B3B5A] text-white/40 pt-10 pb-10 px-6 text-center border-t border-white/5">
      {tagline && <p className="text-[10px] font-bold uppercase tracking-widest mb-2">{tagline}</p>}
      <p className="text-[10px] font-bold uppercase tracking-widest">© 2026 QUBINAIRE SERVICES PVT LTD | ALL RIGHTS RESERVED</p>
    </footer>
  );
}
