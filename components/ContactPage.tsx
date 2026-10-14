import {
  ArrowUpRight,
  Mail,
  MapPin,
  MessageCircle,
  Send,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";

export default function ContactPage() {
  return (
    <section id="contact" className="border-t border-white/[0.07] bg-[#131c25] text-[#e2e8ed]">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 sm:px-8 md:grid-cols-[0.9fr_1.1fr] md:items-center md:gap-20 md:py-28">
        <div>
          <p className="font-mono text-xs tracking-[0.18em] text-slate-400">
            <span className="mr-4 text-[#9bb8ce]">05</span>/ ALOQA
          </p>
          <p className="mt-10 flex items-center gap-3 font-mono text-[10px] tracking-[0.15em] text-slate-300">
            <span className="size-2 rounded-full bg-emerald-300 shadow-[0_0_12px_#6ee7b7]" />
            YANGI IMKONIYATLARGA OCHIQMAN
          </p>
          <h2 className="mt-8 text-5xl font-light leading-[1.05] sm:text-6xl lg:text-7xl">
            Birga
            <span className="block bg-gradient-to-r from-[#b6c9d8] via-[#9fb8cc] to-[#8eaac1] bg-clip-text pb-2 text-transparent">
              yarataylik.
            </span>
          </h2>
          <p className="mt-5 max-w-md text-sm leading-7 text-slate-400 sm:text-base">
            Jamoangizga frontend dasturchi kerakmi yoki loyihangiz haqida
            suhbatlashmoqchimisiz? Telegram orqali bog&apos;laning.
          </p>
          <a
            href="https://t.me/Nomoz1vicc"
            target="_blank"
            rel="noreferrer"
            className="mt-7 inline-flex items-center gap-3 rounded-md bg-[#9bb8ce] px-5 py-3.5 text-sm font-semibold text-[#17212b] transition-colors hover:bg-[#b2c7d8]"
          >
            <Send size={17} aria-hidden="true" /> Telegram orqali yozish
            <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </div>

        <div>
          <div className="space-y-3">
            <a
              href="mailto:jurayev088@icloud.com"
              className="group flex items-center gap-4 rounded-xl border border-white/[0.08] bg-[#19232d] p-4 transition-colors hover:border-[#9bb8ce]/25 sm:p-5"
            >
              <span className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-[#9bb8ce]/[0.08] text-[#b6c9d8]">
                <Mail size={21} aria-hidden="true" />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block font-mono text-[10px] tracking-[0.16em] text-slate-500">EMAIL</span>
                <span className="mt-2 block break-all text-sm font-medium text-slate-100">jurayev088@icloud.com</span>
              </span>
              <ArrowUpRight size={18} className="shrink-0 text-slate-500 transition-colors group-hover:text-[#b6c9d8]" aria-hidden="true" />
            </a>

            <a
              href="tel:+998931055475"
              className="group flex items-center gap-4 rounded-xl border border-white/[0.08] bg-[#19232d] p-4 transition-colors hover:border-[#9bb8ce]/25 sm:p-5"
            >
              <span className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-[#9bb8ce]/[0.08] text-[#b6c9d8]">
                <MessageCircle size={21} aria-hidden="true" />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block font-mono text-[10px] tracking-[0.16em] text-slate-500">TELEFON</span>
                <span className="mt-2 block text-sm font-medium text-slate-100">+998 93 105 54 75</span>
              </span>
              <ArrowUpRight size={18} className="shrink-0 text-slate-500 transition-colors group-hover:text-[#b6c9d8]" aria-hidden="true" />
            </a>

            <a
              href="https://t.me/Nomoz1vicc"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-4 rounded-xl border border-white/[0.08] bg-[#19232d] p-4 transition-colors hover:border-[#9bb8ce]/25 sm:p-5"
            >
              <span className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-[#9bb8ce]/[0.08] text-[#b6c9d8]">
                <Send size={21} aria-hidden="true" />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block font-mono text-[10px] tracking-[0.16em] text-slate-500">TELEGRAM</span>
                <span className="mt-2 block text-sm font-medium text-slate-100">@Nomoz1vicc</span>
              </span>
              <ArrowUpRight size={18} className="shrink-0 text-slate-500 transition-colors group-hover:text-[#b6c9d8]" aria-hidden="true" />
            </a>

            <div className="flex items-center gap-4 rounded-xl border border-white/[0.08] bg-[#19232d] p-4 sm:p-5">
              <span className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-[#9bb8ce]/[0.08] text-[#b6c9d8]">
                <MapPin size={21} aria-hidden="true" />
              </span>
              <span>
                <span className="block font-mono text-[10px] tracking-[0.16em] text-slate-500">JOYLASHUV</span>
                <span className="mt-2 block text-sm font-medium text-slate-100">Toshkent viloyati, Olmaliq shahri</span>
              </span>
            </div>
          </div>

          <a
            href="https://github.com/jurayev088-afk"
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex items-center gap-2 rounded-md border border-white/[0.08] px-4 py-3 text-sm text-slate-300 transition-colors hover:border-[#9bb8ce]/25 hover:text-white"
          >
            <FaGithub size={17} aria-hidden="true" /> GitHub
            <ArrowUpRight size={14} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
