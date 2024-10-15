// type Props = {}

import { fetchRecurringBills } from "@/src/lib/actions"
import { reduceSum, sortBills } from "@/src/lib/functions"
import CardTitle from "@/src/ui/shared/atoms/card-title"

export default async function SummaryCard() {
  const recurringBills = await fetchRecurringBills()
  const { paid, upcoming, dueSoon } = sortBills(
    recurringBills,
    new Date("2024-07-28"),
  )

  return (
    <div className="rounded-lg bg-white p-5">
      <CardTitle text="Summary" />
      <ul className="mt-5 text-xs">
        <li className="flex justify-between border-b border-b-grey-100 py-4">
          <span className="text-grey-500">{paid.name}</span>
          <span className="font-bold">
            {paid.content.length} (${reduceSum(paid.content).toFixed(2)})
          </span>
        </li>
        <li className="flex justify-between border-b border-b-grey-100 py-4">
          <span className="text-grey-500">{upcoming.name}</span>
          <span className="font-bold">
            {upcoming.content.length} (${reduceSum(upcoming.content).toFixed(2)}
            )
          </span>
        </li>
        <li className="flex justify-between pt-4">
          <span className="text-red">{dueSoon.name}</span>
          <span className="font-bold text-red">
            {dueSoon.content.length} (${reduceSum(dueSoon.content).toFixed(2)})
          </span>
        </li>
      </ul>
    </div>
  )
}
