import { createNewSetFromObjKey } from "@/lib/functions"
import { sortByArray } from "@/lib/placeholder-data"
import Search from "@/ui/shared/atoms/search"
import DropdownMenu from "@/ui/shared/table/dropdown-menu"
import { fetchCategories } from "../actions"

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
