import BudgetCard from "./_components/budget-card"
import PageTitle from "@/src/ui/shared/atoms/page-title"
import { fetchBudgetCard } from "./actions"
import BudgetPieChart from "./_components/budget-pie-chart"
import AddBudgetModal from "./_components/add-budget-modal"

export default async function Page() {
  const budgetCategory = await fetchBudgetCard()

  return (
    <main className="mx-4 sm:mx-10">
      <header className="mt-6 flex items-center justify-between sm:mt-8">
        <PageTitle htmlTag="h1" text="Budgets" className="" />
        <AddBudgetModal />
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
