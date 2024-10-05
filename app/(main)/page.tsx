import PageTitle from "../ui/shared/atoms/page-title"
import BudgetSection from "./_components/budget-section"
import OverviewGrid from "./_components/overview-grid"
import PotsSection from "./_components/pots-section"
import CardLayout from "./_components/card-layout"
import TransactionSection from "./_components/transaction-section"
import BillsSection from "./_components/bills-section"

import "./styles/home-page.css"
import {
  fetchBudgetOverview,
  fetchLatestTransactions,
  fetchPotsOverview,
  fetchRecurringBills,
  fetchUsersFinance,
} from "./actions"

export default async function Home() {
  const userBalance = await fetchUsersFinance()
  const potsOverview = await fetchPotsOverview()
  const latestTransactions = await fetchLatestTransactions()
  const budgetOverview = await fetchBudgetOverview()
  const recurringBills = await fetchRecurringBills()

  const sections = [
    {
      key: "pots",
      className: "cstm-grid-pots mt-8",
      component: <PotsSection data={potsOverview} />,
    },
    {
      key: "transactions",
      className: "cstm-grid-transaction mt-8",
      component: <TransactionSection data={latestTransactions} />,
    },
    {
      key: "budget",
      className: "cstm-grid-budget mt-8",
      component: <BudgetSection data={budgetOverview} />,
    },
    {
      key: "bills",
      className: "cstm-grid-bills mt-8",
      component: <BillsSection data={recurringBills} />,
    },
  ]

  return (
    <div className="mb-48 max-lg:mx-auto max-lg:max-w-[90%]">
      <PageTitle htmlTag="h1" text="Overview" className="mt-6 sm:mt-10" />
      <OverviewGrid data={userBalance} className="mt-8" />
      <div className="cstm-grid">
        {sections.map(({ key, className, component }) => (
          <CardLayout key={key} className={className}>
            {component}
          </CardLayout>
        ))}
      </div>
    </div>
  )
}
