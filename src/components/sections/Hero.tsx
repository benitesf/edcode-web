import Image from "next/image"

export function Hero() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center pt-14 px-6 bg-[var(--bg-soft)]"
    >
      <div className="max-w-5xl mx-auto w-full py-24 flex flex-col md:flex-row items-center gap-12">

        {/* Texto — izquierda */}
        <div className="flex-1">
          <div
            className="inline-block border-2 border-black px-3 py-1 text-xs font-bold uppercase tracking-widest mb-8 bg-[#ff90e8]"
            style={{ boxShadow: "var(--shadow-sm)" }}
          >
            Data & IA / Engineer
          </div>

          <h1 className="text-6xl sm:text-8xl font-black tracking-tight text-black leading-none mb-6">
            Edson
            <br />
            Benites.
          </h1>

          <p className="max-w-xl text-[var(--text-muted)] text-lg leading-relaxed mb-10 font-medium">
            Construyo productos de software que llevan la IA al mundo real.
            Confiables, con arquitecturas que escalan y datos que llegan bien —
            porque hacerlo bien desde el principio siempre vale la pena.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="px-6 py-3 bg-black text-white font-bold text-sm border-2 border-black hover:bg-[#ff90e8] hover:text-black transition-colors"
              style={{ boxShadow: "var(--shadow)" }}
            >
              Ver proyectos →
            </a>
            <a
              href="#contact"
              className="px-6 py-3 bg-[var(--bg)] text-black font-bold text-sm border-2 border-black hover:bg-[#ff90e8] transition-colors"
              style={{ boxShadow: "var(--shadow)" }}
            >
              Contacto
            </a>
          </div>
        </div>

        {/* Foto — derecha */}
        <div
          className="relative shrink-0 w-80 h-80 sm:w-96 sm:h-96 border-2 border-black overflow-hidden"
          style={{ boxShadow: "var(--shadow)" }}
        >
          <Image
            src="/foto_perfil.png"
            alt="Edson Benites"
            fill
            sizes="(min-width: 640px) 384px, 320px"
            quality={90}
            className="object-cover"
            priority
          />
        </div>

      </div>
    </section>
  )
}
