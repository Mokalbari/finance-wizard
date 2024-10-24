import type { RecurringBillsOverview } from "@/src/lib/definitions"
import { reduceSum, sortBills } from "@/src/lib/functions"
import BillBadge from "./bill-badge"
import CardHeader from "./card-header"

type Props = {
  data: RecurringBillsOverview[]
}

export default function BillsSection({ data }: Props) {
  const sortedBills = sortBills(data, new Date("2024-07-28"))
  const { paid, upcoming, dueSoon } = sortedBills

  const paidAmount = Math.abs(reduceSum(paid.content))
  const upcomingAmount = Math.abs(reduceSum(upcoming.content))
  const dueAmount = Math.abs(reduceSum(dueSoon.content))

  return (
    <>
      <CardHeader
        linkText="See Details"
        cardTitle="Recurring Bills"
        href="/bills"
      />
      <ul className="mt-8 flex flex-col gap-2">
        <BillBadge
          className="border-l-[0.25rem] border-l-green"
          sortingOption={paid.name}
          amount={paidAmount.toFixed(2)}
        />
        <BillBadge
          className="border-l-[0.25rem] border-l-yellow"
          sortingOption={upcoming.name}
          amount={upcomingAmount.toFixed(2)}
        />
        <BillBadge
          className="border-l-[0.25rem] border-l-cyan"
          sortingOption={dueSoon.name}
          amount={dueAmount.toFixed(2)}
        />
      </ul>
    </>
  )
}
