import { ArrowUpRight, Check } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import bizdaIcon from "../public/bizdaIcon.png";
import oxbridgeIcon from "../public/oxbridge.png";
import Image from "next/image";

const projects = [
  {
    number: "01",
    icon:bizdaIcon,
    name: "Bizda CRM Panel",
    category: "ADMIN PLATFORM",
    description:
      "CRM loyiha. Kod va loyiha tafsilotlarini GitHub repozitoriyasida ko'ring.",
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "TanStack Query",
      "Ant Desgin",
    ],
    href: "https://github.com/jurayev088-afk/bizda.crm",
    accent: "violet",
  },
  {
    number: "02",
    icon:oxbridgeIcon,
    name: "Oxbridge",
    category: "EDUCATION CRM",
    description:
      "Ta'lim yo'nalishidagi CRM platformasi. Kod va loyiha tafsilotlari GitHub'da.",
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "TanStack Query",
      "Ant Desgin",
    ],
    href: "https://github.com/jurayev088-afk/Oxbridge",
    accent: "teal",
  },
];

function ProjectPreview({ accent }: { accent: string }) {
  const isTeal = accent === "teal";

  return (
    <div className="grid h-48 grid-cols-[72px_1fr] overflow-hidden rounded-md border border-slate-200 bg-slate-50 sm:h-56 sm:grid-cols-[94px_1fr]">
      <div className="space-y-3 border-r border-slate-200 bg-white p-3 sm:p-4">
        <div
          className={`size-5 rounded ${isTeal ? "bg-teal-500" : "bg-violet-500"}`}
        />
        <div className="h-1.5 w-full rounded bg-slate-200" />
        <div
          className={`h-1.5 w-full rounded ${isTeal ? "bg-teal-200" : "bg-violet-200"}`}
        />
        <div className="h-1.5 w-4/5 rounded bg-slate-200" />
        <div className="h-1.5 w-full rounded bg-slate-200" />
        <div className="h-1.5 w-3/5 rounded bg-slate-200" />
      </div>
      <div className="p-3 sm:p-4">
        <div className="flex items-start justify-between">
          <div>
            <div className="text-[7px] font-medium tracking-[0.16em] text-slate-400">
              DASHBOARD / OVERVIEW
            </div>
            <div className="mt-1 text-[10px] font-semibold text-slate-700">
              Project overview
            </div>
          </div>
          <div
            className={`size-5 rounded-full ${isTeal ? "bg-teal-100" : "bg-violet-100"}`}
          />
        </div>
        <div className="mt-3 grid grid-cols-3 gap-2">
          {["Projects", "Activity", "Tasks"].map((label, index) => (
            <div
              key={label}
              className="rounded border border-slate-200 bg-white p-2"
            >
              <div className="text-[6px] text-slate-400">{label}</div>
              <div className="mt-1 text-[9px] font-semibold text-slate-700">
                {["128", "36", "12"][index]}
              </div>
              <div
                className={`mt-2 h-1 w-2/3 rounded ${isTeal ? "bg-teal-300" : "bg-violet-300"}`}
              />
            </div>
          ))}
        </div>
        <div className="mt-2 rounded border border-slate-200 bg-white p-2">
          <div className="text-[6px] text-slate-400">Recent activity</div>
          <div className="mt-3 flex h-12 items-end gap-1">
            {[35, 58, 42, 76, 50, 88, 61, 78, 47, 68, 82, 59].map(
              (height, index) => (
                <span
                  key={index}
                  style={{ height: `${height}%` }}
                  className={`flex-1 rounded-t-sm ${isTeal ? "bg-teal-300" : "bg-violet-300"}`}
                />
              ),
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ProjectsPage() {
  return (
    <section
      id="projects"
      className="border-t border-white/[0.07] bg-[#111922] text-[#e2e8ed]"
    >
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-28">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="font-mono text-xs tracking-[0.18em] text-slate-400">
              <span className="mr-4 text-[#9bb8ce]">03</span>/ TANLANGAN LOYIHALAR
            </p>
            <h2 className="mt-6 text-4xl font-bold sm:text-5xl">
              Amaliy ishlar<span className="text-[#a9c2d5]">.</span>
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-6 text-slate-400 sm:text-base">
              O&apos;rgangan bilimlarimni real loyihalarda qo&apos;llash orqali
              shakllantirgan tajribam.
            </p>
          </div>
          <a
            href="https://github.com/jurayev088-afk?tab=repositories"
            target="_blank"
            rel="noreferrer"
            className="mb-1 inline-flex items-center gap-2 text-xs font-medium tracking-[0.12em] text-slate-400 transition-colors hover:text-[#b6c9d8]"
          >
            <FaGithub size={16} aria-hidden="true" /> BARCHA REPOSITORYLAR
            <ArrowUpRight size={15} aria-hidden="true" />
          </a>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.number}
              className="overflow-hidden rounded-xl border border-white/[0.08] bg-[#19232d] transition-colors hover:border-[#9bb8ce]/25"
            >
              <div className="border-b border-white/10 p-4 sm:p-5">
                <div className="mb-4 flex items-center justify-between font-mono text-[9px] tracking-[0.14em] text-slate-500">
                  <span>PROJECT / {project.number}</span>
                  <span className="inline-flex items-center gap-2 text-emerald-300">
                    <Check size={12} /> COMPLETED
                  </span>
                </div>
                <a
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${project.name} GitHub repository`}
                  className="group relative block overflow-hidden rounded-md focus-visible:outline-2 focus-visible:outline-sky-300"
                >
                  <Image src={project.icon} alt="" />
                  <span className="absolute bottom-3 right-3 flex size-9 items-center justify-center rounded-md bg-sky-400 text-white shadow-lg transition-transform group-hover:-translate-y-1 group-hover:translate-x-1">
                    <ArrowUpRight size={20} aria-hidden="true" />
                  </span>
                </a>
              </div>

              <div className="p-5 sm:p-6">
                <div className="flex items-center justify-between font-mono text-[9px] tracking-[0.14em] text-slate-500">
                  <span>{project.category}</span>
                  <span>{project.number}</span>
                </div>
                <h3 className="mt-3 text-xl font-semibold text-slate-100">
                  {project.name}
                </h3>
                <p className="mt-3 min-h-12 text-sm leading-6 text-slate-400">
                  {project.description}
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <li
                      key={technology}
                      className="rounded border border-white/10 px-2.5 py-1.5 text-[10px] text-slate-300"
                    >
                      {technology}
                    </li>
                  ))}
                </ul>
                <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4">
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-xs text-slate-400 transition-colors hover:text-white"
                  >
                    <FaGithub size={15} aria-hidden="true" /> GitHub repository{" "}
                    <ArrowUpRight size={13} aria-hidden="true" />
                  </a>
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#b6c9d8] transition-colors hover:text-white"
                  >
                    Batafsil <ArrowUpRight size={16} aria-hidden="true" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-5 flex items-start gap-3 rounded-lg border border-[#9bb8ce]/10 bg-[#9bb8ce]/[0.035] px-4 py-4 text-xs leading-5 text-slate-400">
          <span className="mt-0.5 text-[#a9c2d5]">✳</span>
          <p>
            Loyihalar bilan tanishish uchun kartani yoki GitHub havolasini
            bosing.
          </p>
        </div>
      </div>
    </section>
  );
}
