export type SkillCategory = {
  category: string
  items: string[]
}

export const skills: SkillCategory[] = [
  {
    category: "Languages",
    items: ["Python", "SQL", "TypeScript", "JavaScript"],
  },
  {
    category: "Frontend",
    items: ["React", "Next.js", "Tailwind CSS", "HTML", "CSS"],
  },
  {
    category: "Backend",
    items: ["Node.js", "FastAPI", "Django", "REST APIs"],
  },
  {
    category: "Tools & Infra",
    items: ["Git", "Docker", "GitHub Actions", "Vercel", "PostgreSQL"],
  },
]
