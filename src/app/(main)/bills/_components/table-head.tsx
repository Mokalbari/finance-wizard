import { sortByArray } from "@/lib/placeholder-data"
import Search from "@/ui/shared/atoms/search"
import DropdownMenu from "@/ui/shared/table/dropdown-menu"

export default async function TableHead() {
  return (
    <div className="flex w-full">
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
