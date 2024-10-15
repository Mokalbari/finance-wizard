import Navbar from "../../ui/shared/navbar/navbar"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="lg:flex">
      <Navbar />
      <div className="lg:mx-8 lg:w-full">{children}</div>
    </div>
  )
}
