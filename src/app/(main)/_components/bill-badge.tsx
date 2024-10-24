import { BillsSortingOptions, ColorPaletteHex } from "@/lib/definitions"

type Props = {
  borderColor: ColorPaletteHex
  sortingOption: BillsSortingOptions
  amount: string
}

export default function BillBadge({
  sortingOption,
  amount,
  borderColor,
}: Props) {
  return (
    <li
      className={`flex justify-between rounded-lg bg-beige-100 px-4 py-5`}
      style={{ borderLeft: `0.25rem ${borderColor} outset` }}
    >
      <span className="text-grey-500">{sortingOption}</span>
      <span className="font-bold">${amount}</span>
    </li>
  )
}
