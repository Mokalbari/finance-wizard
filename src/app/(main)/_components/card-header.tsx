import CardTitle from "@/components/ui/card-title"
import type { Links } from "@/lib/types/definitions"
import OpenLink from "./open-link"

type Props = {
  cardTitle: string
  linkText: string
  href: Links
}

export default function CardHeader({ cardTitle, linkText, href }: Props) {
  return (
    <div className="flex justify-between">
      <CardTitle text={cardTitle} />
      <OpenLink text={linkText} href={href} />
    </div>
  )
}
