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
  title: "Edson Benites — Software Developer",
  description:
    "Portfolio de Edson Benites. Construyo productos digitales con foco en rendimiento y experiencia de usuario.",
  openGraph: {
    title: "Edson Benites — Software Developer",
    description:
      "Portfolio de Edson Benites. Construyo productos digitales con foco en rendimiento y experiencia de usuario.",
    url: "https://edcode.vercel.app",
    siteName: "EDCODE",
    locale: "es_PE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Edson Benites — Software Developer",
    description:
      "Portfolio de Edson Benites. Construyo productos digitales con foco en rendimiento y experiencia de usuario.",
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
      <body className="bg-[var(--bg)] text-[var(--text)] min-h-screen">{children}</body>
    </html>
  )
}
