import PageTitle from "@/components/ui/page-title"
import BillsSection from "./_components/bills-section"
import BudgetSection from "./_components/budget-section"
import CardLayout from "./_components/card-layout"
import OverviewGrid from "./_components/overview-grid"
import PotsSection from "./_components/pots-section"
import TransactionSection from "./_components/transaction-section"

import {
  fetchBudgetOverview,
  fetchLatestTransactions,
  fetchPotsOverview,
} from "./actions"

import { fetchUsersFinance } from "@/lib/db/fetchUsersFinance"
import { fetchRecurringBills } from "./bills/actions"

export default async function Home() {
  const [
    userBalance,
    potsOverview,
    latestTransactions,
    budgetOverview,
    recurringBills,
  ] = await Promise.all([
    fetchUsersFinance(),
    fetchPotsOverview(),
    fetchLatestTransactions(),
    fetchBudgetOverview(),
    fetchRecurringBills("", "Latest"),
  ])

  const sections = [
    {
      key: "pots",
      className: "row-start-1 row-end-3 col-start-1 col-end-2 mt-8",
      component: <PotsSection data={potsOverview} />,
    },
    {
      key: "transactions",
      className: "row-start-3 col-start-1 row-end-7 col-end-2 mt-8",
      component: <TransactionSection data={latestTransactions} />,
    },
    {
      key: "budget",
      className: "row-start-1 col-start-2 row-end-4 col-end-3 mt-8",
      component: <BudgetSection data={budgetOverview} />,
    },
    {
      key: "bills",
      className: "row-start-4 col-start-2 row-end-7 col-end-3 mt-8",
      component: <BillsSection data={recurringBills} />,
    },
  ]

  return (
    <div className="mb-16 max-lg:mx-auto max-lg:max-w-[90%]">
      <header>
        <PageTitle text="Overview" className="mt-6 sm:mt-10" />
        <OverviewGrid data={userBalance} className="mt-8" />
      </header>
      <main
        className="lg:grid lg:gap-6"
        style={{
          gridTemplateColumns: "1.1fr 0.9fr",
          gridTemplateRows: "repeat(5, 130px) 100px",
        }}
      >
        {sections.map(({ key, className, component }) => (
          <CardLayout key={key} className={className}>
            {component}
          </CardLayout>
        ))}
      </main>
    </div>
  )
}
