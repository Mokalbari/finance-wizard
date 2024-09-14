// type Props = {}

import CardHeader from "./card-header"
import TransactionBadge from "./transaction-badge"

export default function TransactionSection() {
  return (
    <div>
      <CardHeader
        cardTitle="Transactions"
        linkText="View all"
        href="/transactions"
      />
      <ul className="mt-6">
        <TransactionBadge textColor="text-green" />
        <TransactionBadge textColor="text-grey-900" />
        <TransactionBadge textColor="text-green" />
        <TransactionBadge textColor="text-green" />
      </ul>
    </div>
  )
}
