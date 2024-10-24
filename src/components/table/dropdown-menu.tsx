"use client"

// Hooks
import { useClickAway } from "@/hooks/useClickAway"
import { useDropdown } from "@/hooks/useDropdown"
import useScreenSize from "@/hooks/useScreenSize"
import { useRef } from "react"

// Components
import DesktopDropdown from "./desktop-dropdown"
import DropdownMenuItems from "./dropdown-menu-items"
import MobileButton from "./mobile-button"

// Types
import type { SortBy } from "@/lib/definitions"

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
