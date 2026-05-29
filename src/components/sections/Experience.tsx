import { experiences } from "@/data/experience"
import { Badge } from "@/components/ui/Badge"
import { SectionTitle } from "@/components/ui/SectionTitle"

export function Experience() {
  return (
    <section id="experience" className="px-6 py-24 bg-[var(--bg-soft)]">
      <div className="max-w-5xl mx-auto">
        <SectionTitle title="Experience" subtitle="Historial profesional" />

        <div className="flex flex-col gap-5">
          {experiences.map((exp, i) => (
            <div
              key={i}
              className="border-2 border-black bg-white p-6"
              style={{ boxShadow: "var(--shadow)" }}
            >
              <div className="flex flex-wrap items-baseline gap-2 mb-1">
                <h3 className="text-base font-black text-black">{exp.role}</h3>
                <span className="text-sm font-bold text-[#ff90e8] border-b-2 border-[#ff90e8]">
                  @ {exp.company}
                </span>
                <span className="text-xs font-mono text-[var(--text-muted)] ml-auto">
                  {exp.period}
                </span>
              </div>

              <p className="text-sm text-[var(--text-muted)] leading-relaxed mt-3 mb-4">
                {exp.description}
              </p>

              {exp.techs && (
                <div className="flex flex-wrap gap-2">
                  {exp.techs.map((tech) => (
                    <Badge key={tech} label={tech} />
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
