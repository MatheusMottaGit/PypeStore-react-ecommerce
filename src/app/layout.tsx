import { Metadata } from "next"
import { Inter as FontSans } from 'next/font/google'

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: '400'
})

export const metadata: Metadata = {
  title: 'Pypestore',
  description: 'Ecommerce feito com o melhor do frontend'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${fontSans.variable}`}>
        {children}
      </body>
    </html>
  )
}