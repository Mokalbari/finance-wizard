"use client"

// Hooks
import { useRef } from "react"
import useScreenSize from "@/src/hooks/useScreenSize"
import { useClickAway } from "@/src/hooks/useClickAway"
import { useDropdown } from "@/src/hooks/useDropdown"

// Components
import DesktopDropdown from "./desktop-dropdown"
import MobileButton from "./mobile-button"
import DropdownMenuItems from "./dropdown-menu-items"

// Types
import type { SortBy } from "@/src/lib/definitions"

type Props = {
  title: "Sort by" | "Category"
  data: SortBy[] | string[]
}

export default function DropdownMenu({ title, data }: Props) {
  const { isOpen, toggleDropdown, closeDropdown } = useDropdown()
  const { isMobile } = useScreenSize()
  const dropdownRef = useRef<HTMLDivElement>(null)

  useClickAway(dropdownRef, closeDropdown, isOpen)

  return (
    <div
      className="relative ml-6 flex items-center gap-2 text-sm"
      ref={dropdownRef}
    >
      {!isMobile ? (
        <DesktopDropdown title={title} data={data} />
      ) : (
        <MobileButton title={title} onClick={toggleDropdown} />
      )}
      {isOpen && isMobile ? <DropdownMenuItems data={data} /> : null}
    </div>
  )
}
