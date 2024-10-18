"use client"
import { useState } from "react"
import CaretDown from "@/src/ui/icons/icon-caret-down.svg"

type DropdownProps<T> = {
  label: string
  options: T[]
  selectedOption: T
  onSelect: (option: T) => void
  renderOption: (option: T) => React.ReactNode
  renderSelected: (option: T) => React.ReactNode
  getOptionKey: (option: T) => string | number
}

export default function Dropdown<T>({
  label,
  options,
  selectedOption,
  onSelect,
  renderOption,
  renderSelected,
  getOptionKey,
}: DropdownProps<T>) {
  const [isOpen, setIsOpen] = useState(false)

  const toggleDropdown = () => setIsOpen(prev => !prev)
  const closeDropdown = () => setIsOpen(false)

  const handleSelect = (option: T) => () => {
    onSelect(option)
    closeDropdown()
  }

  return (
    <div className="relative">
      <div className="text-xs font-bold">{label}</div>
      <div className="flex items-center justify-between rounded-lg border border-grey-500 px-5 py-3">
        {renderSelected(selectedOption)}
        <button type="button" onClick={toggleDropdown}>
          <CaretDown />
        </button>
      </div>
      {isOpen && (
        <ul className="absolute left-0 top-full z-10 mt-1 max-h-56 w-full overflow-auto rounded-lg bg-white px-5 shadow-lg">
          {options.map(option => (
            <li
              key={getOptionKey(option)}
              onClick={handleSelect(option)}
              className="cursor-pointer border-b border-b-grey-100 py-3"
            >
              {renderOption(option)}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
