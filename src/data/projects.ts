export type Project = {
  title: string
  description: string
  techs: string[]
  github?: string
  demo?: string
  featured?: boolean
}

export const projects: Project[] = [
  {
    title: "EDCODE Web",
    description: "Portfolio personal construido con Next.js 16, Tailwind CSS v4 y TypeScript. Diseño Gumroad Dark.",
    techs: ["Next.js", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/edsonbenitesf/edcode-web",
    featured: true,
  },
  {
    title: "Proyecto 2",
    description: "Descripción de tu segundo proyecto. Qué problema resuelve, qué tecnologías usa.",
    techs: ["React", "Node.js", "PostgreSQL"],
    github: "https://github.com/edsonbenitesf",
    demo: "https://demo.example.com",
    featured: true,
  },
  {
    title: "Proyecto 3",
    description: "Descripción de tu tercer proyecto. Qué aprendiste construyéndolo.",
    techs: ["Python", "FastAPI", "Docker"],
    github: "https://github.com/edsonbenitesf",
  },
]
