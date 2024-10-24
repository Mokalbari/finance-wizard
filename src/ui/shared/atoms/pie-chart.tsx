"use client"

import { BudgetOverview } from "@/lib/definitions"
import { ArcElement, Chart, Legend, Tooltip, TooltipItem } from "chart.js"
import { Doughnut } from "react-chartjs-2"

Chart.register(ArcElement, Tooltip, Legend)

type Props = {
  className: string
  data: BudgetOverview[]
}

export default function PieChart({ className, data }: Props) {
  // Les données pour le Donut Chart
  const donutChartData = {
    labels: data.map(item => item.category),
    datasets: [
      {
        label: "Expenses",
        data: data.map(item => item.maximum),
        backgroundColor: data.map(item => item.theme),
        borderColor: data.map(item => item.theme),
        borderWidth: 1,
      },
    ],
  }
  const options = {
    cutout: "70%",
    plugins: {
      legend: {
        display: false, // Masque la légende globale au-dessus du graphique
      },
      tooltip: {
        enabled: true, // Affiche les tooltips au survol
        callbacks: {
          label: function (tooltipItem: TooltipItem<"doughnut">) {
            // Affiche le label personnalisé dans le tooltip
            const label = data[tooltipItem.dataIndex].category || ""
            const value = data[tooltipItem.dataIndex].maximum
            return `${label}: ${value}`
          },
        },
      },
    },
  }
  return (
    <Doughnut
      className={`mx-auto aspect-square max-h-[240px] max-w-[240px] ${className || ""}`}
      data={donutChartData}
      options={options}
    />
  )
}
