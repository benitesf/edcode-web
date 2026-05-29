"use client"

import { useState, useEffect } from "react"

const NAV_LINKS = [
  { label: "About", href: "#about", id: "about" },
  { label: "Projects", href: "#projects", id: "projects" },
  { label: "Experience", href: "#experience", id: "experience" },
  { label: "Skills", href: "#skills", id: "skills" },
]

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("about")

  useEffect(() => {
    const observers: IntersectionObserver[] = []

    NAV_LINKS.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (!el) return

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id)
        },
        { rootMargin: "-40% 0px -55% 0px" }
      )
      observer.observe(el)
      observers.push(observer)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-black/10">
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between gap-8">

        {/* Logo — estilo Gumroad: grande, black weight, uppercase */}
        <a
          href="#about"
          className="text-3xl font-black uppercase tracking-tight text-black leading-none shrink-0"
          style={{ fontFamily: "var(--font-geist-sans)" }}
        >
          EDCODE
        </a>

        {/* Desktop nav links + CTA — alineados a la derecha */}
        <div className="hidden md:flex items-center gap-1 ml-auto">
          {/* Links con pill activo */}
          <ul className="flex items-center gap-1">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.id
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-colors ${
                      isActive
                        ? "bg-black text-white"
                        : "text-black hover:bg-black/5"
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              )
            })}
          </ul>

          {/* Right side: separator + CTA */}
          <div className="flex items-center ml-2">
            <span className="w-px h-6 bg-black/20 mr-4" />
            <a
              href="#contact"
              className="px-6 py-3 bg-black text-white text-sm font-black hover:bg-[#ff90e8] hover:text-black transition-colors"
            >
              Contact
            </a>
          </div>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1 ml-auto"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <span className={`block h-0.5 w-5 bg-black transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block h-0.5 w-5 bg-black transition-all ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-5 bg-black transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-black/10 bg-white px-6 py-4">
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.id
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={`block px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
                      isActive ? "bg-black text-white" : "text-black hover:bg-black/5"
                    }`}
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              )
            })}
            <li className="mt-3 pt-3 border-t border-black/10">
              <a
                href="#contact"
                className="block text-center px-4 py-2 bg-black text-white text-sm font-bold"
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
