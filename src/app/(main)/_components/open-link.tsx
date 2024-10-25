import CaretDown from "@/assets/icons/icon-caret-down.svg"
import type { Links } from "@/lib/types/definitions"
import Link from "next/link"

type Props = { text: string; href: Links }

export default function OpenLink({ text, href }: Props) {
  return (
    <Link className="flex items-center gap-3" href={href}>
      <span className="text-sm text-grey-500">{text}</span>
      <CaretDown />
    </Link>
  )
}
