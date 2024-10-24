// type Props = {}

import { LatestTransactions } from "@/lib/definitions"
import CardHeader from "./card-header"
import TransactionBadge from "./transaction-badge"

type Props = {
  data: LatestTransactions[]
}

export default function TransactionSection({ data }: Props) {
  return (
    <div>
      <CardHeader
        cardTitle="Transactions"
        linkText="View all"
        href="/transactions"
      />
      <ul className="mt-6">
        {data.map(badge => (
          <li key={badge.id}>
            <TransactionBadge
              imgSrc={badge.avatar}
              name={badge.name}
              category={badge.category}
              amount={badge.amount}
              date={badge.date}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}
