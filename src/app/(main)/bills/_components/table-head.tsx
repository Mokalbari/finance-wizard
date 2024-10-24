import DropdownMenu from "@/components/table/dropdown-menu"
import Search from "@/components/ui/search"
import { sortByArray } from "@/lib/placeholder-data"

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
