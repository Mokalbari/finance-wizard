// type Props = {}

import PageTitle from "@/src/ui/shared/atoms/page-title"
import BudgetCard from "./_components/budget-card"
import { fetchBudgetCard } from "./actions"
import { getUniqueID } from "@/src/lib/functions"

export default async function Page() {
  const budgetCategory = await fetchBudgetCard()

  return (
    <div>
      <PageTitle htmlTag="h1" text="Budgets" className="" />
      {budgetCategory.map(budgetCategory => (
        <BudgetCard key={getUniqueID()} data={budgetCategory} />
      ))}
    </div>
  )
}
