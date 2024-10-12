import PageTitle from "@/src/ui/shared/atoms/page-title"
import Pagination from "./_components/pagination"

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
  }
}) {
  //const query = searchParams?.query || ""
  //const currentPage = Number(searchParams?.page) || 1
  const currentCategory = String(searchParams?.category) || "All transactions"
  const totalPages = await fetchTotalPages(currentCategory)

  return (
    <main className="mb-32 max-lg:mx-10 max-sm:mx-4 lg:mb-12">
      <PageTitle htmlTag="h1" text="Transactions" className="mt-8" />
      <div className="my-8 rounded-lg bg-white px-5 py-6 sm:p-8">
        <TableHead />
        <Table category={currentCategory} />
        <Pagination totalPages={totalPages} />
      </div>
    </main>
  )
}
