import { ClerkProvider } from '@clerk/nextjs'
import '../globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import Topbar from '@/components/shared/Topbar'
import LeftSidebar from '@/components/shared/LeftSidebar'
import Bottombar from '@/components/shared/Bottombar'
import RightSidebar from '@/components/shared/RightSidebar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Threads Clone',
  description: 'A clone application for Threads.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className="{`$inter.className bg-dark-1`}">
          <Topbar />

          <main>
            <LeftSidebar />

            <section className= "main-container">
              <div className="w-full max-w-4x1">
                {children}
              </div>
            </section>

            <RightSidebar />
          </main>
          
          <Bottombar />
        </body>
      </html>
    </ClerkProvider>
  )
}
