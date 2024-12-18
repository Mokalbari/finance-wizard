import PageTitle from "@/components/ui/page-title"
import Pagination from "./_components/pagination"

import type { SortBy } from "@/lib/types/definitions"
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
  const currentSortingOption = searchParams?.sort ?? "Latest"
  const totalPages = await fetchTotalPages(currentCategory)

  return (
    <main className="mb-32 max-lg:mx-10 max-sm:mx-4 lg:mb-12">
      <PageTitle text="Transactions" className="mt-8" />
      <div className="my-8 rounded-lg bg-white px-5 py-6 sm:p-8">
        <TableHead />
        <Table
          currentPage={currentPage}
          category={currentCategory}
          query={currentQuery}
          sort={currentSortingOption}
        />
        <Pagination totalPages={totalPages} />
      </div>
    </main>
  )
}
