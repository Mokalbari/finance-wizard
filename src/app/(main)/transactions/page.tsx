import PageTitle from "@/src/ui/shared/atoms/page-title"
import Pagination from "./_components/pagination"

import Table from "./_components/table"
import TableHead from "./_components/table-head"

export default async function Page() {
  return (
    <main className="mb-32 max-lg:mx-10 max-sm:mx-4 lg:mb-12">
      <PageTitle htmlTag="h1" text="Transactions" className="mt-8" />
      <div className="my-8 rounded-lg bg-white px-5 py-6 sm:p-8">
        <TableHead />
        <Table />
        <Pagination />
      </div>
    </main>
  )
}
