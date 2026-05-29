import { SectionTitle } from "@/components/ui/SectionTitle"

const LINKS = [
  {
    label: "GitHub",
    href: "https://github.com/benitesf",
    description: "github.com/benitesf",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/edsonbf",
    description: "linkedin.com/in/edsonbf",
  },
  {
    label: "Email",
    href: "mailto:benites.ee@gmail.com",
    description: "benites.ee@gmail.com",
  },
]

export function Contact() {
  return (
    <section id="contact" className="px-6 py-24 bg-[var(--bg-soft)]">
      <div className="max-w-5xl mx-auto">
        <SectionTitle title="Contact" subtitle="Siempre abierto a nuevas oportunidades" />

        <p className="text-[var(--text-muted)] max-w-md mb-12 leading-relaxed font-medium">
          ¿Tienes un proyecto en mente o simplemente quieres conectar? Escríbeme,
          respondo rápido.
        </p>

        <div className="flex flex-col gap-4 max-w-md">
          {LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="group flex items-center justify-between border-2 border-black bg-white p-5 hover:bg-[#ff90e8] transition-colors"
              style={{ boxShadow: "var(--shadow)" }}
            >
              <div>
                <p className="font-black text-sm text-black">{link.label}</p>
                <p className="text-xs text-[var(--text-muted)] mt-0.5 font-mono group-hover:text-black transition-colors">
                  {link.description}
                </p>
              </div>
              <span className="font-black text-black text-lg">→</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
