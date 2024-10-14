import ColorDot from "@/src/ui/shared/atoms/color-dot"
import CardTitle from "@/src/ui/shared/atoms/card-title"
import Ellipsis from "@/src/ui/icons/icon-ellipsis.svg"
import { ColorPaletteHex } from "@/src/lib/definitions"

type Props = {
  theme: ColorPaletteHex
  category: string
}

export default function BudgetCardHeader({ category, theme }: Props) {
  return (
    <header className="flex items-center gap-4">
      <ColorDot color={theme} />
      <CardTitle text={category} />
      <div className="ml-auto">
        <Ellipsis />
      </div>
    </header>
  )
}
