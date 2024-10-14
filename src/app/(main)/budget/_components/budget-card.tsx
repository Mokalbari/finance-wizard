// type Props = {}

import Ellipsis from "@/src/ui/icons/icon-ellipsis.svg"
import CaretRight from "@/src/ui/icons/icon-caret-right.svg"
import CardTitle from "@/src/ui/shared/atoms/card-title"
import ColorDot from "@/src/ui/shared/atoms/color-dot"
import { BudgetCardType } from "@/src/lib/definitions"
import { fetchLatestTransactionsOnBudgetCard } from "../actions"
import { formatDate, formatNumberToString } from "@/src/lib/functions"
import Image from "next/image"

type Props = {
  data: BudgetCardType
}

export default async function BudgetCard({ data }: Props) {
  const latestTransactions = await fetchLatestTransactionsOnBudgetCard(
    data.category,
  )

  return (
    <article className="mx-4 rounded-lg bg-white px-5 py-6">
      <header className="flex items-center gap-4">
        <ColorDot color={data.theme} />
        <CardTitle text={data.category} />
        <div className="ml-auto">
          <Ellipsis />
        </div>
      </header>
      <section className="mt-5">
        <span className="text-grey-500">Maximum of ${data.maximum}</span>
        <div className="mt-4 h-8 w-full rounded-sm bg-beige-100 p-1">
          <div className="h-[90%] w-1/2 rounded-md bg-green" />
        </div>
        <div className="mt-4 flex justify-between">
          <div className="flex w-1/2 flex-col rounded-sm border-l-4 border-l-green px-4">
            <div className="text-grey-500">Spent</div>
            <div className="font-bold">
              {formatNumberToString(data.total_spent)}
            </div>
          </div>
          <div className="border-l-grey flex w-1/2 flex-col rounded-sm border-l-4 px-4">
            <div className="text-grey-500 sm:hidden">Free</div>
            <div className="text-grey-500 max-sm:hidden">Remaining</div>
            <div className="font-bold">
              ${data.maximum - Math.abs(data.total_spent)}
            </div>
          </div>
        </div>
      </section>
      <section className="mt-5 rounded-lg bg-beige-100 p-4">
        <div className="mb-5 flex items-center justify-between">
          <h3 className="text-md font-bold">LatestSpending</h3>
          <div className="flex items-center gap-3">
            <div className="text-sm text-grey-500">See All</div>
            <CaretRight />
          </div>
        </div>
        <ul className="text-xs">
          {latestTransactions.map(transaction => (
            <li
              key={transaction.id}
              className="border-b border-b-grey-500/50 py-3 last-of-type:border-b-transparent"
            >
              <div className="flex items-center justify-between">
                <Image
                  src={transaction.avatar}
                  alt={transaction.name}
                  className="rounded-full max-sm:hidden"
                  width={32}
                  height={32}
                />
                <div className="font-bold">{transaction.name}</div>
                <div className="flex flex-col text-right">
                  <div className="font-bold">
                    {formatNumberToString(transaction.amount)}
                  </div>
                  <div className="text-grey-500">
                    {formatDate(transaction.date)}
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </article>
  )
}
