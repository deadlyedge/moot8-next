import type { Metadata } from "next"
import { Noto_Serif } from "next/font/google"
import "./globals.css"
import { cn } from "@/lib/utils"
import { ClerkProvider } from "@clerk/nextjs"

const notoSerif = Noto_Serif({
  subsets: ["latin"],
  variable: "--font-noto-serif",
  weight: ["100", "900"],
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
    <html lang='en'>
      <ClerkProvider>
        <body className='antialiased dark'>
          {/* <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased dark`}> */}
          {children}
        </body>
      </ClerkProvider>
    </html>
  )
}
