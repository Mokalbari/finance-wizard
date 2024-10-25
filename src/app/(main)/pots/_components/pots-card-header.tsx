import CardTitle from "@/components/ui/card-title"
import ColorDot from "@/components/ui/color-dot"
import EllipsisButton from "@/components/ui/ellipsis-button"
import type { ColorPaletteHex } from "@/lib/types/definitions"
import PotsEllipsisList from "./pots-ellipsis-list"

type Props = {
  theme: ColorPaletteHex
  name: string
}

export default function PotsCardHeader({ theme, name }: Props) {
  return (
    <header className="flex items-center justify-between">
      <div className="flex items-center gap-4">
        <ColorDot color={theme} />
        <CardTitle text={name} />
      </div>
      <EllipsisButton>
        <PotsEllipsisList />
      </EllipsisButton>
    </header>
  )
}
