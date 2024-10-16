import ColorDot from "@/src/ui/shared/atoms/color-dot"
import CardTitle from "@/src/ui/shared/atoms/card-title"

import { ColorPaletteHex } from "@/src/lib/definitions"
import EllipsisButton from "@/src/ui/shared/atoms/ellipsis-button"

type Props = {
  theme: ColorPaletteHex
  category: string
}

export default function BudgetCardHeader({ category, theme }: Props) {
  return (
    <header className="flex items-center gap-4">
      <ColorDot color={theme} />
      <CardTitle text={category} />
      <EllipsisButton />
    </header>
  )
}
