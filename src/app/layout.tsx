import type { Metadata } from "next"
import {
  Big_Shoulders,
  Hanken_Grotesk,
  IBM_Plex_Mono,
} from "next/font/google"
import "./globals.css"

const display = Big_Shoulders({
  variable: "--font-display",
  subsets: ["latin"],
})

const sans = Hanken_Grotesk({
  variable: "--font-sans-body",
  subsets: ["latin"],
})

const mono = IBM_Plex_Mono({
  variable: "--font-mono-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
})

export const metadata: Metadata = {
  title: "Edson Benites (EdCode) — Construyendo en público",
  description:
    "Fundador de Humans Not Required. Software a medida, automatización e IA. Construyo en público.",
  openGraph: {
    title: "Edson Benites (EdCode) — Construyendo en público",
    description:
      "Fundador de Humans Not Required. Software a medida, automatización e IA. Construyo en público.",
    url: "https://edcode.vercel.app",
    siteName: "EDCODE",
    locale: "es_PE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Edson Benites (EdCode) — Construyendo en público",
    description:
      "Fundador de Humans Not Required. Software a medida, automatización e IA. Construyo en público.",
  },
  metadataBase: new URL("https://edcode.vercel.app"),
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="es"
      className={`${display.variable} ${sans.variable} ${mono.variable} antialiased`}
    >
      <body className="min-h-screen bg-background text-foreground">{children}</body>
    </html>
  )
}
