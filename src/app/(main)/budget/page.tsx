import PageTitle from "@/src/ui/shared/atoms/page-title"
import BudgetCard from "./_components/budget-card"
import { fetchBudgetCard } from "./actions"
import AddButton from "@/src/ui/shared/atoms/add-button"
import BudgetPieChart from "./_components/budget-pie-chart"

export default async function Page() {
  const budgetCategory = await fetchBudgetCard()

  return (
    <main className="mx-4 sm:mx-10">
      <header className="mt-6 flex items-center justify-between sm:mt-8">
        <PageTitle htmlTag="h1" text="Budgets" className="" />
        <AddButton isBlack showBefore text="Add New Budget" />
      </header>
      <div className="lg:mt-6 lg:flex lg:items-start lg:justify-between lg:gap-6">
        <BudgetPieChart data={budgetCategory} />
        <div className="lg:w-3/5">
          {budgetCategory.map(budgetCategory => (
            <BudgetCard key={budgetCategory.id} data={budgetCategory} />
          ))}
        </div>
      </div>
    </main>
  )
}
