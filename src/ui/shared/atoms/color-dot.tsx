import { ColorPaletteHex } from "@/src/lib/definitions"

type Props = { color: ColorPaletteHex }

export default function ColorDot({ color }: Props) {
  return <div className={`bg-[${color}] aspect-square w-4 rounded-full`} />
}
