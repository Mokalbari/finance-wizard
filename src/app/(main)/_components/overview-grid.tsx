import OverviewCard from "./overview-card"

type Props = {
  className: string
  data: number[]
}

export default function OverviewGrid({ className, data }: Props) {
  const currentInfo = [
    { id: 1, title: "Current Balance", cur: data[0] },
    { id: 2, title: "Income", cur: data[1] },
    { id: 3, title: "Expenses", cur: data[2] },
  ]

  return (
    <ul
      className={`grid gap-4 sm:auto-cols-fr sm:grid-flow-col ${className || ""}`}
    >
      {currentInfo.map(item => (
        <li key={item.id}>
          <OverviewCard
            isFirst={item.id === 1}
            title={item.title}
            cur={`$ ${item.cur.toString()}`}
          />
        </li>
      ))}
    </ul>
  )
}
