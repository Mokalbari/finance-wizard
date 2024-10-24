import { Links } from "@/lib/definitions"
import Carret from "@/ui/icons/icon-caret-down.svg"
import Link from "next/link"

type Props = { text: string; href: Links }

export default function OpenLink({ text, href }: Props) {
  return (
    <Link className="flex items-center gap-3" href={href}>
      <span className="text-sm text-grey-500">{text}</span>
      <Carret />
    </Link>
  )
}
