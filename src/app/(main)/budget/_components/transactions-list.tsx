import CaretRight from "@/assets/icons/icon-caret-right.svg"
import type { BudgetCardLatestTransactions } from "@/lib/definitions"
import { formatDate, formatNumberToString } from "@/lib/functions"
import Image from "next/image"

type Props = {
  transactions: BudgetCardLatestTransactions[]
}

export default function TransactionsList({ transactions }: Props) {
  return (
    <>
      <div className="mb-5 flex items-center justify-between">
        <h3 className="text-md font-bold">LatestSpending</h3>
        <div className="flex items-center gap-3">
          <div className="text-sm text-grey-500">See All</div>
          <CaretRight />
        </div>
      </div>
      <ul className="text-xs">
        {transactions.map(transaction => (
          <li
            key={transaction.id}
            className="border-b border-b-grey-500/50 py-3 last-of-type:border-b-transparent"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Image
                  src={transaction.avatar}
                  alt={transaction.name}
                  className="rounded-full max-sm:hidden"
                  width={32}
                  height={32}
                />
                <div className="font-bold">{transaction.name}</div>
              </div>
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
    </>
  )
}
