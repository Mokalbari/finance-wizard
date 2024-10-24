import type { SortBy } from "@/lib/definitions"
import clsx from "clsx"
import { usePathname, useRouter, useSearchParams } from "next/navigation"

type Props = {
  data: SortBy[] | string[]
}

export default function DropdownMenuItems({ data }: Props) {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()

  const currentCategory = searchParams.get("category") || "All transactions"

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
    <div className="absolute right-0 top-12">
      <ul className="rounded-lg bg-white px-5 shadow-lg">
        {data.map(item => (
          <li
            className={clsx(
              "border-b border-b-grey-300/50 py-3 last-of-type:border-b-transparent",
              {
                "font-bold": currentCategory === item,
              },
            )}
            key={item}
            onClick={() => handleSearchCategory(item)}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}
