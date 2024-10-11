import type { SortBy } from "@/src/lib/definitions"
import { getUniqueID } from "@/src/lib/functions"

type Props = {
  title: "Sort by" | "Category"
  data: SortBy[] | string[]
}

export default async function DropdownMenu({ title, data }: Props) {
  return (
    <div className="flex items-center gap-2">
      <label className="text-grey-900" htmlFor="filter">
        {title}
      </label>
      <select
        className="rounded-lg border border-grey-500 bg-white px-5 py-3"
        id="filter"
      >
        {data.map(item => (
          <option key={getUniqueID()} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  )
}
