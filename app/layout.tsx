import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { AuthProvider } from "@/lib/auth-context"
import { Toaster } from "@/components/ui/toaster"
import Navbar from "@/components/navbar"
import ClientWrapper from "@/components/client-wrapper"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "SKConnect - Youth Engagement Platform",
  description: "Connecting youth with their Sangguniang Kabataan for better community engagement",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <ClientWrapper fallback={
            <div className="min-h-screen bg-gray-50">
              <div className="animate-pulse">
                <div className="bg-white shadow-lg border-b h-16"></div>
              </div>
              <main>{children}</main>
            </div>
          }>
            <AuthProvider>
              <Navbar />
              <main>{children}</main>
              <Toaster />
            </AuthProvider>
          </ClientWrapper>
        </ThemeProvider>
      </body>
    </html>
  )
}
