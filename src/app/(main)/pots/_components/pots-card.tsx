import { PotsCardType } from "@/src/lib/definitions"
import { getPercentage } from "@/src/lib/functions"
import PotsProgressBar from "./pots-progress-bar"

import PotsBalanceButton from "./pots-balance-button"
import PotsCardHeader from "./pots-card-header"

type Props = {
  data: PotsCardType
}

export default async function PotsCard({ data }: Props) {
  return (
    <article className="rounded-lg bg-white px-5 pb-10 pt-6">
      <PotsCardHeader theme={data.theme} name={data.name} />
      <div className="flex items-center justify-between">
        <div className="text-sm text-grey-500">Total Saved</div>
        <div className="text-xl font-bold">${data.total.toFixed(2)}</div>
      </div>
      <PotsProgressBar
        theme={data.theme}
        total={data.total}
        target={data.target}
      />
      <div className="mt-3 flex items-center justify-between">
        <div className="text-xs font-bold text-grey-500">
          {getPercentage(data.total, data.target).toFixed(1)}%
        </div>
        <div className="text-xs text-grey-500">Target of ${data.target}</div>
      </div>
      <PotsBalanceButton />
    </article>
  )
}
