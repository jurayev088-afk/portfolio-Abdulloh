import { ArrowUpRight, CheckCircle2, Code2, GraduationCap } from "lucide-react";

export default function AboutPage() {
  return (
    <section id="about" className="border-t border-white/[0.07] bg-[#131c25] text-[#e2e8ed]">
      <div className="mx-auto grid max-w-6xl gap-14 px-5 py-24 sm:px-8 md:grid-cols-[1.15fr_0.85fr] md:items-center md:gap-20 md:py-32">
        <div>
          <p className="font-mono text-xs tracking-[0.18em] text-slate-400">
            <span className="mr-4 text-[#9bb8ce]">01</span>/ MEN HAQIMDA
          </p>
          <h2 className="mt-12 max-w-2xl text-4xl font-bold leading-[1.08] sm:text-5xl lg:text-6xl">
            G&apos;oyalarni
            <span className="block bg-gradient-to-r from-[#b6c9d8] via-[#9fb8cc] to-[#8eaac1] bg-clip-text text-transparent">
              real loyihalarga
            </span>
            aylantiraman.
          </h2>
          <p className="mt-8 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
            Men Abdulloh Jo&apos;rayev, Junior Frontend Developerman. React.js,
            TypeScript, Next.js va Tailwind CSS yordamida zamonaviy web
            interfeyslar yaratishga qiziqaman.
          </p>
          <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
            Amaliy loyihalarda responsive dizayn, qulay foydalanish va tartibli
            kodga e&apos;tibor beraman. Yangi bilimlarni o&apos;rganib, ularni
            loyihalarda qo&apos;llash orqali rivojlanishda davom etaman.
          </p>
          <a
            href="#projects"
            className="mt-8 inline-flex items-center gap-3 text-sm font-semibold text-[#b6c9d8] transition-colors hover:text-white"
          >
            Loyihalarim bilan tanishing <ArrowUpRight size={18} aria-hidden="true" />
          </a>
        </div>

        <div className="space-y-3">
          <div className="flex items-center gap-4 rounded-xl border border-white/[0.08] bg-[#19232d] p-4 sm:p-5">
            <span className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-[#9bb8ce]/[0.08] text-[#b6c9d8]">
              <GraduationCap size={23} aria-hidden="true" />
            </span>
            <div className="min-w-0">
              <p className="font-mono text-[10px] tracking-[0.18em] text-slate-500">TA&apos;LIM</p>
              <p className="mt-2 text-sm font-semibold text-slate-100">IT Academy — Toshkent</p>
            </div>
            <ArrowUpRight className="ml-auto shrink-0 text-slate-500" size={18} aria-hidden="true" />
          </div>

          <div className="flex items-center gap-4 rounded-xl border border-white/[0.08] bg-[#19232d] p-4 sm:p-5">
            <span className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-[#9bb8ce]/[0.08] text-[#b6c9d8]">
              <Code2 size={22} aria-hidden="true" />
            </span>
            <div className="min-w-0">
              <p className="font-mono text-[10px] tracking-[0.18em] text-slate-500">ASOSIY YO&apos;NALISH</p>
              <p className="mt-2 text-sm font-semibold text-slate-100">Frontend Development</p>
            </div>
            <ArrowUpRight className="ml-auto shrink-0 text-slate-500" size={18} aria-hidden="true" />
          </div>

          <div className="flex items-center gap-4 rounded-xl border border-white/[0.08] bg-[#19232d] p-4 sm:p-5">
            <span className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-[#9bb8ce]/[0.08] text-[#b6c9d8]">
              <Code2 size={22} aria-hidden="true" />
            </span>
            <div className="min-w-0">
              <p className="font-mono text-[10px] tracking-[0.18em] text-slate-500">TEXNOLOGIYALAR</p>
              <p className="mt-2 text-sm font-semibold text-slate-100">React · TypeScript · Next.js</p>
            </div>
            <ArrowUpRight className="ml-auto shrink-0 text-slate-500" size={18} aria-hidden="true" />
          </div>

          <div className="flex items-start gap-3 px-2 pt-5">
            <CheckCircle2 className="mt-0.5 shrink-0 text-teal-300" size={20} aria-hidden="true" />
            <div>
              <p className="text-sm font-semibold text-slate-100">Rivojlanishga tayyorman.</p>
              <p className="mt-1 text-sm leading-6 text-slate-400">
                Yangi loyihalar va jamoaviy ishlash imkoniyatlariga ochiqman.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
