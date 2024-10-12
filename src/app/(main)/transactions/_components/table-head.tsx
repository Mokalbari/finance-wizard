import DropdownMenu from "./dropdown-menu"
import { sortByArray } from "@/src/lib/placeholder-data"
import { createNewSetFromObjKey } from "@/src/lib/functions"
import { fetchCategories } from "../actions"

export default async function TableHead() {
  const categories = await fetchCategories()
  const defaultArray = createNewSetFromObjKey(categories, "category")
  const modifiedArray = ["All transactions", ...defaultArray]

  return (
    <div className="flex w-full">
      <input
        type="text"
        placeholder="Search transaction"
        className="resize-vertical w-full min-w-32 max-w-xs rounded-lg border border-grey-900 px-5 py-3 text-sm"
      />
      <div className="ml-auto flex gap-6">
        <DropdownMenu title="Sort by" data={sortByArray} />
        <DropdownMenu title="Category" data={modifiedArray} />
      </div>
    </div>
  )
}
