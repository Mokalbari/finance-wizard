import Link from "next/link"
import CardTitle from "@/app/ui/shared/atoms/card-title"
import OpenLink from "./open-link"
import Pots from "@/app/ui/icons/icon-pot.svg"

type Props = { className: string }

export default function PotsSection({ className }: Props) {
  const data = [
    { id: 1, category: "Savings", money: "$159", color: "border-l-green" },
    { id: 2, category: "Gifts", money: "$40", color: "border-l-blue" },
    {
      id: 3,
      category: "Concert Ticket",
      money: "$110",
      color: "border-l-lavender",
    },
    { id: 4, category: "New Laptop", money: "$10", color: "border-l-yellow" },
  ]

  return (
    <section className={`rounded-lg bg-white px-5 py-6 ${className}`}>
      <div className="flex justify-between">
        <CardTitle text="Pots" />
        <Link href={"/pots"}>
          <OpenLink text="See Details" />
        </Link>
      </div>
      <div className="sm:flex sm:gap-5">
        <div className="mt-5 flex items-center gap-4 rounded-lg bg-beige-100 px-5 py-6 sm:basis-1/3">
          <Pots />
          <div className="flex flex-col">
            <span className="text-sm text-grey-500">Total Saved</span>
            <span className="text-xl font-bold">$850</span>
          </div>
        </div>
        <ul className="mt-5 grid grid-cols-2 gap-4 sm:flex-1">
          {data.map(item => (
            <li
              key={item.id}
              className={`flex flex-col ${item.color} rounded-sm border-l-4 px-4`}
            >
              {" "}
              <span className="text-xs text-grey-500">{item.category}</span>
              <span className="text-sm font-bold">{item.money}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
