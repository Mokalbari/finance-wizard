import { ColorPalette } from "@/src/lib/definitions"

type Props = { color: ColorPalette }

export default function ColorDot({ color }: Props) {
  return <div className={`${color} aspect-square w-4 rounded-full`} />
}
