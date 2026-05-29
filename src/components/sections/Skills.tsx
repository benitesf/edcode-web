import { skills } from "@/data/skills"
import { SectionTitle } from "@/components/ui/SectionTitle"

export function Skills() {
  return (
    <section id="skills" className="px-6 py-24 bg-[var(--bg)]">
      <div className="max-w-5xl mx-auto">
        <SectionTitle title="Skills" subtitle="Tecnologías y herramientas que uso" />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((group) => (
            <div
              key={group.category}
              className="border-2 border-black bg-white p-5"
              style={{ boxShadow: "var(--shadow)" }}
            >
              <h3 className="text-xs font-black tracking-widest uppercase mb-4 pb-2 border-b-2 border-black">
                {group.category}
              </h3>
              <ul className="flex flex-col gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="text-sm font-semibold text-black flex items-center gap-2 before:content-['→'] before:text-[#ff90e8] before:font-black"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
