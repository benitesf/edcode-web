// TODO: reemplazar los "#" por los links reales (comunidad, redes, contacto).
const PENDING = "#"

const links = {
  whatsapp: "https://wa.me/51957060520",
  email: "mailto:benites.ee@gmail.com",
  youtube: "https://www.youtube.com/@humansnotrequired-dev",
  tiktok: "https://www.tiktok.com/@edcode.ai",
  instagram: "https://www.instagram.com/ee.benites/",
  x: "https://x.com/e2benites",
  github: "https://github.com/benitesf",
  linkedin: "https://www.linkedin.com/in/edsonbf/",
}

export const profile = {
  name: "Edson Benites Fernández",
  handle: "EdCode",
  tagline: "Construyo software en público, sin guion.",
  company: "Humans Not Required",
}

export const live = {
  label: "Construyendo en público",
  href: "#publico",
}

export const cta = {
  community: { label: "Únete a la comunidad", via: "WhatsApp", href: PENDING },
  discord: { label: "Discord", href: PENDING },
  contact: { label: "Contacto", href: links.whatsapp },
}

export const hnr = {
  eyebrow: "Mi emprendimiento",
  name: "Humans Not Required",
  description:
    "Software a medida, automatización e inteligencia artificial para empresas.",
  cta: { label: "Conocer HNR", href: PENDING },
  logo: "/logos/hnr.png",
}

export type Project = {
  name: string
  description: string
  status: string
  highlight?: boolean
  href: string
  logo?: string
}

export const projects: Project[] = [
  {
    name: "ChecaTuAuto",
    description:
      "SaaS para analizar placas de autos en Perú y gestionar tus compras y ventas de vehículos.",
    status: "SaaS",
    highlight: true,
    href: PENDING,
    logo: "/logos/checatuauto.png",
  },
  {
    name: "Industria Primetal SAC",
    description:
      "Web app de inventario y operaciones para una empresa de compra y venta de acero.",
    status: "Cliente",
    href: PENDING,
  },
]

export const channels = [
  { name: "YouTube", what: "Lives completos", href: links.youtube },
  { name: "TikTok", what: "Clips y lives", href: links.tiktok },
  { name: "Instagram", what: "Detrás de cámaras", href: links.instagram },
  { name: "X", what: "Avances diarios", href: links.x },
]

export const business = {
  title: "¿Tu empresa quiere automatizar o lanzar un producto?",
  description: "Desarrollo de software a medida y automatización con IA.",
  cta: { label: "Escríbeme", href: links.email },
}

export const socials = [
  { name: "YouTube", href: links.youtube },
  { name: "TikTok", href: links.tiktok },
  { name: "Instagram", href: links.instagram },
  { name: "X", href: links.x },
  { name: "GitHub", href: links.github },
  { name: "LinkedIn", href: links.linkedin },
]
