import { projects } from "@/data/projects"
import { ProjectCard } from "@/components/ui/ProjectCard"
import { SectionTitle } from "@/components/ui/SectionTitle"

export function Projects() {
  return (
    <section id="projects" className="px-6 py-24 bg-[var(--bg)]">
      <div className="max-w-5xl mx-auto">
        <SectionTitle
          title="Projects"
          subtitle="Cosas que construí y de las que estoy orgulloso"
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
