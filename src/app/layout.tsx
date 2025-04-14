

import { type Metadata } from 'next'
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import {ThemeProvider} from "@/components/providers/theme-provider";
import { cn } from '@/lib/utils';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Header } from '@/components/ui/header';
import { Footer } from '@/components/ui/footer';



const font = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

// const geistMono = Geist_Mono({
//   variable: '--font-geist-mono',
//   subsets: ['latin'],
// })

export const metadata: Metadata = {
  title: 'HiveSync - Collaborative Workspace',
  description: 'Modern team collaboration platform with real-time communication',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {

  
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={cn(font.className, "bg-[#f4f1de] dark:bg-[#232323]")}>
          <ThemeProvider 
            attribute="class"
            defaultTheme="dark"
            enableSystem={false}
            storageKey="hivesynx-theme"
          >
          <div className="min-h-screen">
            
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}