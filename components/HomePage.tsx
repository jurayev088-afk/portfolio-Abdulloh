import { ArrowDown, ArrowUpRight, Send } from "lucide-react";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

const technologies = [
  "HTML5",
  "CSS3",
  "SASS",
  "BOOTSTRAP",
  "JAVASCRIPT(ES6+)",
  "TYPESCRIPT",
  "REACT.JS",
  "REACT HOOKS",
  "NEXT.JS",
  "TAILWIND CSS",
  "ANT DESIGN",
  "TANSTACK QUERY",
  "REST API",
  "GIT & GITHUB",
  "META DATA",
  "RESPONSIVE DESIGN",
];

export default function HomePage() {
  return (
    <section id="home" className="overflow-hidden bg-[#151e27] text-[#e2e8ed]">
      <div className="mx-auto grid min-h-[calc(100svh-7.5rem)] max-w-6xl items-center gap-8 px-5 py-10 sm:px-8 sm:py-12 min-[900px]:grid-cols-2 lg:gap-16 lg:py-20">
        <div className="relative z-10">
          <p className="flex items-center gap-3 text-xs mt-10 font-medium tracking-[0.18em] text-[#b4c3cf]">
            <span className="size-2 rounded-full bg-[#9bb8ce]" />
            JUNIOR FRONTEND DEVELOPER
          </p>
          <h1 className="mt-8 text-5xl font-bold leading-[0.98] sm:text-6xl lg:text-7xl xl:text-8xl">
            Abdulloh
            <span className="block bg-linear-to-r from-[#b6c9d8] via-[#9fb8cc] to-[#8eaac1] bg-clip-text pb-2 text-transparent">
              Jo&apos;rayev.
            </span>
          </h1>
          <p className="mt-5 text-lg font-semibold text-slate-100">
            Frontend Developer <span className="text-[#a9c2d5]">/</span>
          </p>
          <p className="mt-5 max-w-lg text-sm leading-7 text-slate-300 sm:text-base">
            React, TypeScript va Next.js yordamida zamonaviy, moslashuvchan va
            foydalanish qulay bo&apos;lgan web-sahifalar yarataman.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="#projects"
              className="inline-flex items-center gap-2 rounded-md bg-[#9bb8ce] px-5 py-3 text-sm font-semibold text-[#17212b] transition-colors hover:bg-[#b2c7d8]"
            >
              Loyihalarimni ko&apos;rish{" "}
              <span>
                <ArrowUpRight size={18} />
              </span>
            </Link>
            <Link
              href="https://t.me/Nomoz1vicc?text=Salom"
              target="_blank"
              className="rounded-md border flex gap-2 items-center border-white/12 px-5 py-3 text-sm font-medium text-slate-300 transition-colors hover:border-[#9bb8ce]/40 hover:text-[#b6c9d8]"
            >
              <span>
                <Send size={16} />
              </span>
              Men bilan bog&apos;lanish
            </Link>
          </div>
          <div className="mt-7 flex items-center gap-5 text-xs text-slate-400">
            <a
              href="https://github.com/jurayev088-afk"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 transition-colors hover:text-[#b6c9d8]"
            >
              <FaGithub size={16} aria-hidden="true" /> GitHub
            </a>
            <a
              href="https://t.me/Nomoz1vicc"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 transition-colors hover:text-[#b6c9d8]"
            >
              <Send size={15} aria-hidden="true" /> Telegram
            </a>
          </div>
          <a
            href="#about"
            className="mt-8 inline-flex items-center gap-3 text-[10px] tracking-[0.2em] text-slate-500 transition-colors hover:text-[#b6c9d8]"
          >
            <span className="h-px w-8 bg-slate-500" />
            <span aria-hidden="true">
              <ArrowDown size={17} />
            </span>{" "}
            KO&apos;PROQ KO&apos;RISH
          </a>
        </div>

        <div className="relative mx-auto flex min-h-[340px] w-full max-w-[520px] items-center justify-center sm:min-h-[420px]">
          <div className="absolute h-64 w-64 rounded-full border border-[#9bb8ce]/[0.08] sm:h-80 sm:w-80" />
          <div className="absolute h-52 w-52 rounded-full border border-[#9bb8ce]/[0.06] sm:h-64 sm:w-64" />

          <div className="relative w-[min(100%,360px)] rounded-xl border border-white/[0.09] bg-[#111922]/95 shadow-[0_24px_90px_rgba(3,12,24,0.28)] sm:rotate-[-3deg]">
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
              <div className="flex gap-1.5" aria-hidden="true">
                <span className="size-2 rounded-full bg-rose-400" />
                <span className="size-2 rounded-full bg-amber-300" />
                <span className="size-2 rounded-full bg-emerald-300" />
              </div>
              <span className="font-mono text-[10px] text-slate-500">
                portfolio.tsx
              </span>
            </div>
            <div className="space-y-2.5 px-4 py-5 font-mono text-[11px] leading-5 sm:px-6 sm:py-6 sm:text-xs">
              <p>
                <span className="mr-4 text-slate-600">01</span>
                <span className="text-blue-300">const</span> developer = {"{"}
              </p>
              <p>
                <span className="mr-4 text-slate-600">02</span>
                <span className="pl-3 text-slate-400">name:</span>{" "}
                <span className="text-emerald-200">&quot;Abdulloh&quot;</span>,
              </p>
              <p>
                <span className="mr-4 text-slate-600">03</span>
                <span className="pl-3 text-slate-400">role:</span>{" "}
                <span className="text-emerald-200">
                  &quot;Frontend Dev&quot;
                </span>
                ,
              </p>
              <p>
                <span className="mr-4 text-slate-600">04</span>
                <span className="pl-3 text-slate-400">skills:</span> [
              </p>
              <p>
                <span className="mr-4 text-slate-600">05</span>
                <span className="pl-6 text-amber-200">&quot;React&quot;</span>,
              </p>
              <p>
                <span className="mr-4 text-slate-600">06</span>
                <span className="pl-6 text-amber-200">
                  &quot;TypeScript&quot;
                </span>
                ,
              </p>
              <p>
                <span className="mr-4 text-slate-600">07</span>
                <span className="pl-6 text-amber-200">&quot;Next.js&quot;</span>
              </p>
              <p>
                <span className="mr-4 text-slate-600">08</span>
                <span className="pl-3">],</span>
              </p>
              <p>
                <span className="mr-4 text-slate-600">09</span>
                {"}"}
              </p>
            </div>
          </div>
          <span className="absolute left-0 top-[18%] hidden rounded-lg border border-white/[0.09] bg-[#1b2732] px-4 py-3 text-xs text-slate-300 shadow-xl min-[430px]:block sm:left-2">
            <span className="mr-2 text-[#a9c2d5]">●</span>React.js
          </span>
          <span className="absolute bottom-[18%] right-0 hidden rounded-lg border border-white/[0.09] bg-[#1b2732] px-4 py-3 text-xs text-slate-300 shadow-xl min-[430px]:block sm:right-2">
            <span className="mr-2 text-[#a9c2d5]">TS</span>TypeScript
          </span>
          <span className="absolute bottom-[5%] left-[8%] hidden rounded-lg border border-white/[0.09] bg-[#1b2732] px-4 py-3 text-xs text-slate-300 shadow-xl min-[430px]:block">
            <span className="mr-2 text-slate-100">N</span>Next.js
          </span>
        </div>
      </div>
      <div
        className="skills-marquee border-y border-white/[0.07] bg-[#111922]/80 py-4"
        aria-label="Texnologiyalar"
      >
        <div className="skills-track flex w-max">
          {[0, 1].map((copy) => (
            <ul
              key={copy}
              className="flex shrink-0 items-center gap-8 pr-8"
              aria-hidden={copy === 1}
            >
              {technologies.map((technology) => (
                <li
                  key={`${copy}-${technology}`}
                  className="flex items-center gap-3 font-mono text-[10px] tracking-[0.16em] text-slate-400 sm:text-xs"
                >
                  <span className="size-1.5 rounded-full bg-[#9bb8ce]" />
                  {technology}
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}
