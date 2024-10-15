import DropdownMenu from "@/src/ui/shared/table/dropdown-menu"
import { sortByArray } from "@/src/lib/placeholder-data"
import { createNewSetFromObjKey } from "@/src/lib/functions"
import { fetchCategories } from "../actions"
import Search from "@/src/ui/shared/atoms/search"

export default async function TableHead() {
  const categories = await fetchCategories()
  const defaultArray = createNewSetFromObjKey(categories, "category")
  const modifiedArray = ["All transactions", ...defaultArray]

  return (
    <div className="flex w-full">
      <Search
        placeholder="Search transaction"
        show="loop"
        className="resize-vertical w-full min-w-32 max-w-xs"
      />
      <div className="ml-auto flex gap-6">
        <DropdownMenu title="Sort by" data={sortByArray} />
        <DropdownMenu title="Category" data={modifiedArray} />
      </div>
    </div>
  )
}
