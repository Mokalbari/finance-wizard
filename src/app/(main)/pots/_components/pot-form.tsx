"use client"

import { useState } from "react"
import { colorPalette } from "@/src/lib/placeholder-data"
import { ColorPalette } from "@/src/lib/definitions"
import ColorDot from "@/src/ui/shared/atoms/color-dot"
import AddButton from "@/src/ui/shared/atoms/add-button"
import Dropdown from "@/src/ui/shared/atoms/dropdown"
import { createNewPot } from "../actions"

type Props = {
  close: () => void
}

export default function PotForm({ close }: Props) {
  const [currentColor, setCurrentColor] = useState<ColorPalette>(
    colorPalette[0],
  )

  return (
    <form action={createNewPot} className="flex flex-col">
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
        text="Add Pot"
        showBefore={false}
        onClick={close}
        className="mt-5"
      />
    </form>
  )
}
