import { GeistSans } from 'geist/font'
import '../globals.css'
import Header from '@/components/Header'
import APTQI from '@/components/APTQI'
import ClinicOfMonth from '@/components/ClinicOfMonth'
import Sidebar from '@/components/Sidebar'
import SocialFeed from '@/components/SocialFeed'
import DailyQuote from '@/components/DailyQuote'
import Footer from '@/components/Footer'
import Script from 'next/script'

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : 'http://localhost:3000'

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: 'Alliance PTP Intranet',
  description: 'Intranet for communication and collaboration within Alliance PTP',
}
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {


  return (
    <html lang="en" className={`${GeistSans.className} w-screen`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes='any' />
      </head>
      <body className="w-full m-0 bg-background text-foreground">
        <Header />
        <div className='container px-2 mx-auto sm:px-0'>
              {children}
        </div>
      
      <Footer />
      <APTQI />
      <Script
        src='https://unpkg.com/flowbite@2.2.0/dist/flowbite.js'
        strategy='beforeInteractive'
      />
      </body>
    </html>
  )
}