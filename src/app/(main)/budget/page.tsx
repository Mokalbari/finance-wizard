import PageTitle from "@/src/ui/shared/atoms/page-title"
import BudgetCard from "./_components/budget-card"
import { fetchBudgetCard } from "./actions"
import { getUniqueID } from "@/src/lib/functions"
import AddButton from "@/src/ui/shared/atoms/add-button"

export default async function Page() {
  const budgetCategory = await fetchBudgetCard()

  return (
    <div>
      <div className="mx-4 mt-6 flex items-center justify-between">
        <PageTitle htmlTag="h1" text="Budgets" className="" />
        <AddButton showBefore text="Add New Budget" />
      </div>
      {budgetCategory.map(budgetCategory => (
        <BudgetCard key={getUniqueID()} data={budgetCategory} />
      ))}
    </div>
  )
}
