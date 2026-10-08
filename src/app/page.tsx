import Image from "next/image"
import { Icon } from "@/components/Icon"
import {
  about,
  business,
  channels,
  cta,
  headerSocials,
  hnr,
  live,
  profile,
  projects,
  socials,
} from "@/data/profile"

const eyebrow = "font-mono text-xs font-medium uppercase tracking-[0.08em]"
const h2 =
  "font-display text-[44px] font-extrabold uppercase leading-[0.9] text-balance"
const tag =
  "inline-flex flex-none items-center rounded-[4px] border px-2 py-[3px] font-mono text-[10px] font-medium uppercase tracking-[0.08em] whitespace-nowrap"
const button =
  "flex min-h-12 items-center justify-center gap-2.5 rounded-md border-[1.5px] px-6 text-base font-semibold"

export default function Home() {
  return (
    <main className="mx-auto flex max-w-[480px] flex-col gap-14 px-5 pb-8 pt-6">
      <header className="flex flex-col gap-[18px]">
        <div className="flex items-center justify-between gap-3">
          <Image
            src="/foto_perfil.png"
            alt={`Foto de ${profile.name}`}
            width={64}
            height={64}
            priority
            className="size-16 flex-none rounded-lg border border-line-strong object-cover"
          />
          <a
            href={live.href}
            className={`${tag} min-h-11 gap-2.5 border-accent-line bg-accent-bg px-3.5 text-accent`}
          >
            <span
              aria-hidden
              className="pulse-dot size-1.5 flex-none rounded-full bg-accent"
            />
            {live.label}
          </a>
        </div>
        <h1 className="font-display text-[76px] font-extrabold uppercase leading-[0.86] tracking-[-0.01em] text-balance">
          {profile.name}
        </h1>
        <p className="text-[19px] leading-[1.4] text-muted text-pretty">
          {profile.tagline} Fundador de{" "}
          <span className="text-foreground">{profile.company}</span>.
        </p>
        <div className="flex flex-wrap gap-2">
          {headerSocials.map((s) => (
            <a
              key={s.name}
              href={s.href}
              className="flex min-h-11 items-center gap-2 rounded-md border border-line px-3.5 text-sm font-medium text-muted hover:border-line-strong hover:text-foreground"
            >
              <Icon name={s.icon} size={16} />
              {s.name}
            </a>
          ))}
        </div>
      </header>

      <nav
        aria-label="Acciones principales"
        className="-mt-6 flex flex-col gap-2.5"
      >
        <a
          href={cta.community.href}
          className={`${button} justify-between border-accent bg-accent text-ink hover:border-accent-deep hover:bg-accent-deep hover:text-white`}
        >
          <span className="flex items-center gap-2.5">
            <Icon name="users" />
            {cta.community.label}
          </span>
          <Icon name="arrow" />
        </a>
        <div className="grid grid-cols-2 gap-2.5">
          <a
            href={cta.discord.href}
            className={`${button} border-line-strong hover:bg-surface-hover`}
          >
            {cta.discord.label}
            <Icon name="external" size={16} />
          </a>
          <a
            href={cta.contact.href}
            className={`${button} border-line-strong hover:bg-surface-hover`}
          >
            <Icon name="whatsapp" size={16} />
            {cta.contact.label}
          </a>
        </div>
      </nav>

      <section aria-labelledby="sobre-mi" className="flex flex-col gap-3.5">
        <h2 id="sobre-mi" className={`${eyebrow} text-dim`}>
          {about.title}
        </h2>
        <p className="text-base leading-normal text-muted text-pretty">
          {about.text}
        </p>
        <p className="text-base leading-normal text-pretty">
          {about.cta}{" "}
          <a
            href={about.emailHref}
            className="font-medium text-accent underline underline-offset-4"
          >
            {about.email}
          </a>
        </p>
      </section>

      <section
        aria-labelledby="hnr"
        className="flex flex-col gap-4 rounded-lg border border-line-strong bg-surface p-6"
      >
        <div className="flex items-center justify-between">
          <span className={`${eyebrow} text-accent`}>{hnr.eyebrow}</span>
          <span className={`${tag} border-accent-line bg-accent-bg text-accent`}>
            HNR
          </span>
        </div>
        <div className="flex items-center gap-4">
          <Image
            src={hnr.logo}
            alt=""
            width={56}
            height={56}
            className="size-14 flex-none rounded-md bg-paper p-1.5"
          />
          <h2 id="hnr" className={h2}>
            {hnr.name}
          </h2>
        </div>
        <p className="text-base leading-normal text-muted text-pretty">
          {hnr.description}
        </p>
        <a
          href={hnr.cta.href}
          className={`${button} mt-1 border-line-strong hover:bg-surface-hover`}
        >
          {hnr.cta.label}
          <Icon name="arrow" />
        </a>
      </section>

      <section aria-labelledby="proyectos" className="flex flex-col gap-4">
        <div className="flex items-baseline justify-between">
          <h2 id="proyectos" className={h2}>
            Proyectos
          </h2>
          <span className="font-mono text-xs text-dim">
            {String(projects.length).padStart(2, "0")}
          </span>
        </div>
        <div className="flex flex-col border-t border-line">
          {projects.map((p) => (
            <a
              key={p.name}
              href={p.href}
              className="flex flex-col gap-2 border-b border-line py-5 hover:bg-surface"
            >
              <div className="flex items-center justify-between gap-3">
                <span className="flex items-center gap-3 text-lg font-semibold tracking-[-0.01em]">
                  {p.logo && (
                    <Image
                      src={p.logo}
                      alt=""
                      width={724}
                      height={512}
                      className="h-11 w-auto flex-none rounded-md bg-paper p-1 object-contain"
                    />
                  )}
                  {p.name}
                </span>
                <span
                  className={`${tag} ${
                    p.highlight
                      ? "border-accent-line bg-accent-bg text-accent"
                      : "border-line-strong text-muted"
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
        <h2 id="publico-title" className={h2}>
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
              <span className="flex items-center gap-3">
                <Icon name={c.icon} size={22} />
                <span className="flex flex-col gap-0.5">
                  <span className="text-[17px] font-medium">{c.name}</span>
                  <span className="text-sm text-dim">{c.what}</span>
                </span>
              </span>
              <span className="text-muted">
                <Icon name="external" size={16} />
              </span>
            </a>
          ))}
        </div>
      </section>

      <section
        aria-labelledby="empresas"
        className="flex flex-col gap-3.5 rounded-lg bg-paper p-6 text-ink"
      >
        <h2 id="empresas" className={`${eyebrow} text-paper-muted`}>
          Trabajemos juntos
        </h2>
        <p className="font-display text-[40px] font-extrabold uppercase leading-[0.92] text-balance">
          {business.title}
        </p>
        <p className="text-base leading-normal text-paper-muted">
          {business.description}
        </p>
        <a
          href={business.cta.href}
          className={`${button} mt-1.5 border-ink bg-ink text-paper hover:border-accent-deep hover:bg-accent-deep`}
        >
          <Icon name="mail" />
          {business.cta.label}
        </a>
      </section>

      <footer className="flex flex-col gap-4 border-t border-line pt-5">
        <div className="grid grid-cols-3 gap-1">
          {socials.map((s) => (
            <a
              key={s.name}
              href={s.href}
              className="flex min-h-12 items-center gap-2 text-[15px] text-muted hover:text-foreground"
            >
              <Icon name={s.icon} size={16} />
              {s.name}
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
