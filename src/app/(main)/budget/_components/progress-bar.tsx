import { formatNumberToString, getPercentage } from "@/src/lib/functions"
import { ColorPaletteHex } from "@/src/lib/definitions"

type Props = {
  totalSpent: number
  maximum: number
  theme: ColorPaletteHex
}

export default function ProgressBar({ totalSpent, maximum, theme }: Props) {
  return (
    <>
      <span className="text-grey-500">Maximum of ${maximum}</span>
      <div className="mt-4 h-8 w-full rounded-sm bg-beige-100 p-1">
        <div
          style={{
            backgroundColor: `${theme}`,
            width: `${getPercentage(Math.abs(totalSpent), maximum)}%`,
          }}
          className="h-[90%] rounded-md"
        />
      </div>
      <div className="mt-4 flex justify-between">
        <div
          style={{ borderLeft: `4px solid ${theme}` }}
          className="flex w-1/2 flex-col rounded-sm px-4"
        >
          <div className="text-grey-500">Spent</div>
          <div className="font-bold">{formatNumberToString(totalSpent)}</div>
        </div>
        <div className="border-l-grey flex w-1/2 flex-col rounded-sm border-l-4 px-4">
          <div className="text-grey-500 sm:hidden">Free</div>
          <div className="text-grey-500 max-sm:hidden">Remaining</div>
          <div className="font-bold">${maximum - Math.abs(totalSpent)}</div>
        </div>
      </div>
    </>
  )
}
