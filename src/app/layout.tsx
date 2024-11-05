import type { Metadata } from "next"
import localFont from "next/font/local"
import { Noto_Serif } from "next/font/google"
import "./globals.css"
import { cn } from "@/lib/utils"

const notoSerif = Noto_Serif({
  subsets: ["latin"],
  variable: "--font-noto-serif",
  weight: ["100", "900"],
})

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
})
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
})

export const metadata: Metadata = {
  title: "Moot8",
  description: "another Dictionary is written by you",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className="antialiased dark">
        {/* <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased dark`}> */}
        {children}
      </body>
    </html>
  )
}
