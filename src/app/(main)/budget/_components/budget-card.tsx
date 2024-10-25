import type { BudgetCardType } from "@/lib/types/definitions"
import { fetchLatestTransactionsOnBudgetCard } from "../actions"
import BudgetCardHeader from "./budget-card-header"
import ProgressBar from "./progress-bar"
import TransactionsList from "./transactions-list"

type Props = {
  data: BudgetCardType
}

export default async function BudgetCard({ data }: Props) {
  const latestTransactions = await fetchLatestTransactionsOnBudgetCard(
    data.category,
  )

  return (
    <article className="mt-6 rounded-lg bg-white px-5 py-6 last-of-type:mb-32 lg:first-of-type:mt-0 lg:last-of-type:mb-12">
      <BudgetCardHeader theme={data.theme} category={data.category} />
      <section className="mt-5">
        <ProgressBar
          totalSpent={data.total_spent}
          maximum={data.maximum}
          theme={data.theme}
        />
      </section>
      <section className="mt-5 rounded-lg bg-beige-100 p-4">
        <TransactionsList transactions={latestTransactions} />
      </section>
    </article>
  )
}
