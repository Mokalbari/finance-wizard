import PageTitle from "../../ui/shared/atoms/page-title"
import BudgetSection from "./_components/budget-section"
import OverviewGrid from "./_components/overview-grid"
import PotsSection from "./_components/pots-section"
import CardLayout from "./_components/card-layout"
import TransactionSection from "./_components/transaction-section"
import BillsSection from "./_components/bills-section"

import {
  fetchBudgetOverview,
  fetchLatestTransactions,
  fetchPotsOverview,
  fetchRecurringBills,
  fetchUsersFinance,
} from "./actions"

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
    fetchRecurringBills(),
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
    <div className="mb-48 max-lg:mx-auto max-lg:max-w-[90%]">
      <PageTitle htmlTag="h1" text="Overview" className="mt-6 sm:mt-10" />
      <OverviewGrid data={userBalance} className="mt-8" />
      <div
        className="lg:grid lg:gap-6"
        style={{
          gridTemplateColumns: "1.1fr 0.9fr",
          gridTemplateRows: "repeat(6, 9.375rem)",
        }}
      >
        {sections.map(({ key, className, component }) => (
          <CardLayout key={key} className={className}>
            {component}
          </CardLayout>
        ))}
      </div>
    </div>
  )
}
