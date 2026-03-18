import type { Metadata } from "next"
import { Syne, Outfit } from "next/font/google"
import "./globals.css"
import { CartProvider } from "@/components/CartContext"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-serif",
  display: "swap",
})

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
})

export const metadata: Metadata = {
  title: "True North Tropical — Afro-Heritage Farm in Ontario",
  description:
    "Fresh Afro-heritage vegetables, peppers, herbs and grains grown in Baden, Ontario. Farm share CSA, weekly produce delivery, and more.",
  keywords: [
    "African vegetables Ontario",
    "farm share Kitchener",
    "Nigerian vegetables Canada",
    "Afro-heritage farm",
    "Baden Ontario farm",
    "True North Tropical",
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${syne.variable} ${outfit.variable}`}>
      <body>
        <CartProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  )
}
