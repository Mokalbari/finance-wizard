import PageTitle from "@/components/ui/page-title"
import BudgetCardProvider from "@/context/budget-context"
import AddBudgetModal from "./_components/add-budget-modal"
import BudgetCard from "./_components/budget-card"
import BudgetPieChart from "./_components/budget-pie-chart"
import { fetchBudgetCard } from "./actions"

export default async function Page() {
  const budgetCategory = await fetchBudgetCard()

  return (
    <main className="mx-4 sm:mx-10">
      <header className="mt-6 flex items-center justify-between sm:mt-8">
        <PageTitle text="Budgets" className="" />
        <AddBudgetModal />
      </header>
      <div className="lg:mt-6 lg:flex lg:items-start lg:justify-between lg:gap-6">
        <BudgetPieChart data={budgetCategory} />
        <div className="lg:w-3/5">
          {budgetCategory.map(budgetCategory => (
            <BudgetCardProvider key={budgetCategory.id} data={budgetCategory}>
              <BudgetCard data={budgetCategory} />
            </BudgetCardProvider>
          ))}
        </div>
      </div>
    </main>
  )
}
