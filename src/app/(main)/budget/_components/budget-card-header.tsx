import CardTitle from "@/components/ui/card-title"
import ColorDot from "@/components/ui/color-dot"

import EllipsisButton from "@/components/ui/ellipsis-button"
import { ColorPaletteHex } from "@/lib/definitions"
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
