import type { Metadata } from 'next'
import './globals.css'

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
      <body className=" bg-digitalmaker-gray text-digitalmaker-offwhite">
        {children}
      </body>
    </html>
  )
}
