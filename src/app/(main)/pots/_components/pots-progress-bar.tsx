import { getPercentage } from "@/lib/functions/general-utils/functions"
import type { ColorPaletteHex } from "@/lib/types/definitions"

type Props = {
  theme: ColorPaletteHex
  total: number
  target: number
}

export default function PotsProgressBar({ theme, total, target }: Props) {
  return (
    <div className="mt-4 h-2 w-full rounded-lg bg-beige-100">
      <div
        className="h-full rounded-lg"
        style={{
          backgroundColor: `${theme}`,
          width: `${getPercentage(total, target)}%`,
        }}
      />
    </div>
  )
}
