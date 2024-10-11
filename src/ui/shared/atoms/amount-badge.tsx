"use client"

import useScreenSize from "@/src/hooks/useScreenSize"
import {
  getBadgeColor,
  formatDate,
  formatNumberToString,
} from "@/src/lib/functions"

type Props = {
  amount: number
  date: Date
}

export default function AmountBadge({ amount, date }: Props) {
  const { isMobile } = useScreenSize()

  return (
    <div className="flex flex-col items-end gap-2">
      <span className={`text-sm font-bold ${getBadgeColor(amount)}`}>
        {formatNumberToString(amount)}
      </span>
      {isMobile && (
        <span className="text-xs text-grey-500">{formatDate(date)}</span>
      )}
    </div>
  )
}
