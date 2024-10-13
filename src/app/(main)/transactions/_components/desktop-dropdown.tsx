import { useSearchParams, usePathname, useRouter } from "next/navigation"
import { getUniqueID } from "@/src/lib/functions"

type Props = {
  title: "Sort by" | "Category"
  data: string[]
}

export default function DesktopDropdown({ title, data }: Props) {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()

  const currentCategory = searchParams.get("category") || "All transactions"
  const currentSortingOption = searchParams.get("sort") || "Latest"

  const handleSearchCategory = (term: string) => {
    const params = new URLSearchParams(searchParams)
    if (term) {
      params.set("category", term)
    } else {
      params.delete("category")
    }
    replace(`${pathname}?${params.toString()}`)
  }

  return (
    <>
      <label className="min-w-fit text-grey-500" htmlFor="filter">
        {title}
      </label>
      <select
        onChange={event => handleSearchCategory(event.target.value)}
        className="rounded-lg border border-grey-500 bg-white px-5 py-3"
        id="filter"
        value={title === "Sort by" ? currentSortingOption : currentCategory}
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
