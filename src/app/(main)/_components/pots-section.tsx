import IconPot from "@/assets/icons/icon-pot.svg"
import type { PotsOverview } from "@/lib/types/definitions"
import CardHeader from "./card-header"
type Props = {
  data: PotsOverview[]
}
export default function PotsSection({ data }: Props) {
  const totalSaved = data[0].total_sum

  return (
    <>
      <CardHeader cardTitle="Pots" linkText="See Details" href="/pots" />
      <div className="sm:flex sm:gap-5">
        <div className="mt-5 flex items-center gap-4 rounded-lg bg-beige-100 px-5 py-6 sm:basis-1/3">
          <IconPot />
          <div className="flex flex-col">
            <span className="text-sm text-grey-500">Total Saved</span>
            <span className="text-xl font-bold">$ {totalSaved}</span>
          </div>
        </div>
        <ul className="mt-5 grid grid-cols-2 gap-4 sm:flex-1">
          {data.map(item => (
            <li
              key={item.name}
              style={{ borderLeft: `4px solid ${item.theme}` }}
              className={`flex flex-col rounded-sm px-4`}
            >
              {" "}
              <span className="text-xs text-grey-500">{item.name}</span>
              <span className="text-sm font-bold">
                $ {item.total.toString()}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
