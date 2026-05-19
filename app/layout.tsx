import type { Metadata } from "next"
import { Cormorant_Garamond, Manrope } from "next/font/google"
import "./globals.css"

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "http://localhost:3000")

const metadataBase = new URL(siteUrl)

const bodyFont = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
})

const headingFont = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
})

export const metadata: Metadata = {
  metadataBase,
  title: "Aynara XV",
  description: "Te invito a mi cumpleaños de 15!",
  applicationName: "Aynara XV",
  icons: {
    icon: [
      {
        url: "/icon.svg",
        type: "image/svg+xml",
        sizes: "any",
      },
      {
        url: "/aynara-icon.svg",
        type: "image/svg+xml",
        sizes: "any",
      },
    ],
    shortcut: ["/icon.svg", "/aynara-icon.svg"],
    apple: "/apple-icon",
  },
  openGraph: {
    title: "Aynara XV",
    description: "Te invito a mi cumpleaños de 15!",
    type: "website",
    locale: "es_UY",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Aynara XV",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aynara XV",
    description: "Te invito a mi cumpleaños de 15!",
    images: ["/twitter-image"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="es"
      className={`${bodyFont.variable} ${headingFont.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  )
}
