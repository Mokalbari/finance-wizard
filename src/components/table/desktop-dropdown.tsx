import { SortBy } from "@/lib/definitions"
import { usePathname, useRouter, useSearchParams } from "next/navigation"

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

  const handleSortingOption = (option: SortBy) => {
    const params = new URLSearchParams(searchParams)
    if (option) {
      params.set("sort", option)
    } else {
      params.delete("sort")
    }
    replace(`${pathname}?${params.toString()}`)
  }

  return (
    <>
      <label className="min-w-fit text-grey-500" htmlFor="filter">
        {title}
      </label>
      <select
        onChange={event =>
          title === "Sort by"
            ? handleSortingOption(event.target.value as SortBy)
            : handleSearchCategory(event.target.value)
        }
        className="rounded-lg border border-grey-500 bg-white px-5 py-3"
        id="filter"
        value={title === "Sort by" ? currentSortingOption : currentCategory}
      >
        {data.map(item => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </>
  )
}
