import Navbar from "../ui/shared/navbar/navbar"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section className="lg:flex">
      <Navbar />
      <div className="lg:mx-8 lg:w-full">{children}</div>
    </section>
  )
}
