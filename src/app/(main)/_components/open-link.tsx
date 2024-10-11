import Link from "next/link"
import Carret from "@/src/ui/icons/icon-caret-down.svg"
import { Links } from "@/src/lib/definitions"

type Props = { text: string; href: Links }

export default function OpenLink({ text, href }: Props) {
  return (
    <Link className="flex items-center gap-3" href={href}>
      <span className="text-sm text-grey-500">{text}</span>
      <Carret />
    </Link>
  )
}
