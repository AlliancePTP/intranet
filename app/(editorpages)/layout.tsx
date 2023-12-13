import { GeistSans } from 'geist/font'
import '../globals.css'
import Header from '@/components/Header'
import APTQI from '@/components/APTQI'
import ClinicOfMonth from '@/components/ClinicOfMonth'
import Sidebar from '@/components/Sidebar'
import SocialFeed from '@/components/SocialFeed'
import DailyQuote from '@/components/DailyQuote'
import Footer from '@/components/Footer'
import ReviewCarousel from '@/components/Carousel'

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : 'http://localhost:3000'

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: 'Alliance PTP Intranet',
  description: 'Intranet for communication and collaboration within Alliance PTP',
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={GeistSans.className}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes='any' />
      </head>
      <body className="m-0 bg-background text-foreground">
        <Header />
              <div className='container px-2 mx-auto sm:px-0'>
          <div className=''>{children}</div>
      </div>
        <Footer />
        <APTQI />
      </body>
    </html>
  )
}
