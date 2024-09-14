import CardTitle from "@/app/ui/shared/atoms/card-title"
import OpenLink from "./open-link"
import { Links } from "@/app/lib/definitions"

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
