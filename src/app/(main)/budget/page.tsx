// type Props = {}

import PageTitle from "@/src/ui/shared/atoms/page-title"
import BudgetCard from "./_components/budget-card"

export default function Page() {
  return (
    <div>
      <PageTitle htmlTag="h1" text="Budgets" className="" />
      <BudgetCard />
    </div>
  )
}
