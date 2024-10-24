"use client"

import IconSearch from "@/ui/icons/icon-search.svg"
import clsx from "clsx"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useDebouncedCallback } from "use-debounce"

type Props = {
  placeholder: string
  show: "dollar" | "loop" | null
  className?: string
}

export default function Search({ placeholder, show, className }: Props) {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()

  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams)
    if (term) {
      params.set("query", term)
    } else {
      params.delete("query")
    }
    replace(`${pathname}?${params.toString()}`)
  }, 300)

  return (
    <div className="relative flex">
      <input
        onChange={event => {
          handleSearch(event.target.value)
        }}
        defaultValue={searchParams.get("query")?.toString()}
        className={clsx(
          "flex-1 rounded-lg border-[1px] border-beige-500 px-5 py-3 text-sm placeholder:text-beige-500 active:border-grey-900",
          `${className}`,
          { "pl-10": show === "dollar" },
          { "pr-10": show === "loop" },
        )}
        placeholder={placeholder}
      />
      {show === "dollar" && (
        <span className="absolute left-0 top-1 ml-4 translate-y-2/4 text-sm text-beige-500">
          $
        </span>
      )}
      {show === "loop" && (
        <span className="absolute right-0 top-[10%] mr-4 translate-y-3/4">
          <IconSearch />{" "}
        </span>
      )}
    </div>
  )
}
