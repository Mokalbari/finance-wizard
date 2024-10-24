// type Props = {}

import PageTitle from "@/components/ui/page-title"
import SummaryCard from "./_components/summary-card"
import Table from "./_components/table"
import TableHead from "./_components/table-head"
import TotalBillsCard from "./_components/total-bills-card"

export default function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string
  }
}) {
  const currentQuery = searchParams?.query || ""

  return (
    <div className="px-4 sm:max-lg:px-10">
      <header className="my-8">
        <PageTitle text="Recurring Bills" className="" />
      </header>
      <div className="lg:mt-8 lg:flex lg:items-start lg:gap-6">
        <aside className="grid gap-3 sm:grid-cols-2 lg:w-1/3 lg:grid-cols-1">
          <TotalBillsCard />
          <SummaryCard />
        </aside>
        <main className="lg:w-2/3">
          <div className="mb-32 mt-6 rounded-lg bg-white px-5 py-6 sm:p-8 lg:mb-12 lg:mt-0">
            <TableHead />
            <Table query={currentQuery} />
          </div>
        </main>
      </div>
    </div>
  )
}
