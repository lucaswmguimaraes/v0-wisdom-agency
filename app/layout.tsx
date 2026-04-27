import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { CustomCursor } from '@/components/wisdom/custom-cursor'
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
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Wisdom Agency — Performance Marketing & IA Aplicada',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/og-image.png'],
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
        {/* GTM_PLACEHOLDER: adicionar script do GTM aqui quando criar a conta */}
        <CustomCursor />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
