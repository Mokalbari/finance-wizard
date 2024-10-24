import PageTitle from "@/components/ui/page-title"
import Pagination from "./_components/pagination"

import { SortBy } from "@/lib/definitions"
import Table from "./_components/table"
import TableHead from "./_components/table-head"
import { fetchTotalPages } from "./actions"

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string
    page?: string
    category?: string
    sort?: SortBy
  }
}) {
  const currentPage = Number(searchParams?.page) || 1
  const currentCategory = searchParams?.category ?? "All transactions"
  const currentQuery = searchParams?.query || ""
  const totalPages = await fetchTotalPages(currentCategory)

  // to-do: implémenter le filtre "sort by"

  return (
    <main className="mb-32 max-lg:mx-10 max-sm:mx-4 lg:mb-12">
      <PageTitle text="Transactions" className="mt-8" />
      <div className="my-8 rounded-lg bg-white px-5 py-6 sm:p-8">
        <TableHead />
        <Table
          currentPage={currentPage}
          category={currentCategory}
          query={currentQuery}
        />
        <Pagination totalPages={totalPages} />
      </div>
    </main>
  )
}
