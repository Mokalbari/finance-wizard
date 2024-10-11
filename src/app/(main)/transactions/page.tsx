import PageTitle from "@/src/ui/shared/atoms/page-title"
import Pagination from "./_components/pagination"
import { fetchCategories, fetchTransactions } from "./actions"

import Table from "./_components/table"
import TableHead from "./_components/table-head"

export default async function Page() {
  const categories = await fetchCategories()
  const transactions = await fetchTransactions()

  return (
    <main className="mb-32 max-lg:mx-10 lg:mb-12">
      <PageTitle htmlTag="h1" text="Transactions" className="mt-8" />
      <div className="my-8 rounded-lg bg-white p-8">
        <TableHead data={categories} />
        <Table data={transactions} />
        <Pagination />
      </div>
    </main>
  )
}
