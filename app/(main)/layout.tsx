import Navbar from "../ui/shared/navbar/navbar"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section>
      <Navbar />
      {children}
    </section>
  )
}
