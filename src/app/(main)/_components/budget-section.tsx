import PieChart from "@/components/ui/pie-chart"
import { BudgetOverview } from "@/lib/definitions"
import { reduceSumFromArray } from "@/lib/functions"
import CardHeader from "./card-header"

type Props = {
  data: BudgetOverview[]
}

export default function BudgetSection({ data }: Props) {
  return (
    <>
      <CardHeader cardTitle="Budgets" linkText="See Details" href="/budget" />
      <div className="my-12 flex flex-col sm:flex-row sm:items-center sm:justify-around">
        <div className="grid flex-1 place-items-center">
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
        <ul className="mt-5 grid gap-4 max-sm:grid-cols-2 sm:grid-flow-row">
          {data.map(item => (
            <li
              key={item.id}
              style={{ borderLeft: `4px solid ${item.theme}` }}
              className={`flex flex-col rounded-sm px-4`}
            >
              {" "}
              <span className="text-xs text-grey-500">{item.category}</span>
              <span className="text-sm font-bold">{item.maximum}</span>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
