import PageTitle from "../ui/shared/atoms/page-title"
import BudgetSection from "./_components/budget-section"
import OverviewGrid from "./_components/overview-grid"
import PotsSection from "./_components/pots-section"
import CardLayout from "./_components/card-layout"
import TransactionSection from "./_components/transaction-section"
import BillsSection from "./_components/bills-section"

import "./styles/home-page.css"
import {
  fetchLatestTransactions,
  fetchPotsOverview,
  fetchUsersFinance,
} from "./actions"

export default async function Home() {
  const userBalance = await fetchUsersFinance()
  const potsOverview = await fetchPotsOverview()
  const latestTransactions = await fetchLatestTransactions()

  return (
    <div className="mb-48 max-lg:mx-auto max-lg:max-w-[90%]">
      <PageTitle htmlTag="h1" text="Overview" className="mt-6 sm:mt-10" />
      <OverviewGrid data={userBalance} className="mt-8" />
      <div className="cstm-grid">
        <CardLayout className="cstm-grid-pots mt-8">
          <PotsSection data={potsOverview} />
        </CardLayout>
        <CardLayout className="cstm-grid-transaction mt-8">
          <TransactionSection data={latestTransactions} />
        </CardLayout>
        <CardLayout className="cstm-grid-budget mt-8">
          <BudgetSection />
        </CardLayout>
        <CardLayout className="cstm-grid-bills mt-8">
          <BillsSection />
        </CardLayout>
      </div>
    </div>
  )
}
