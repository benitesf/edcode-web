import { Badge } from "./Badge"
import type { Project } from "@/data/projects"

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article
      className="border-2 border-black bg-white p-5 flex flex-col gap-4 hover:-translate-y-0.5 hover:-translate-x-0.5 transition-transform"
      style={{ boxShadow: "var(--shadow)" }}
    >
      <header className="flex items-start justify-between gap-4">
        <h3 className="text-base font-black text-black leading-snug">{project.title}</h3>
      </header>

      <p className="text-sm text-[var(--text-muted)] leading-relaxed flex-1">{project.description}</p>

      <footer className="flex flex-col gap-3">
        <div className="flex flex-wrap gap-1.5">
          {project.techs.map((tech) => (
            <Badge key={tech} label={tech} />
          ))}
        </div>

        <div className="flex gap-2">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center text-xs font-bold border-2 border-black px-3 py-2 hover:bg-black hover:text-white transition-colors"
            >
              GitHub
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center text-xs font-bold border-2 border-black bg-[#ff90e8] px-3 py-2 hover:bg-black hover:text-white transition-colors"
            >
              Demo →
            </a>
          )}
        </div>
      </footer>
    </article>
  )
}
