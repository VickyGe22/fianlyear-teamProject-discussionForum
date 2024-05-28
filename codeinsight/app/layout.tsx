import './css/style.css'

import { Inter, Nothing_You_Could_Do } from 'next/font/google'
import ClientSideEffect from './ClientSideEffect';

// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';



const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})

const nycd = Nothing_You_Could_Do({
  subsets: ['latin'],
  variable: '--font-nycd',
  weight: '400',
  display: 'swap'
})

export const metadata = {
  title: 'CodeInsight App',
  description: 'Your code insight app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  
  return (

    <html lang="en">
      <body className={`${inter.variable} ${nycd.variable} font-inter antialiased bg-white text-gray-800 tracking-tight`}>
        <ClientSideEffect />
        <div className="flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip">
          {children}
        </div>
      </body>
    </html>
  )
}
