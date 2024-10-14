import { ColorPaletteHex } from "@/src/lib/definitions"

type Props = { color: ColorPaletteHex }

export default function ColorDot({ color }: Props) {
  return (
    <div
      style={{ backgroundColor: color }}
      className={`aspect-square w-4 rounded-full`}
    />
  )
}
