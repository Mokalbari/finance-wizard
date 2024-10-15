// type Props = {}

import PageTitle from "@/src/ui/shared/atoms/page-title"
import TotalBillsCard from "./_components/total-bills-card"
import SummaryCard from "./_components/summary-card"
import TableHead from "./_components/table-head"

export default function Page() {
  return (
    <div>
      <header>
        <PageTitle htmlTag="h1" text="Recurring Bills" className="" />
      </header>
      <div>
        <aside className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
          <TotalBillsCard />
          <SummaryCard />
        </aside>
        <main>
          <div className="mt-6 rounded-lg bg-white">
            <TableHead />
          </div>
        </main>
      </div>
    </div>
  )
}
