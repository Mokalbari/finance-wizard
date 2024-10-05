// type Props = {}
import "./styles/styles.css"
import PieChart from "./pie-chart"
import CardHeader from "./card-header"
import { BudgetOverview } from "@/app/lib/definitions"
import { reduceSumFromArray } from "@/app/lib/functions"

type Props = {
  data: BudgetOverview[]
}

export default function BudgetSection({ data }: Props) {
  return (
    <>
      <CardHeader cardTitle="Budgets" linkText="See Details" href="/budget" />
      <div className="my-12 flex flex-col sm:flex-row sm:items-center sm:justify-around">
        <div className="superposition flex-1">
          <PieChart className="" data={data} />
          <div className="z-10 flex flex-col items-center">
            <span className="text-xl font-bold">
              ${Math.abs(reduceSumFromArray(data, "total_spent"))}
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
              className={`flex flex-col border-l-[${item.theme}] rounded-sm border-l-4 px-4`}
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
