import type { Metadata } from "next"
import { Noto_Serif } from "next/font/google"
import "./globals.css"
import { cn } from "@/lib/utils"
import { ClerkProvider } from "@clerk/nextjs"
import { ThemeProvider } from "@/components/providers/themeProvider"
import { QueryProvider } from "@/components/providers/queryProvider"

const notoSerif = Noto_Serif({
  subsets: ["latin"],
  variable: "--font-noto-serif",
  weight: ["300", "700"],
})

export const metadata: Metadata = {
  title: "moot8",
  description: "another Dictionary is written by you",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClerkProvider
      dynamic
      signInUrl='/sign-in'
      signUpUrl='/sign-up'
      signInFallbackRedirectUrl='/'
      signUpFallbackRedirectUrl='/'
      afterSignOutUrl='/' >
      <html lang='en' suppressHydrationWarning>
        <body className={cn(notoSerif.className, "antialiased")}>
          <ThemeProvider
            attribute='class'
            defaultTheme='dark'
            enableSystem={true}
            storageKey='moot8-theme'>
            <QueryProvider>{children}</QueryProvider>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}
