import PageTitle from "@/src/ui/shared/atoms/page-title"
import DropdownMenu from "./_components/dropdown-menu"

import { fetchCategories } from "./actions"
import { sortByArray } from "@/src/lib/placeholder-data"
import { createNewSetFromObjKey } from "@/src/lib/functions"

export default async function Page() {
  const categories = await fetchCategories()

  return (
    <main>
      <PageTitle htmlTag="h1" text="Transactions" className="" />
      <div className="flex">
        <input
          type="text"
          placeholder="Search transaction"
          className="rounded-lg border border-grey-900 px-5 py-3"
        />
        <div className="ml-auto flex gap-4">
          <DropdownMenu title="Sort by" data={sortByArray} />
          <DropdownMenu
            title="Category"
            data={createNewSetFromObjKey(categories, "category")}
          />
        </div>
      </div>
    </main>
  )
}
