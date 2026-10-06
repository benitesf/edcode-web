import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="min-h-screen bg-background text-foreground">{children}</body>
    </html>
  )
}
