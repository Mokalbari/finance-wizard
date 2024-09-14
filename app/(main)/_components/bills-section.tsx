// type Props = {}

import BillBadge from "./bill-badge"
import CardHeader from "./card-header"

export default function BillsSection() {
  return (
    <>
      <CardHeader
        linkText="See Details"
        cardTitle="Recurring Bills"
        href="/budget"
      />
      <ul className="mt-8 flex flex-col gap-2">
        <BillBadge />
        <BillBadge />
        <BillBadge />
      </ul>
    </>
  )
}
