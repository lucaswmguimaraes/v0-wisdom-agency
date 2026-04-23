import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
  weight: ['400', '500', '600', '700', '800'],
})

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"],
  variable: '--font-jetbrains',
  weight: ['400', '500'],
})

export const metadata: Metadata = {
  title: 'Wisdom Agency — Performance Marketing & IA Aplicada',
  description: 'Gestão de mídia paga para empresas B2B e DTC. R$1M+/mês gerenciados. Cases reais: +329% leads, +85% receita. Lucas Guimarães — Growth Marketing Specialist.',
  openGraph: {
    title: 'Wisdom Agency — Performance Marketing & IA Aplicada',
    description: 'Gestão de mídia paga para empresas B2B e DTC. R$1M+/mês gerenciados.',
    type: 'website',
    locale: 'pt_BR',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${jetbrainsMono.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
