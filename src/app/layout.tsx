import type { Metadata } from "next"
import "../styles/globals.css"
import { publicSans } from "@/src/ui/fonts"

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
        className={`${publicSans.className} min-h-svh bg-beige-100 text-md text-grey-900`}
      >
        {children}
      </body>
    </html>
  )
}
