import {
  formatNumberToString,
  getUniqueID,
  reduceSumFromArray,
} from "@/src/lib/functions"
import { BudgetCardType } from "@/src/lib/definitions"
import PieChart from "@/src/ui/shared/atoms/pie-chart"
import CardTitle from "@/src/ui/shared/atoms/card-title"

type Props = {
  data: BudgetCardType[]
}

export default function BudgetPieChart({ data }: Props) {
  return (
    <section className="mx-4 mt-8 rounded-lg bg-white px-5 pb-4 pt-11">
      <div className="grid place-items-center">
        <PieChart className="col-start-1 row-start-1" data={data} />
        <div className="z-10 col-start-1 row-start-1 flex flex-col items-center">
          <span className="text-xl font-bold">
            ${Math.abs(Math.round(reduceSumFromArray(data, "total_spent")))}
          </span>
          <span className="text-xs text-grey-500">
            of ${reduceSumFromArray(data, "maximum")} limit
          </span>
        </div>
      </div>
      <ul className="mt-11">
        <CardTitle text="Spending Summary" />
        {data.map(item => (
          <li
            className="border-b border-b-grey-100 py-4 first-of-type:pt-6 last-of-type:border-b-transparent"
            key={getUniqueID()}
          >
            <div className="flex items-center justify-between">
              <div>
                <span
                  className="rounded-sm px-4 text-sm text-grey-500"
                  style={{ borderLeft: `4px solid ${item.theme}` }}
                >
                  {item.category}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-base font-bold">
                  {formatNumberToString(Math.abs(item.total_spent))}
                </span>
                <span className="text-xs text-grey-500">
                  {" "}
                  of ${item.maximum}
                </span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
