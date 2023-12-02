import { Urbanist } from 'next/font/google'
import './globals.css'
import Footer from '@/components/Footer'
import NavBar from '@/components/NavBar'
import ModalProvider from '@/providers/ModalProvider'

const font = Urbanist({ subsets: ['latin'] })

export const metadata = {
  title: 'Store',
  description: 'Store Descriptions',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ModalProvider />
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
