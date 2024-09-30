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

// Utils
import { getKeyFromObject } from "@/app/lib/functions"

// Definitions
import type { DataItem, DropdownType } from "@/app/lib/definitions"

// Styles
import "./styles/styles.css"
import clsx from "clsx"

type Props = {
  dropdownData: DropdownType
}

const dropDownConfig = {
  sort: {
    data: sortData,
    icon: <IconSort />,
    label: "Sort by",
    defaultText: "Latest",
  },
  filter: {
    data: filterData,
    icon: <IconFilter />,
    label: "Category",
    defaultText: "All transactions",
  },
}

export default function DropDownMenu({ dropdownData }: Props) {
  const [isOpen, setIsOpen] = useState(false)
  const { isMobile } = useScreenSize()

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  const { data, icon, label, defaultText } = getKeyFromObject(
    dropDownConfig,
    dropdownData,
  )

  return (
    <menu
      className={clsx("relative cursor-pointer", {
        "flex items-center gap-4": !isMobile,
      })}
    >
      {isMobile ? (
        <button onClick={handleClick}>{icon}</button>
      ) : (
        <>
          <span>{label}</span>
          <button
            className="flex items-center gap-4 rounded-lg border-[1px] border-grey-900 bg-white px-5 py-3"
            onClick={handleClick}
          >
            {dropdownData === "sort" ? defaultText : defaultText}{" "}
            <span>
              <IconCarret />
            </span>
          </button>
        </>
      )}
      {isOpen && (
        <div
          className={`absolute ${isMobile ? "top-8" : "top-20"} right-0 min-w-max rounded-lg bg-white px-4 shadow-xl`}
        >
          {data.map((listItem: DataItem) => (
            <li
              className="border-b-[1px] border-b-navy-grey/25 py-4 last-of-type:border-b-0 last-of-type:border-b-transparent"
              key={listItem.id}
            >
              {listItem.data}
            </li>
          ))}
        </div>
      )}
    </menu>
  )
}
