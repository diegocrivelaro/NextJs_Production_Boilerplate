import '../styles/global.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { metaData } from "../static/SEO/index"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  ...metaData
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
