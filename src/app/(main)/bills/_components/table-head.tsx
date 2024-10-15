import DropdownMenu from "@/src/ui/shared/table/dropdown-menu"
import { sortByArray } from "@/src/lib/placeholder-data"
import Search from "@/src/ui/shared/atoms/search"

export default async function TableHead() {
  return (
    <div className="flex w-full px-5 py-6">
      <Search
        placeholder="Search bills"
        show="loop"
        className="resize-vertical w-full min-w-32 max-w-sm"
      />
      <div className="ml-auto flex gap-6">
        <DropdownMenu title="Sort by" data={sortByArray} />
      </div>
    </div>
  )
}
