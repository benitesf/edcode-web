import Image from "next/image"
import {
  business,
  channels,
  cta,
  hnr,
  live,
  profile,
  projects,
  socials,
} from "@/data/profile"

const eyebrow = "font-mono text-[13px] font-medium uppercase tracking-[0.08em]"

export default function Home() {
  return (
    <main className="mx-auto flex max-w-[480px] flex-col gap-12 px-5 pb-8 pt-6">
      <header className="flex flex-col gap-[18px]">
        <div className="flex items-center justify-between gap-3">
          <Image
            src="/foto_perfil.png"
            alt={`Foto de ${profile.name}`}
            width={64}
            height={64}
            priority
            className="size-16 flex-none rounded-full border border-line-strong object-cover"
          />
          <a
            href={live.href}
            className="flex min-h-11 items-center gap-2.5 rounded-full border border-line-hover px-4 text-sm font-semibold"
          >
            <span
              aria-hidden
              className="pulse-dot size-2 flex-none rounded-full bg-accent"
            />
            {live.label}
          </a>
        </div>
        <h1 className="text-[46px] font-semibold leading-none tracking-[-0.04em]">
          {profile.name}
        </h1>
        <p className="text-[19px] leading-[1.4] text-muted text-pretty">
          {profile.tagline} Fundador de{" "}
          <span className="text-foreground">{profile.company}</span>.
        </p>
      </header>

      <nav
        aria-label="Acciones principales"
        className="-mt-4 flex flex-col gap-2.5"
      >
        <a
          href={cta.community.href}
          className="flex min-h-[58px] items-center justify-between gap-3 rounded-2xl bg-accent px-5 text-lg font-semibold tracking-[-0.01em] text-ink hover:brightness-105"
        >
          <span>{cta.community.label}</span>
          <span className="font-mono text-[13px] font-medium">
            {cta.community.via} ↗
          </span>
        </a>
        <div className="grid grid-cols-2 gap-2.5">
          {[cta.discord, cta.contact].map((c) => (
            <a
              key={c.label}
              href={c.href}
              className="flex min-h-[52px] items-center justify-center rounded-2xl border border-line-strong bg-surface-2 text-base font-medium hover:bg-[#1d1d20]"
            >
              {c.label}
            </a>
          ))}
        </div>
      </nav>

      <section
        aria-labelledby="hnr"
        className="flex flex-col gap-4 rounded-[22px] border border-line-strong bg-card p-6"
      >
        <div className="flex items-center justify-between">
          <span className={`${eyebrow} text-accent`}>{hnr.eyebrow}</span>
          <span className="rounded-lg bg-accent px-[9px] py-1.5 font-mono text-[13px] font-semibold text-ink">
            HNR
          </span>
        </div>
        <div className="flex items-center gap-4">
          <Image
            src={hnr.logo}
            alt=""
            width={56}
            height={56}
            className="size-14 flex-none rounded-xl bg-foreground p-1.5"
          />
          <h2
            id="hnr"
            className="text-[32px] font-semibold leading-[1.05] tracking-[-0.035em]"
          >
            {hnr.name}
          </h2>
        </div>
        <p className="text-base leading-normal text-muted text-pretty">
          {hnr.description}
        </p>
        <a
          href={hnr.cta.href}
          className="mt-1 flex min-h-[50px] items-center justify-center gap-2 rounded-[14px] border border-line-hover text-base font-medium hover:bg-[#1d1d20]"
        >
          {hnr.cta.label} ↗
        </a>
      </section>

      <section aria-labelledby="proyectos" className="flex flex-col gap-3.5">
        <div className="flex items-baseline justify-between">
          <h2 id="proyectos" className={`${eyebrow} text-muted`}>
            Proyectos
          </h2>
          <span className="font-mono text-[13px] text-dim">
            {String(projects.length).padStart(2, "0")}
          </span>
        </div>
        <div className="flex flex-col gap-2.5">
          {projects.map((p) => (
            <a
              key={p.name}
              href={p.href}
              className="flex flex-col gap-1.5 rounded-[18px] border border-line bg-surface p-[18px] hover:border-line-hover"
            >
              <div className="flex items-center justify-between gap-3">
                <span className="flex items-center gap-3 text-lg font-semibold tracking-[-0.015em]">
                  {p.logo && (
                    <Image
                      src={p.logo}
                      alt=""
                      width={724}
                      height={512}
                      className="h-11 w-auto flex-none rounded-lg bg-foreground p-1 object-contain"
                    />
                  )}
                  {p.name}
                </span>
                <span
                  className={`flex-none rounded-full border px-[9px] py-[5px] font-mono text-xs font-medium ${
                    p.highlight
                      ? "border-accent bg-accent text-ink"
                      : "border-line-hover text-[#c9c9cc]"
                  }`}
                >
                  {p.status}
                </span>
              </div>
              <span className="text-[15px] leading-[1.45] text-muted">
                {p.description}
              </span>
            </a>
          ))}
        </div>
      </section>

      <section
        id="publico"
        aria-labelledby="publico-title"
        className="flex scroll-mt-6 flex-col gap-3.5"
      >
        <h2 id="publico-title" className={`${eyebrow} text-muted`}>
          Construyendo en público
        </h2>
        <p className="text-[15px] text-muted">
          Streaming y lives mientras construyo mis productos.
        </p>
        <div className="flex flex-col border-t border-line">
          {channels.map((c) => (
            <a
              key={c.name}
              href={c.href}
              className="flex min-h-[60px] items-center justify-between gap-3 border-b border-line px-0.5 hover:bg-surface"
            >
              <span className="flex flex-col gap-0.5">
                <span className="text-[17px] font-medium">{c.name}</span>
                <span className="text-sm text-dim">{c.what}</span>
              </span>
              <span className="font-mono text-[13px] text-muted">↗</span>
            </a>
          ))}
        </div>
      </section>

      <section
        aria-labelledby="empresas"
        className="flex flex-col gap-3.5 rounded-[22px] bg-foreground p-6 text-ink"
      >
        <h2 id="empresas" className={`${eyebrow} text-[#4a4a4f]`}>
          Trabajemos juntos
        </h2>
        <p className="text-[26px] font-semibold leading-[1.15] tracking-[-0.03em] text-pretty">
          {business.title}
        </p>
        <p className="text-base leading-normal text-[#3d3d42]">
          {business.description}
        </p>
        <a
          href={business.cta.href}
          className="mt-1.5 flex min-h-[52px] items-center justify-center rounded-[14px] bg-ink text-base font-semibold text-foreground hover:bg-[#222225]"
        >
          {business.cta.label}
        </a>
      </section>

      <footer className="flex flex-col gap-4 border-t border-line pt-5">
        <div className="grid grid-cols-3 gap-1">
          {socials.map((s) => (
            <a
              key={s}
              href="#"
              className="flex min-h-12 items-center text-[15px] text-muted hover:text-foreground"
            >
              {s}
            </a>
          ))}
        </div>
        <p className="font-mono text-xs text-dim">
          © {new Date().getFullYear()} {profile.name} · Hecho en público
        </p>
      </footer>
    </main>
  )
}
