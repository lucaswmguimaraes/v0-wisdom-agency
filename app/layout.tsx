import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { CustomCursor } from '@/components/wisdom/custom-cursor'
import './globals.css'

const geist = Geist({
  subsets: ['latin'],
  variable: '--font-geist',
})

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
})

export const metadata: Metadata = {
  title: 'Wisdom Agency — Performance Marketing & IA Aplicada',
  description: 'Gestão de mídia paga para empresas B2B e DTC. R$20M+ gerenciados ao longo da carreira. Cases reais: +329% leads, +85% receita. Lucas Guimarães — Growth Marketing Specialist.',
  openGraph: {
    title: 'Wisdom Agency — Performance Marketing & IA Aplicada',
    description: 'Gestão de mídia paga para empresas B2B e DTC. R$20M+ gerenciados.',
    type: 'website',
    locale: 'pt_BR',
    url: 'https://wisdomagency.com.br',
    images: [{
      url: '/og-image.png',
      width: 1200,
      height: 630,
      alt: 'Wisdom Agency — Performance Marketing & IA Aplicada',
    }],
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
    <html lang="pt-BR" className={`${geist.variable} ${geistMono.variable} bg-background`}>
      <head>
        {/* GTM — head snippet (inline para garantir carregamento síncrono) */}
        <script dangerouslySetInnerHTML={{ __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-NZQ7KGTK');` }} />
      </head>
      <body className="font-sans antialiased">
        {/* GTM — noscript fallback */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NZQ7KGTK"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <CustomCursor />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
