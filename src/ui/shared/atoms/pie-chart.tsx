"use client"

import { Doughnut } from "react-chartjs-2"
import { Chart, ArcElement, Tooltip, Legend } from "chart.js"
import { BudgetOverview } from "@/src/lib/definitions"

Chart.register(ArcElement, Tooltip, Legend)

type Props = {
  className: string
  data: BudgetOverview[]
}

export default function PieChart({ className, data }: Props) {
  // Les données pour le Donut Chart
  const donutChartData = {
    datasets: [
      {
        label: "Expenses",
        data: [
          data[0].maximum,
          data[1].maximum,
          data[2].maximum,
          data[3].maximum,
        ],
        backgroundColor: [
          data[0].theme,
          data[1].theme,
          data[2].theme,
          data[3].theme,
        ],
        borderColor: [
          data[0].theme,
          data[1].theme,
          data[2].theme,
          data[3].theme,
        ],
        borderWidth: 1,
      },
    ],
  }
  const options = {
    cutout: "70%",
  }

  return (
    <Doughnut
      className={`mx-auto aspect-square max-h-[240px] max-w-[240px] ${className || ""}`}
      data={donutChartData}
      options={options}
    />
  )
}
