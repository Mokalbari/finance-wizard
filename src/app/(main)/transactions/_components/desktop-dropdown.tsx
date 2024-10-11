import { getUniqueID } from "@/src/lib/functions"

type Props = {
  title: "Sort by" | "Category"
  data: string[]
}

export default function DesktopDropdown({ title, data }: Props) {
  return (
    <>
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
    </>
  )
}
