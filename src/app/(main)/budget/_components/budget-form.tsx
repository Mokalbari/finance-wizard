"use client"
import { useState } from "react"
import CaretDown from "@/src/ui/icons/icon-caret-down.svg"
import ColorDot from "@/src/ui/shared/atoms/color-dot"
import AddButton from "@/src/ui/shared/atoms/add-button"
import { categories } from "@/src/lib/placeholder-data"
import clsx from "clsx"
import { useDropdown } from "@/src/hooks/useDropdown"
import { colorPalette } from "@/src/lib/placeholder-data"
import { ColorPalette } from "@/src/lib/definitions"

// type Props = {}

export default function BudgetForm() {
  const [currentCategory, setCurrentCategory] = useState("Entertainment")

  const [currentColor, setCurrentColor] = useState<ColorPalette>({
    colorName: "Sky Cyan",
    colorHex: "#82C9D7",
  })

  const {
    isOpen: isOpenCategory,
    toggleDropdown: toggleCategory,
    closeDropdown: closeCategory,
  } = useDropdown()

  const {
    isOpen: isOpenColor,
    toggleDropdown: toggleColor,
    closeDropdown: closeColor,
  } = useDropdown()

  const selectCategory = (category: string) => () => {
    setCurrentCategory(category)
    closeCategory()
  }

  const selectColor = (color: ColorPalette) => () => {
    setCurrentColor(color) // Mettre à jour la couleur sélectionnée
    closeColor()
  }

  return (
    <form className="flex flex-col">
      <div className="relative">
        <div className="text-xs font-bold">Budget Category</div>
        <div className="flex items-center justify-between rounded-lg border border-grey-500 px-5 py-3">
          {currentCategory}
          <button type="button" onClick={toggleCategory}>
            <CaretDown />
          </button>
          <ul
            className={clsx(
              "absolute left-0 top-20 max-h-56 w-full overflow-scroll rounded-lg bg-white px-5 shadow-lg",
              {
                hidden: !isOpenCategory,
              },
            )}
          >
            {categories.map(category => (
              <li
                onClick={selectCategory(category)}
                className="cursor-pointer border-b border-b-grey-100 py-3"
                key={category}
              >
                {category}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-4">
          <label className="text-xs font-bold" htmlFor="spending">
            Maximum Spending
          </label>
          <input
            className="w-full rounded-lg border border-grey-500 px-5 py-3"
            placeholder="$    e.g. 2000"
            type="text"
          />
        </div>

        <div className="mt-4">
          <div className="text-xs font-bold">Color Tag</div>
          <div className="flex items-center justify-between rounded-lg border border-grey-500 px-5 py-3">
            <div className="flex items-center gap-2">
              <ColorDot color={currentColor.colorHex} />
              <span className="text-black">{currentColor.colorName}</span>
            </div>
            <button type="button" onClick={toggleColor}>
              <CaretDown />
            </button>
          </div>
        </div>
        <ul
          className={clsx(
            "absolute bottom-20 left-0 max-h-56 w-full overflow-scroll rounded-lg bg-white px-5 shadow-lg",
            {
              hidden: !isOpenColor,
            },
          )}
        >
          {colorPalette.map(color => (
            <li
              key={color.id}
              className="cursor-pointer border-b border-b-grey-100 py-3"
              onClick={selectColor(color)} // Met à jour la couleur sélectionnée
            >
              <div className="flex items-center gap-2">
                <ColorDot color={color.colorHex} />
                <span className="text-black">{color.colorName}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <AddButton
        isBlack
        text="Add Budget"
        showBefore={false}
        className="mt-5"
      />
    </form>
  )
}
