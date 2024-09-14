"use client"

import { Doughnut } from "react-chartjs-2"
import { Chart, ArcElement, Tooltip, Legend } from "chart.js"

Chart.register(ArcElement, Tooltip, Legend)

type Props = { className: string }

export default function PieChart({ className }: Props) {
  // Les données pour le Donut Chart
  const data = {
    datasets: [
      {
        label: "Expenses",
        data: [50, 750, 75, 100],
        backgroundColor: ["#277C78", "#82C9D7", "#F2CDAC", "#626070"],
        borderColor: ["#277C78", "#82C9D7", "#F2CDAC", "#626070"],
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
      data={data}
      options={options}
    />
  )
}
