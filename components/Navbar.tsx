"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  { label: "Home", href: "#home" },
  { label: "Skills", href: "#skills" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-white/[0.07] bg-[#121a22]/90 backdrop-blur-xl">
      <div className="mx-auto flex min-h-18 max-w-6xl items-center justify-between px-5 sm:px-8">
        <Link
          href="#home"
          onClick={() => setMenuOpen(false)}
          className="group inline-flex items-center gap-2.5 text-sm font-semibold tracking-[0.16em] text-white"
          aria-label="Portfolio bosh sahifasi"
        >
          <span className="flex size-8 items-center justify-center rounded-lg border border-[#9bb8ce]/20 bg-[#9bb8ce]/[0.08] text-xs font-bold tracking-normal text-[#a9c2d5] transition-colors group-hover:bg-[#9bb8ce]/[0.14]">
            P
          </span>
          <span>PORTFOLIO<span className="text-[#a9c2d5]">.</span></span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-md px-3.5 py-2 text-sm text-slate-400 transition-colors hover:bg-white/[0.04] hover:text-slate-100"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="https://t.me/Nomoz1vicc?text=Salom"
            className="ml-3 rounded-md border border-[#9bb8ce]/25 bg-[#9bb8ce] px-4 py-2 text-sm font-semibold text-[#17212b] transition-colors hover:bg-[#b2c7d8]"
          >
            Bog&apos;lanish
          </Link>
        </div>

        <button
          type="button"
          aria-label={menuOpen ? "Menyuni yopish" : "Menyuni ochish"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
          className="flex size-10 flex-col items-center justify-center gap-1.5 rounded-md border border-white/10 text-zinc-200 transition-colors hover:bg-white/[0.06] md:hidden"
        >
          <span className={`h-px w-4 bg-current transition-transform ${menuOpen ? "translate-y-[4px] rotate-45" : ""}`} />
          <span className={`h-px w-4 bg-current transition-opacity ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`h-px w-4 bg-current transition-transform ${menuOpen ? "-translate-y-[6px] -rotate-45" : ""}`} />
        </button>
      </div>

      {menuOpen && (
        <div id="mobile-navigation" className="border-t border-white/[0.06] px-5 pt-2 md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="border-b border-white/[0.06] py-3.5 text-sm text-slate-300 transition-colors hover:text-[#b2c7d8]"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="https://t.me/Nomoz1vicc?text=Salom"
              onClick={() => setMenuOpen(false)}
              className="mt-4 rounded-md bg-[#9bb8ce] px-4 py-3 text-center text-sm font-semibold text-[#17212b] transition-colors hover:bg-[#b2c7d8]"
            >
              Bog&apos;lanish
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
