import type { Metadata } from 'next'
import './globals.css'
import { Header } from '../components/header'
import { Footer } from '../components/footer'

export const metadata: Metadata = {
  title: 'Digital Maker Pro',
  description: 'Desenvolvimento de softwares',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className=" bg-digitalmaker-gray">
      <head>
        <link rel="icon" href="/assets/favicon.ico" sizes="any" />
      </head>
      <body className=" bg-digitalmaker-gray text-digitalmaker-offwhite">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
