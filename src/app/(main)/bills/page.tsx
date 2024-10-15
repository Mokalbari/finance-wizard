// type Props = {}

import PageTitle from "@/src/ui/shared/atoms/page-title"
import TotalBillsCard from "./_components/total-bills-card"
import SummaryCard from "./_components/summary-card"

export default function Page() {
  return (
    <div>
      <header>
        <PageTitle htmlTag="h1" text="Recurring Bills" className="" />
      </header>
      <TotalBillsCard />
      <SummaryCard />
    </div>
  )
}
