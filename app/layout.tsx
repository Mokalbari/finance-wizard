import type { Metadata } from "next"
import "./globals.css"
import { publicSans } from "./ui/fonts"

export const metadata: Metadata = {
  title: "Finance Wizard",
  description: "Manage your finances with Finance Wizard",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${publicSans.className} text-md text-grey-900 bg-beige-100 min-h-svh`}
      >
        {children}
      </body>
    </html>
  )
}
