"use client"
// Hooks
import { useState } from "react"

// Data
import { sortData, filterData } from "@/app/lib/data"

// Components
import IconCarret from "@/app/ui/icons/icon-caret-down.svg"
import IconSort from "@/app/ui/icons/icon-sort-mobile.svg"
import IconFilter from "@/app/ui/icons/icon-filter-mobile.svg"
import useScreenSize from "@/app/hooks/useScreenSize"

type Props = {
  dropdownData: "sort" | "filter"
}

export default function DropDownMenu({ dropdownData }: Props) {
  const [isOpen, setIsOpen] = useState(false)
  const { isMobile } = useScreenSize()

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  if (isMobile)
    return (
      <menu className="relative cursor-pointer">
        <button className="" onClick={handleClick}>
          {dropdownData === "sort" ? <IconSort /> : <IconFilter />}
        </button>
        {isOpen && (
          <div className="absolute right-0 top-8 min-w-max rounded-lg bg-white px-4 shadow-xl">
            {dropdownData === "sort"
              ? sortData.map(listItem => (
                  <li
                    className="border-b-[1px] border-b-navy-grey/25 py-4 last-of-type:border-b-transparent"
                    key={listItem.id}
                  >
                    {listItem.data}
                  </li>
                ))
              : filterData.map(listItem => (
                  <li
                    className="border-b-[1px] border-b-navy-grey/25 py-4 last-of-type:border-b-transparent"
                    key={listItem.id}
                  >
                    {listItem.data}
                  </li>
                ))}
          </div>
        )}
      </menu>
    )

  return (
    <menu>
      <div>
        <span>Sort by</span>
        <button>
          Latest{" "}
          <span>
            <IconCarret />
          </span>
        </button>
      </div>
    </menu>
  )
}
