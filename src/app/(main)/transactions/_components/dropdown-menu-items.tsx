import { getUniqueID } from "@/src/lib/functions"
import type { SortBy } from "@/src/lib/definitions"

type Props = {
  data: SortBy[] | string[]
}

export default function DropdownMenuItems({ data }: Props) {
  return (
    <div className="absolute right-0 top-12">
      <ul className="rounded-lg bg-white px-5 shadow-lg">
        {data.map(item => (
          <li
            className="border-b border-b-grey-300/50 py-3 last-of-type:border-b-transparent"
            key={getUniqueID()}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}
