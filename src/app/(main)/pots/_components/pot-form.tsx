"use client"

import AddButton from "@/components/ui/add-button"
import ColorDot from "@/components/ui/color-dot"
import Dropdown from "@/components/ui/dropdown"
import { colorPalette } from "@/lib/placeholder-data"
import type { ColorPalette } from "@/lib/types/definitions"
import { useState } from "react"
import { createNewPot, updatePot } from "../actions"

type Props = {
  close: () => void
  id: string
  method: "POST" | "PUT"
}

export default function PotForm({ close, method, id }: Props) {
  const [currentColor, setCurrentColor] = useState<ColorPalette>(
    colorPalette[0],
  )

  const updatePotWithId = updatePot.bind(null, id)

  const getAction = {
    POST: createNewPot,
    PUT: updatePotWithId,
  }

  return (
    <form action={getAction[method]} className="flex flex-col">
      <div>
        <div className="text-xs font-bold">Pot Name</div>
        <input
          name="potName"
          className="flex w-full items-center justify-between rounded-lg border border-grey-500 px-5 py-3"
          placeholder="e.g. Rainy Days"
          type="text"
        />

        <div className="mt-4">
          <label className="text-xs font-bold" htmlFor="spending">
            Target
          </label>
          <input
            name="targetAmount"
            className="w-full rounded-lg border border-grey-500 px-5 py-3"
            placeholder="$    e.g. 2000"
            type="text"
          />
        </div>

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
      </div>
      <input type="hidden" name="theme" value={currentColor.colorHex} />
      <AddButton
        type="submit"
        isBlack
        text={method === "POST" ? "Add Pot" : "Edit Pot"}
        showBefore={false}
        onClick={close}
        className="mt-5"
      />
    </form>
  )
}
