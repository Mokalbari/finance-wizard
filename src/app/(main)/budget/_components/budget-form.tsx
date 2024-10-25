"use client"
import AddButton from "@/components/ui/add-button"
import ColorDot from "@/components/ui/color-dot"
import Dropdown from "@/components/ui/dropdown"
import { categories, colorPalette } from "@/lib/placeholder-data"
import type { ColorPalette } from "@/lib/types/definitions"
import { useState } from "react"
import { createNewBudget, updateBudget } from "../actions"

type Props = {
  method: "POST" | "PUT"
  close: () => void
  id: string
}

export default function BudgetForm({ close, method, id }: Props) {
  const [currentCategory, setCurrentCategory] = useState("Entertainment")
  const [currentColor, setCurrentColor] = useState<ColorPalette>(
    colorPalette[0],
  )

  const updateBudgetWithId = updateBudget.bind(null, id)

  const getAction = {
    POST: createNewBudget,
    PUT: updateBudgetWithId,
  }

  return (
    <form action={getAction[method]} className="flex flex-col">
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
          name="maximum"
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
      <input type="hidden" name="category" value={currentCategory} />
      <input type="hidden" name="theme" value={currentColor.colorHex} />

      {/* Bouton d'ajout */}
      <AddButton
        isBlack
        text={method === "POST" ? "Add Budget" : "Update Budget"}
        showBefore={false}
        className="mt-5"
        type="submit"
        onClick={close}
      />
    </form>
  )
}
