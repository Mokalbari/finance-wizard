// type Props = {}
import "./styles/styles.css"
import PieChart from "./pie-chart"
import CardHeader from "./card-header"

export default function BudgetSection() {
  const data = [
    {
      id: 1,
      category: "Entertainment",
      money: "$159",
      color: "border-l-green",
    },
    { id: 2, category: "Bills", money: "$750", color: "border-l-blue" },
    {
      id: 3,
      category: "Dining Out",
      money: "$75",
      color: "border-l-yellow",
    },
    { id: 4, category: "Personal Care", money: "$100", color: "border-l-navy" },
  ]

  return (
    <>
      <CardHeader cardTitle="Budgets" linkText="See Details" href="/budget" />
      <div className="my-12 flex flex-col sm:flex-row sm:items-center sm:justify-around">
        <div className="superposition flex-1">
          <PieChart className="" />
          <div className="z-10 flex flex-col items-center">
            <span className="text-xl font-bold">$338</span>
            <span className="text-xs text-grey-500">of $975 limit</span>
          </div>
        </div>
        <ul className="mt-5 grid gap-4 max-sm:grid-cols-2 sm:grid-flow-row">
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
    </>
  )
}
