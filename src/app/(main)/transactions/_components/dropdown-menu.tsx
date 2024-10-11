"use client"

import { useState, useRef, useEffect } from "react"
import useScreenSize from "@/src/hooks/useScreenSize"
import type { SortBy } from "@/src/lib/definitions"
import { getUniqueID } from "@/src/lib/functions"
import FilterIcon from "@/src/ui/icons/icon-filter-mobile.svg"
import SortIcon from "@/src/ui/icons/icon-sort-mobile.svg"

type Props = {
  title: "Sort by" | "Category"
  data: SortBy[] | string[]
}

export default function DropdownMenu({ title, data }: Props) {
  const [isOpen, setIsOpen] = useState(false)
  const { isMobile } = useScreenSize()
  const dropdownRef = useRef<HTMLDivElement>(null)

  const handleClick = () => setIsOpen(!isOpen)
  const handleClickAway = (event: TouchEvent | MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false)
    }
  }

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickAway)
      document.addEventListener("touchstart", handleClickAway)
    } else {
      document.removeEventListener("mousedown", handleClickAway)
      document.removeEventListener("touchstart", handleClickAway)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickAway)
      document.removeEventListener("touchstart", handleClickAway)
    }
  }, [isOpen])

  return (
    <div className="relative flex items-center gap-2">
      {!isMobile && (
        <label className="text-grey-900" htmlFor="filter">
          {title}
        </label>
      )}
      {isMobile && (
        <button onClick={handleClick}>
          {title === "Sort by" ? <SortIcon /> : <FilterIcon />}
        </button>
      )}
      {!isMobile && (
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
      )}
      {isOpen && (
        <div ref={dropdownRef} className="absolute right-0 top-12">
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
      )}
    </div>
  )
}
