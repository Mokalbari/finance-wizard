import CardTitle from "@/src/ui/shared/atoms/card-title"
import ColorDot from "@/src/ui/shared/atoms/color-dot"
import { ColorPaletteHex } from "@/src/lib/definitions"
import EllipsisButton from "@/src/ui/shared/atoms/ellipsis-button"
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
