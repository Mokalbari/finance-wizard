"use client"
import { useState } from "react"
import ColorDot from "@/src/ui/shared/atoms/color-dot"
import AddButton from "@/src/ui/shared/atoms/add-button"
import { categories, colorPalette } from "@/src/lib/placeholder-data"
import { ColorPalette } from "@/src/lib/definitions"
import Dropdown from "@/src/ui/shared/atoms/dropdown"

export default function BudgetForm() {
  const [currentCategory, setCurrentCategory] = useState("Entertainment")
  const [currentColor, setCurrentColor] = useState<ColorPalette>(
    colorPalette[0],
  )

  return (
    <form className="flex flex-col">
      {/* Sélecteur de catégorie */}
      <Dropdown
        label="Budget Category"
        options={categories}
        selectedOption={currentCategory}
        onSelect={setCurrentCategory}
        renderOption={category => <span>{category}</span>}
        renderSelected={category => <span>{category}</span>}
        getOptionKey={category => category}
      />

      {/* Champ de saisie pour le budget maximal */}
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

      {/* Sélecteur de couleur */}
      <div className="mt-4">
        <Dropdown
          label="Color Tag"
          options={colorPalette}
          selectedOption={currentColor}
          onSelect={setCurrentColor}
          renderOption={color => (
            <div className="flex items-center gap-2">
              <ColorDot color={color.colorHex} />
              <span className="text-black">{color.colorName}</span>
            </div>
          )}
          renderSelected={color => (
            <div className="flex items-center gap-2">
              <ColorDot color={color.colorHex} />
              <span className="text-black">{color.colorName}</span>
            </div>
          )}
          getOptionKey={color => color.colorHex}
        />
      </div>

      {/* Bouton d'ajout */}
      <AddButton
        isBlack
        text="Add Budget"
        showBefore={false}
        className="mt-5"
      />
    </form>
  )
}
