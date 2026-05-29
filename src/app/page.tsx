import { Hero } from "@/components/sections/Hero"
import { Projects } from "@/components/sections/Projects"
import { Experience } from "@/components/sections/Experience"
import { Skills } from "@/components/sections/Skills"
import { Contact } from "@/components/sections/Contact"
import { Navbar } from "@/components/layout/Navbar"

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <footer className="border-t-2 border-black px-6 py-8 text-center bg-[var(--bg)]">
        <p className="text-xs text-[var(--text-muted)] font-mono font-bold">
          © {new Date().getFullYear()} Edson Benites — Built with Next.js & Tailwind
        </p>
      </footer>
    </>
  )
}
