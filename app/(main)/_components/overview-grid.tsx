import OverviewCard from "./overview-card"

type Props = { className: string }

export default function OverviewGrid({ className }: Props) {
  const data = [
    { id: 1, title: "Current Balance", cur: "$4,836.00" },
    { id: 2, title: "Income", cur: "$3,814.25" },
    { id: 3, title: "Expenses", cur: "$1,700.50" },
  ]

  return (
    <ul
      className={`grid gap-4 sm:auto-cols-fr sm:grid-flow-col ${className || ""}`}
    >
      {data.map(item => (
        <li key={item.id}>
          <OverviewCard
            isFirst={item.id === 1}
            title={item.title}
            cur={item.cur}
          />
        </li>
      ))}
    </ul>
  )
}
