import { ArrowUp } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.07] bg-[#0f171f] text-slate-400">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-5 px-5 py-7 text-center sm:px-8 md:flex-row md:justify-between md:gap-6 md:py-8 md:text-left">
        <a href="#home" className="text-base font-semibold tracking-tight text-white">
          ABDULLOH<span className="text-[#a9c2d5]">.DEV</span>
        </a>

        <p className="text-xs">© 2026 Barcha huquqlar himoyalangan.</p>

        <a
          href="#home"
          className="inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.14em] text-slate-300 transition-colors hover:text-[#b6c9d8]"
        >
          YUQORIGA <ArrowUp size={16} aria-hidden="true" />
        </a>
      </div>
    </footer>
  );
}
