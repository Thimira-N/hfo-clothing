import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
// import Navigation from "@/components/navigation"
// import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
    title: "HFO Clothing - Wear It. Own It. Live It.",
    description:
        "Premium clothing that empowers you to express your unique style. Discover luxury fashion with HFO Clothing.",
    keywords: "fashion, clothing, premium, luxury, style, men, women, accessories",
    authors: [{ name: "HFO Clothing" }],
    openGraph: {
        title: "HFO Clothing - Premium Fashion",
        description: "Discover premium clothing that defines your style",
        type: "website",
        locale: "en_US",
    },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={inter.className}
      >
          {/*<Navigation />*/}
          <main>{children}</main>
          {/*<Footer />*/}
      </body>
    </html>
  );
}
