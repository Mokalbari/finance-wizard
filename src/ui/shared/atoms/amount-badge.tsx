import {
  getBadgeColor,
  formatDate,
  formatNumberToString,
} from "@/src/lib/functions"

type Props = {
  amount: number
  date: Date
  showDate: boolean
}

export default function AmountBadge({ amount, date, showDate = true }: Props) {
  return (
    <div className="flex flex-col items-end gap-2">
      <span className={`text-sm font-bold ${getBadgeColor(amount)}`}>
        {formatNumberToString(amount)}
      </span>
      {showDate && (
        <span className="text-xs text-grey-500">{formatDate(date)}</span>
      )}
    </div>
  )
}
