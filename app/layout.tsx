import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Toaster } from 'react-hot-toast'
import { ThemeProvider } from '@/components/ThemeProvider'
import { NavigationProgressProvider } from '@/components/NavigationProgress'
import ScrollToTopButton from '@/components/ui/ScrollToTopButton'

const inter = Inter({ subsets: ['latin'] })

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''

export const metadata: Metadata = {
  title: 'Syed Asfar Ahmad Bukhari - Portfolio',
  description: 'Personal portfolio website showcasing my work and skills',
  icons: {
    icon: `${basePath}/images/logos/LOGO.ico`,
    shortcut: `${basePath}/images/logos/LOGO.ico`,
    apple: `${basePath}/images/logos/LOGO.png`,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var e=localStorage.getItem('theme');var m=window.matchMedia('(prefers-color-scheme: dark)');var d=e==='dark'||(!e&&m.matches);if(d) document.documentElement.classList.add('dark'); else document.documentElement.classList.remove('dark');})();`,
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&display=swap" rel="stylesheet" />
      </head>
      <body className={`${inter.className} bg-white text-gray-900 dark:bg-black dark:text-white`}>
        <ThemeProvider>
          <NavigationProgressProvider>
            {children}
          </NavigationProgressProvider>
          <ScrollToTopButton />
          <Toaster
          position="top-center"
            toastOptions={{
              duration: 4000,
              style: {
              background: '#ffffff',
              color: '#111827',
              border: '1px solid #e5e7eb',
              borderRadius: '12px',
              boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
            },
          }}
        />
        </ThemeProvider>
      </body>
    </html>
  )
}
