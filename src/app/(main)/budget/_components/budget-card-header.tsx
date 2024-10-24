import CardTitle from "@/ui/shared/atoms/card-title"
import ColorDot from "@/ui/shared/atoms/color-dot"

import { ColorPaletteHex } from "@/lib/definitions"
import EllipsisButton from "@/ui/shared/atoms/ellipsis-button"
import BudgetEllipsisList from "./budget-ellipsis-list"

type Props = {
  theme: ColorPaletteHex
  category: string
}

export default function BudgetCardHeader({ category, theme }: Props) {
  return (
    <header className="flex items-center gap-4">
      <ColorDot color={theme} />
      <CardTitle text={category} />
      <EllipsisButton>
        <BudgetEllipsisList />
      </EllipsisButton>
    </header>
  )
}
