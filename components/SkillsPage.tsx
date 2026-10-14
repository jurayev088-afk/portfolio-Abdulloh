
import { Check, Code2, Database, Palette, Wrench } from "lucide-react";

const skillGroups = [
  {
    title: "Frontend",
    description: "Interaktiv web interfeyslar",
    icon: Code2,
    skills: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React.js", "Next.js"],
  },
  {
    title: "UI & Styling",
    description: "Responsive va zamonaviy dizayn",
    icon: Palette,
    skills: ["Tailwind CSS", "CSS Modules", "Responsive UI", "Ant Design"],
  },
  {
    title: "Data & State",
    description: "API va ma'lumotlar bilan ishlash",
    icon: Database,
    skills: ["REST API", "Axios", "TanStack Query", "React Hooks"],
  },
  {
    title: "Tools",
    description: "Kundalik dasturlash vositalari",
    icon: Wrench,
    skills: ["Git", "GitHub", "Vite", "npm", "VS Code"],
  },
];

export default function SkillsPage() {
  return (
    <section id="skills" className="border-t border-white/[0.07] bg-[#111922] text-[#e2e8ed]">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-28">
        <div className="flex flex-wrap items-end justify-between gap-5">
          <div>
            <p className="font-mono text-xs tracking-[0.18em] text-slate-400">
              <span className="mr-4 text-[#9bb8ce]">02</span>/ KO&apos;NIKMALAR
            </p>
            <h2 className="mt-6 text-4xl font-bold leading-tight sm:text-5xl">
              Ishlatadigan <span className="bg-gradient-to-r from-[#b6c9d8] via-[#9fb8cc] to-[#8eaac1] bg-clip-text text-transparent">texnologiyalar.</span>
            </h2>
            <p className="mt-4 text-sm text-slate-400 sm:text-base">
              Loyihalarimda foydalanadigan asosiy vositalar va texnologiyalar.
            </p>
          </div>
          <p className="mb-1 inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.16em] text-slate-500">
            <Code2 size={15} className="text-[#a9c2d5]" aria-hidden="true" /> MY TOOLKIT
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {skillGroups.map((group, groupIndex) => {
            const Icon = group.icon;

            return (
              <article
                key={group.title}
                className="rounded-xl border border-white/[0.08] bg-[#19232d] p-5 transition-colors hover:border-[#9bb8ce]/25 sm:p-5"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] tracking-[0.12em] text-slate-500">
                    0{groupIndex + 1} / 04
                  </span>
                  <span className="flex size-9 items-center justify-center rounded-lg bg-[#9bb8ce]/[0.08] text-[#a9c2d5]">
                    <Icon size={18} aria-hidden="true" />
                  </span>
                </div>
                <h3 className="mt-5 text-lg font-medium text-slate-100">{group.title}</h3>
                <p className="mt-1 text-xs text-slate-500">{group.description}</p>

                <ul className="mt-5 space-y-2">
                  {group.skills.map((skill) => (
                    <li
                      key={skill}
                      className="flex min-h-10 items-center gap-3 rounded-md bg-[#151e27] px-2.5 py-2 text-xs text-slate-300"
                    >
                      <span className="flex size-6 shrink-0 items-center justify-center rounded border border-[#9bb8ce]/15 font-mono text-[8px] font-semibold text-[#b6c9d8]">
                        {skill.slice(0, 2).toUpperCase()}
                      </span>
                      <span className="min-w-0 flex-1">{skill}</span>
                      <Check size={14} className="shrink-0 text-slate-500" aria-hidden="true" />
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
