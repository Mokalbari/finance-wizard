import DropdownMenu from "@/components/table/dropdown-menu"
import Search from "@/components/ui/search"
import { sortByArray } from "@/lib/placeholder-data"
import { fetchCategories } from "../actions"
import { createNewSetFromObjKey } from "@/lib/functions/object-manipulation/createNewSetFromObjKey"

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
